import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomRoute from "./components/Common/CustomRoute";
import * as P from "./page";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={P.LoginPage} />
        <Route exact path="/signup" component={P.SignupPage} />
        <CustomRoute path="/main" component={P.MainPage} />
      </Switch>
    </Router>
  );
};

export default App;
