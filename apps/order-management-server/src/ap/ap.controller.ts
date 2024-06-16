import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApService } from "./ap.service";
import { ApControllerBase } from "./base/ap.controller.base";

@swagger.ApiTags("aps")
@common.Controller("aps")
export class ApController extends ApControllerBase {
  constructor(protected readonly service: ApService) {
    super(service);
  }
}
