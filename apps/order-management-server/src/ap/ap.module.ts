import { Module } from "@nestjs/common";
import { ApModuleBase } from "./base/ap.module.base";
import { ApService } from "./ap.service";
import { ApController } from "./ap.controller";
import { ApResolver } from "./ap.resolver";

@Module({
  imports: [ApModuleBase],
  controllers: [ApController],
  providers: [ApService, ApResolver],
  exports: [ApService],
})
export class ApModule {}
