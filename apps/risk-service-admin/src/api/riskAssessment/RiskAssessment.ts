import { Risk } from "../risk/Risk";

export type RiskAssessment = {
  createdAt: Date;
  id: string;
  risks?: Risk | null;
  updatedAt: Date;
};
