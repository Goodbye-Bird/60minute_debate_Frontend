import Token from "../lib/Token";

const LoginPage: React.FC = () => {
  console.log(Token.getToken());
  return <div>로그인 페이지</div>;
};

export default LoginPage;
