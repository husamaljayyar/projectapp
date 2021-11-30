import styled from "styled-components";
import { FlexBox, FlexColumn, FlexRow, Typography } from "../../../App.Styles";

export const HeroBox = styled(FlexRow)`
  justify-content: space-between;
  height: 590px;
  @media screen and (max-width: 1100px) {
    height: auto;
    min-height: 590px;
    flex-direction: column-reverse;
  }
`;

export const HeroTitle = styled(Typography)`
  letter-spacing: 2.4px;
  color: #242424;
  text-transform: uppercase;
`;

export const Dot = styled("div")`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => (props.isGray ? "#70707030" : "#ff9836")} 0% 0%
    no-repeat padding-box;
  border-radius: 50%;
  margin: 0 10.5px;
  cursor: pointer;
`;

export const Arrow = styled(FlexBox)`
  font-size: 35px;
  margin: 0 23px;
  width: 40px;
  height: 60px;
  color: #000;
  font-weight: 700;
  cursor: pointer;
  ${(props) => (props.isLeft ? "transform: rotate(-180deg);" : "")}
  border-radius: 100px;
`;

export const BorderText = styled.hr`
  width: 200px;
  height: 4px;
  border: none;
  margin-top: 15px;
  background: #fcac5e 0% 0% no-repeat padding-box;
`;

export const BorderedBox = styled(FlexRow)`
  border-radius: 16px;
  margin-top: ${(props) => props.MarginTop}px;
  @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;
export const ContainerPagination = styled(FlexRow)`
  margin-bottom: 30px;
`;

export const ColumnContainer = styled(FlexColumn)`
  margin-top: 32px;
  margin-bottom: 32px;
  align-items: ${(props) =>
    props.startItem ? "start" : props.centerItem && "center"};
  @media screen and (max-width: 1100px) {
    align-items: center;
  }
`;
