import * as graphql from "@nestjs/graphql";
import { ApResolverBase } from "./base/ap.resolver.base";
import { Ap } from "./base/Ap";
import { ApService } from "./ap.service";

@graphql.Resolver(() => Ap)
export class ApResolver extends ApResolverBase {
  constructor(protected readonly service: ApService) {
    super(service);
  }
}
