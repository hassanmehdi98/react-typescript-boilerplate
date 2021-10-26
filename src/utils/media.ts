import { MediaModel } from "../API/models/media.model";

type MediaSizeUnit = "B" | "KB" | "MB" | "GB";

export const getMediaPath = (media: MediaModel): string => {
  return media.Path && media.BasePath ? media.BasePath + media.Path : "";
};

export const getMediaThumbPath = (media: MediaModel): string => {
  return media.ThumbPath && media.BasePath
    ? media.BasePath + media.ThumbPath
    : "";
};

export const getMediaSize = (
  media: MediaModel,
  unit: MediaSizeUnit = "KB"
): number | null => {
  const divisor = {
    B: 1,
    KB: 1000,
    MB: 1000 * 1000,
    GB: 1000 * 1000 * 1000,
  };
  return media?.Meta?.Size ? media.Meta.Size / divisor[unit] : null;
};

export const getMediaRepresentationalSize = (size: number): string => {
  let s = size;
  let unit = "Bytes";

  if (size >= 1000 * 1000 * 1000) {
    s = size / (1000 * 1000 * 1000);
    unit = "GB";
  } else if (size >= 1000 * 1000) {
    s = size / (1000 * 1000);
    unit = "MB";
  } else if (size >= 1000) {
    s = size / 1000;
    unit = "KB";
  }

  return `${s.toFixed(2)} ${unit}`;
};
