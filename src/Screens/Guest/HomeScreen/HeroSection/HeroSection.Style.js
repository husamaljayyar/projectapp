import styled from "styled-components";
import {
  FlexBox,
  InnerSection,
  FlexColumn,
  FlexRow,
  Typography,
} from "../../../../App.Styles";

export const Container = styled(FlexBox)`
  height: 60vh;
  width: 100%;
  margin-bottom: 60px;
  justify-content: center;
  align-items: center;
  background: #757f9a;
  background: -webkit-linear-gradient(to right, #d7dde8, #757f9a);
  background: linear-gradient(to right, #d7dde8, #757f9a);
`;

export const InnerContainer = styled(InnerSection)`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const HeroBox = styled(FlexRow)`
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  @media screen and (max-width: 1100px) {
    height: auto;
    min-height: 590px;
    flex-direction: column-reverse;
  }
`;

export const SideBox = styled(FlexColumn)`
  width: 50%;
  height: auto;
  align-items: flex-start;
  font-family: monospace;
  @media screen and (max-width: 1100px) {
    align-items: center;
    margin-top: 40px;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  width: 20%;
  height: auto;
`;

export const HeroTitle = styled(Typography)`
  color: #242424;
  padding: 5px;
  font-family: ${(props) => props.fontFamily && "monospace"};
`;
