import { ApWhereInput } from "./ApWhereInput";
import { ApOrderByInput } from "./ApOrderByInput";

export type ApFindManyArgs = {
  where?: ApWhereInput;
  orderBy?: Array<ApOrderByInput>;
  skip?: number;
  take?: number;
};
