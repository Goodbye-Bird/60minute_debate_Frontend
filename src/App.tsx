import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import CustomRoute from "./components/Common/customRoute/CustomRoute";
import * as P from "./page";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={P.LoginPage} />
        <Route exact path="/signup" component={P.SignupPage} />
        <CustomRoute path="/main" component={P.MainPage} />
        <CustomRoute path="/room" component={P.RoomPage} />
      </Switch>
    </Router>
  );
};

export default App;
