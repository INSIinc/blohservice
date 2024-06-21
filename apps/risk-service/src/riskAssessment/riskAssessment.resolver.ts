import * as graphql from "@nestjs/graphql";
import { RiskAssessmentResolverBase } from "./base/riskAssessment.resolver.base";
import { RiskAssessment } from "./base/RiskAssessment";
import { RiskAssessmentService } from "./riskAssessment.service";

@graphql.Resolver(() => RiskAssessment)
export class RiskAssessmentResolver extends RiskAssessmentResolverBase {
  constructor(protected readonly service: RiskAssessmentService) {
    super(service);
  }
}
