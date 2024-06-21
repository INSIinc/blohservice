import { RiskAssessment } from "../riskAssessment/RiskAssessment";

export type Risk = {
  assessmentId?: RiskAssessment | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
