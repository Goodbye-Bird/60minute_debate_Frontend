import Token from "../lib/Token";
import Login from "../components/Login";

const LoginPage: React.FC = () => {
  console.log(Token.getToken());
  return (
    <Login></Login>
  );
};

export default LoginPage;
