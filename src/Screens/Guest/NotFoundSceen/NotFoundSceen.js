import { InnerSection, Typography } from "../../../App.Styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TextPage = styled(Typography)`
  margin-top: 60px;

`; 

const LinkPage = styled(Link)`
  color: #fcac5e;
  margin-top: 60px;
  font-size: 30px;
  font-weight: 700;
`;
const NotFoundSceen = () => {
  return (
    <InnerSection>
      <TextPage fontSize={40} fontWeight={700}>
        Page Not Found
      </TextPage>

      <LinkPage to={"/"}>Home Page</LinkPage>
    </InnerSection>
  );
};
export default NotFoundSceen;
