import { SpinnerContainer, Typography } from "../../../App.Styles";
import Button from "../../../Components/Button/Button";
import { Formik } from "formik";
import { updateProfileSchema } from "../../../Valedation";
import { MainContainer, Container } from "./UpdateProfileScreen.Styles";
import {
  ErrorMsg,
  Input,
  Forms,
} from "../../../Components/FormInput/FormInput.Styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileAction,
  updateProfileAction,
} from "../../../Redux/User/userActions";
import { useHistory } from "react-router";

function UpdateProfileScreen(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const userDetails = state.userDetails;

  const { error, isLoading } = userDetails;

  const handleSaveChanges = async (values) => {
    dispatch(updateProfileAction(values, history));
  };

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  const InputStyle = {
    border: "none",
    borderRadius: "16px",
    width: "90%",
  };
  const ButtonStyle = {
    margin: "10% 20%",
    color: "#000",
    height: "50px",
    fontSize: "1.2rem",
    fontWeight: 700,
  };
  return state.userDetails.userProfile?.isLoading ? (
    <SpinnerContainer />
  ) : (
    <MainContainer>
      <Container>
        <Typography 
          fontWeight={700}
          fontSize={32}
          color={"#fff"}
          style={{ fontFamily: "Monospace" }}
        >
          My Profile
        </Typography>

        <Formik
          initialValues={{
            email: state.userDetails.userProfile?.user?.email,
            password: "",
            passwordConfirmation: "",
            name: state.userDetails.userProfile?.user?.name,
          }}
          validationSchema={updateProfileSchema()}
          onSubmit={handleSaveChanges}
        >
          {({ errors, touched }) => {
            return (
              <Forms
                style={{
                  paddingTop: "30px",
                  background: "blue",
                }}
              >
                <Input
                  style={InputStyle}
                  name={"name"}
                  type={"name"}
                  placeholder={"Name"}
                />
                {errors.name && touched.name ? (
                  <ErrorMsg>{errors.name}</ErrorMsg>
                ) : null}

                <Input
                  style={InputStyle}
                  name={"email"}
                  type={"email"}
                  placeholder={"Email"}
                />
                {errors.email && touched.email ? (
                  <ErrorMsg>{errors.email}</ErrorMsg>
                ) : null}

                <Input
                  style={InputStyle}
                  name={"password"}
                  type={"password"}
                  placeholder={"password"}
                />
                {errors.password && touched.password ? (
                  <ErrorMsg>{errors.password}</ErrorMsg>
                ) : null}

                <Input
                  style={InputStyle}
                  name={"passwordConfirmation"}
                  type={"password"}
                  placeholder={"Confirmation password"}
                />
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <ErrorMsg>{errors.passwordConfirmation}</ErrorMsg>
                ) : null}

                {error ? <ErrorMsg>{error}</ErrorMsg> : null}

                <Button 
                  isLoading={isLoading}
                  text={"Update Profile"}
                  width={"200px"}
                  borderRadius={"50px"}
                  style={ButtonStyle}
                />
              </Forms>
            );
          }}
        </Formik>
      </Container>
    </MainContainer>
  );
}

export default UpdateProfileScreen;
