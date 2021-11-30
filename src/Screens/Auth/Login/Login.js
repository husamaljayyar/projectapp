import {
  FormBox,
  StyledImage,
  MainContainer,
  TypographyText,
  Container,
} from "./Login.Styles";
import Images from "../../../Assets/Group240.png";
import Button from "../../../Components/Button/Button";
import {
  ErrorMsg,
  Forms,
  Input,
  ElementLink,
} from "../../../Components/FormInput/FormInput.Styles";
import { Formik } from "formik";
import { loginSchema } from "../../../Valedation";
import { useHistory } from "react-router";
import { loginAction } from "../../../Redux/User/userActions";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const error = state.userDetails.error;
  const isLoading = state.userDetails.isLoading;

  const handleSaveChanges = async (values) => {
    dispatch(loginAction(values, history));
  };

  return (
    <MainContainer>
      <FormBox>
        <TypographyText fontSize={40} fontWeight={900} MarginTitle>
          Login
        </TypographyText>
        <TypographyText fontSize={18} color={"#707070"}>
          Login with your data that you entered during registration.
        </TypographyText>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema()}
          onSubmit={handleSaveChanges}
        >
          {({ errors, touched }) => {
            return (
              <Forms>
                <Input
                  name={"email"}
                  type={"email"}
                  placeholder={"Email"}
                  borderRadius={50}
                />
                {errors.email && touched.email ? (
                  <ErrorMsg>{errors.email}</ErrorMsg>
                ) : null}

                <Input
                  name={"password"}
                  type={"password"}
                  placeholder={"password"}
                  borderRadius={50}
                />
                {errors.password && touched.password ? (
                  <ErrorMsg>{errors.password}</ErrorMsg>
                ) : null}

                {error ? <ErrorMsg>{error}</ErrorMsg> : null}
                <Button isOrange
                
                  isLoading={isLoading}
                  width={"100%"}
                  height={"40px"}
                  borderRadius={"50px"}
                  text={"Login"}
                />
              </Forms>
            );
          }}
        </Formik>

        <Container>
          <TypographyText fontSize={17} color={"#000"}>
            <ElementLink>Forgot your password?</ElementLink>
          </TypographyText>
          <TypographyText fontSize={17} color={"#000"}>
            Don't have an account?
            <ElementLink to={"/register"}> Sign up</ElementLink>
          </TypographyText>
        </Container>
      </FormBox>
      <StyledImage src={Images} />
    </MainContainer>
  );
}

export default Login;
