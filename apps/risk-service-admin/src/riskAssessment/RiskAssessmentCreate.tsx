import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RiskTitle } from "../risk/RiskTitle";

export const RiskAssessmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="risks.id" reference="Risk" label="Risks">
          <SelectInput optionText={RiskTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
