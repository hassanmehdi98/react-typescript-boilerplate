export type MediaModelMeta = {
  OriginalName: string;
  Size: number; // Bytes
  Extension: string;
};

export enum MediaModelType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  DOCUMENT = "DOCUMENT",
  AUDIO = "AUDIO",
}

export enum MediaModelStatus {
  ACTIVE = "ACTIVE",
  REMOVED = "REMOVED",
}

export type MediaModel = {
  Id: number;
  BasePath: string;
  Path: string;
  ThumbPath: string;
  Meta: MediaModelMeta;
  CreatedAt: string;
  Status: MediaModelStatus;
};
