import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RiskTitle } from "../risk/RiskTitle";

export const RiskAssessmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="risks.id" reference="Risk" label="Risks">
          <SelectInput optionText={RiskTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
