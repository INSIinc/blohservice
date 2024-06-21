import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RiskAssessmentTitle } from "../riskAssessment/RiskAssessmentTitle";

export const RiskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="assessmentId.id"
          reference="RiskAssessment"
          label="assessmentId"
        >
          <SelectInput optionText={RiskAssessmentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
