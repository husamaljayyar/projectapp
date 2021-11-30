import styled from "styled-components";
import { Typography, FlexColumn, FlexRow } from "../../../App.Styles";

export const MainContainer = styled(FlexRow)`
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 80px;
`;

export const Container = styled(FlexColumn)`
  width: 498px;
  height: 595px;


  background: #5E98CC;

 /* background: #fcac5e; */
  border-radius: 10px;
`;

export const TypographyText = styled(Typography)`
  padding-bottom: 20px;
`;
