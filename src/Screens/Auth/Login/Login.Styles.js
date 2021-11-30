import styled from "styled-components";
import { FlexColumn, InnerSection, Typography } from "../../../App.Styles";

export const MainContainer = styled(InnerSection)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  height: 90vh;
`;

export const FormBox = styled(FlexColumn)`
  width: 398px;
  height: auto;
  justify-content: end;
  align-items: center;

`;

export const TypographyText = styled(Typography)`
  text-align: center;
  margin: ${(props) => (props.MarginTitle ? "40px" : "5px 0")};
`;
export const Container = styled(FlexColumn)`
  width: 100%;
  height: auto;
  padding: 20px 0;
`;

export const StyledImage = styled("img")`
  width: 600px;
  height: 400px;
  object-fit: cover;
`;
