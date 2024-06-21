import { StringFilter } from "../../util/StringFilter";
import { RiskWhereUniqueInput } from "../risk/RiskWhereUniqueInput";

export type RiskAssessmentWhereInput = {
  id?: StringFilter;
  risks?: RiskWhereUniqueInput;
};
