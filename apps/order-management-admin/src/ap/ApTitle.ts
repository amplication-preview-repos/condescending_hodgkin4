import { Ap as TAp } from "../api/ap/Ap";

export const AP_TITLE_FIELD = "id";

export const ApTitle = (record: TAp): string => {
  return record.id?.toString() || String(record.id);
};
