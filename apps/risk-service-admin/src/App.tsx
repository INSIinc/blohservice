import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RiskAssessmentList } from "./riskAssessment/RiskAssessmentList";
import { RiskAssessmentCreate } from "./riskAssessment/RiskAssessmentCreate";
import { RiskAssessmentEdit } from "./riskAssessment/RiskAssessmentEdit";
import { RiskAssessmentShow } from "./riskAssessment/RiskAssessmentShow";
import { RiskList } from "./risk/RiskList";
import { RiskCreate } from "./risk/RiskCreate";
import { RiskEdit } from "./risk/RiskEdit";
import { RiskShow } from "./risk/RiskShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"RiskService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="RiskAssessment"
          list={RiskAssessmentList}
          edit={RiskAssessmentEdit}
          create={RiskAssessmentCreate}
          show={RiskAssessmentShow}
        />
        <Resource
          name="Risk"
          list={RiskList}
          edit={RiskEdit}
          create={RiskCreate}
          show={RiskShow}
        />
      </Admin>
    </div>
  );
};

export default App;
