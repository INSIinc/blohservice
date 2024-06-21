import { RiskAssessmentWhereUniqueInput } from "../riskAssessment/RiskAssessmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type RiskWhereInput = {
  assessmentId?: RiskAssessmentWhereUniqueInput;
  id?: StringFilter;
};
