import {
  ProfileText,
  InnerContainerContent,
  TypographyText,
  ContainerSection,
  InnerContainerSection,
  borderLine,
} from "./ProfileScreen.Styles";
import Button from "../../../Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../Redux/User/userActions";

function ProfileScreen(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <ContainerSection>
      <InnerContainerSection>
        <TypographyText fontWeight={700} fontSize={25}>
          {state.userDetails.user.name}
        </TypographyText>
        <ProfileText to={"/orders"}>My Orders</ProfileText>
        <ProfileText to={""}>Settings</ProfileText>
        <borderLine />
        <ProfileText
          onClick={() => {
            dispatch(logoutAction());
            localStorage.removeItem("user");
          }}
          as={"span"}
          style={{
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Logout
        </ProfileText>
      </InnerContainerSection>
      <InnerContainerSection isBig>
        <TypographyText fontWeight={700} fontSize={25}>
          My Profile
        </TypographyText>
        <InnerContainerContent>
          <ProfileText isGray as={"span"}>
            Name
          </ProfileText>
          <ProfileText as={"span"}>{state.userDetails.user.name}</ProfileText>
        </InnerContainerContent>
        <InnerContainerContent>
          <ProfileText isGray as={"span"}>
            Email
          </ProfileText>
          <ProfileText as={"span"}>{state.userDetails.user.email}</ProfileText>
        </InnerContainerContent>
        <Button isOrange
          text={"Update Profile"}
          link={"/update-profile"}
          width={"220px"}
          height={'55px'}
          borderRadius={'20px'}
          style={{ marginTop: 50, background: '#fcac5e' }}
        />
      </InnerContainerSection>
    </ContainerSection>
  );
}

export default ProfileScreen;
