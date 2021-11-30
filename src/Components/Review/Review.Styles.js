import styled from "styled-components";
import { FlexRow, FlexColumn, Typography } from "../../App.Styles";

export const ContainerReview = styled(FlexColumn)`
  justify-content: space-between;
  align-items: flex-start;
  width: 1000px;
  background: ${(props) => props.isOdd && " "};
  margin-top: 20px;
  padding: 10px;

  
`;

export const ReviewTitle = styled(Typography)`
  color: #000;
  font-size: 22px;
  margin: 20px 0 16px 0;
  justify-content: start;
  align-items: start;
  font-weight: 700;
`;

export const RateBox = styled(FlexRow)`
  justify-content: space-between;
`;

export const TextReviewDate = styled(Typography)`
  color: #70707070;
  font-size: 16px;
  width: auto;
  align-items: start;
  justify-content: flex-end;
  font-weight: 700;
`;

export const TextReviewDescription = styled(Typography)`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  height: 130px;
  width: 100%;
   background: #847777;
    text-align: start;
  margin: 0 0 10px 0;
  padding: 22px 35px;
  border-radius: 5px;
`;
