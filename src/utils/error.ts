import { APIError, Response } from "../API/types";
import { API_STATUS_CODES, API_STATUS_DEFAULT_MESSAGE } from "../constants";

export const errorHandler = (
  status: number,
  body: Record<string, any>
): APIError => {
  const message = body?.Message
    ? body.Message
    : API_STATUS_DEFAULT_MESSAGE[status];

  if (status === API_STATUS_CODES.UNAUTHORIZED) {
    // Log out from the app
  }

  const err: APIError = {
    message,
    error: body?.Error,
  };

  throw err;
};
