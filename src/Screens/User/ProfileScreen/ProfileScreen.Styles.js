import styled from "styled-components";
import {
  FlexColumn,
  FlexRow,
  Typography,
  InnerSection,
} from "../../../App.Styles";
import { Link } from "react-router-dom";

export const ContainerSection = styled(InnerSection)`
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
`;

export const InnerContainerSection = styled(FlexColumn)`
  background: #f2f2f2;
  border-radius: 16px;
  width: ${(props) => (props.isBig ? "950px" : "298px")};
  height: 360px;
  padding: 1% 2%;
  margin-right: 32px;
  justify-content: start;
  align-items: start;
  margin: 20px;
  @media Screen and (max-width: 1500px) {
    width: 950px;
  }
`;

export const ProfileText = styled(Link)`
  width: 100%;
  font-size: 20px;
  margin-bottom: 30px;
  color: ${(props) => (props.isGray ? "#707070" : "#242424")};
  width: auto;
  padding-right: 20px;
`;

export const InnerContainerContent = styled(FlexRow)`
  width: 100%;
  justify-content: start;
`;

export const TypographyText = styled(Typography)`
  margin: 10px 0 50px 0;

`;

export const borderLine = styled.hr`
  width: 100%;
  margin: 20px;
`;
