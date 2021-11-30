import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../../Redux/User/userActions";
import { Typography, BorderLine } from "../../../App.Styles";
import { FormBox, StyledImage } from "../Register/Register.Styles";
import { Formik } from "formik";
import { registerSchema } from "../../../Valedation";
import {
  ErrorMsg,
  Input,
  Forms,
  ElementLink,
} from "../../../Components/FormInput/FormInput.Styles";
import { TypographyText, MainContainer, Container } from "./Register.Styles";
import Button from "../../../Components/Button/Button";
import Images from "../../../Assets/Group421.png";
import { Link } from "react-router-dom";

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const userDetails = state.userDetails;

  const { error, isLoading } = userDetails;

  const handleSaveChanges = async (values) => {
    dispatch(registerAction(values, history));
  };

  return (
    <MainContainer>
      <FormBox>
        <TypographyText fontSize={40} fontWeight={900} MarginTitle>
          Register
        </TypographyText>
        <TypographyText fontSize={18} color={"#707070"}>
          Sign up and get exclusive offers from us
        </TypographyText>

        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirmation: "",
            name: "",
          }}
          validationSchema={registerSchema()}
          onSubmit={handleSaveChanges}
        >
          {({ errors, touched }) => {
            return (
              <Forms>
                <Input
                  name={"name"}
                  type={"name"}
                  placeholder={"Name"}
                  borderRadius={50}
                />
                {errors.name && touched.name ? (
                  <ErrorMsg>{errors.name}</ErrorMsg>
                ) : null}

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

                <Input
                  name={"passwordConfirmation"}
                  type={"password"}
                  placeholder={"Confirmation password"}
                  borderRadius={50}
                />
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <ErrorMsg>{errors.passwordConfirmation}</ErrorMsg>
                ) : null}
                {error ? <ErrorMsg>{error}</ErrorMsg> : null}
                <Button isOrange
                  isLoading={isLoading}
                  text={"Sign up"}
                  width={"100%"}
                  height={"40px"}
                  borderRadius={"50px"}
                />
              </Forms>
            );
          }}
        </Formik>

        <Container>
          <Typography fontSize={17} color={"#000"}>
            Have an account ?<ElementLink to={"/login"}>Login</ElementLink>
          </Typography>
        </Container>
      </FormBox>
      <StyledImage src={Images} />
    </MainContainer>
  );
}

export default Register;
