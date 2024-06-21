import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RiskAssessmentTitle } from "../riskAssessment/RiskAssessmentTitle";

export const RiskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="assessmentId.id"
          reference="RiskAssessment"
          label="assessmentId"
        >
          <SelectInput optionText={RiskAssessmentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
