import Login from "../../components/login";
import SignUp from "../../components/signup";
import SignupLogin from "../../components/signup-login";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div>
      {/* <Login /> */}
      {/* <SignUp /> */}
      <SignupLogin />
    </div>
  );
};

export default LoginPage;
