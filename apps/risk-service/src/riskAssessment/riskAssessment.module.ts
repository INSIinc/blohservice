import { Module } from "@nestjs/common";
import { RiskAssessmentModuleBase } from "./base/riskAssessment.module.base";
import { RiskAssessmentService } from "./riskAssessment.service";
import { RiskAssessmentController } from "./riskAssessment.controller";
import { RiskAssessmentResolver } from "./riskAssessment.resolver";

@Module({
  imports: [RiskAssessmentModuleBase],
  controllers: [RiskAssessmentController],
  providers: [RiskAssessmentService, RiskAssessmentResolver],
  exports: [RiskAssessmentService],
})
export class RiskAssessmentModule {}
