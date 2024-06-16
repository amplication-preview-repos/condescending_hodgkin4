import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApServiceBase } from "./base/ap.service.base";

@Injectable()
export class ApService extends ApServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
