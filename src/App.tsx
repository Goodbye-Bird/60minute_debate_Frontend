import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import CustomRoute from "./components/Common/customRoute/CustomRoute";
import * as P from "./page";
import { useRecoilState } from "recoil";
import { userInfo } from "./store/userDataAtom";

const App: React.FC = () => {
  const [userData, setUserData] = useRecoilState(userInfo);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={P.LoginPage} />
        <Route exact path="/signup" component={P.SignupPage} />
        <CustomRoute
          path={["/main", "/main/debatelist"]}
          component={P.MainPage}
        />
        <CustomRoute path="/room" component={P.RoomPage} />
      </Switch>
    </Router>
  );
};

export default App;
