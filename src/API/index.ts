import Config from "../Config";
import { ApiMethods, Response, TOKEN_KEY } from "./types";

export default class API {
  private _apiRoute: string = Config.API_URL;
  private _token: string | null = null;
  private _queryParams: Record<string, any> = {};
  private _bodyData: Record<string, any> = {};
  private _method: ApiMethods = "GET";

  constructor(url: string, method: ApiMethods = "GET", includeToken?: boolean) {
    this._apiRoute = `${this._apiRoute}${url}`;
    if (method) {
      this._method = method;
    }
    if (includeToken) {
      this._token = localStorage.getItem(TOKEN_KEY);
    }
  }

  private _sanitizeQueryParams(): string {
    const paramsArr: Array<any> = [];
    Object.keys(this._queryParams).forEach((key) => {
      if (Array.isArray(this._queryParams[key])) {
        this._queryParams[key].forEach((val: string) => {
          paramsArr.push(`${key}[]=${val}`);
        });
      } else {
        paramsArr.push(`${key}=${this._queryParams[key]}`);
      }
    });

    return `?${paramsArr.join("&")}`;
  }

  attachToken(token?: string): this {
    this._token = token || localStorage.getItem(TOKEN_KEY);
    return this;
  }

  addQueryParams(params: Record<string, any>): this {
    this._queryParams = {
      ...this._queryParams,
      ...params,
    };
    return this;
  }

  addBodyData(data: Record<string, any>): this {
    this._bodyData = { ...data };
    return this;
  }

  async send(formData?: boolean): Promise<Response> {
    const route: string = Object.keys(this._queryParams).length
      ? `${this._apiRoute}${this._sanitizeQueryParams()}`
      : this._apiRoute;
    const headers: Record<string, string> = !formData
      ? {
          ContentType: "application/json",
          Accept: "application/json",
        }
      : {};

    if (this._token) {
      headers["Authorization"] = this._token;
    }
    const response: Response = {
      status: 200,
      data: null,
    };
    const api = await fetch(route, {
      method: this._method,
      headers: headers,
      ...(!!Object.keys(this._bodyData).length && {
        body: this._bodyData as any,
      }),
    });
    response.status = api.status;
    const data = await api.json();
    response.data = data;

    return response;
  }
}

// const login = async () => {
//   const api = await new API("/login", "POST")
//     .addBodyData({ email: "abc@example.com", password: "abc123" })
//     .addQueryParams({ asVendor: true })
//     .attachToken()
//     .send();
// };
