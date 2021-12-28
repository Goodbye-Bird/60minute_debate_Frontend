import { Route } from "react-router-dom";
import Token from "../../../lib/Token";
import { FC } from "react";
import LoginPage from "../../../page/LoginPage";

interface ICustomRouteProps {
  path: string | string[];
  component: FC;
}

const CustomRoute: React.FC<ICustomRouteProps> = ({ path, component }) => {
  return (
    <Route
      exact
      path={path}
      component={Token.getToken() ? component : LoginPage}
    />
  );
};

export default CustomRoute;
