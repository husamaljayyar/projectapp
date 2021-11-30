import styled from "styled-components";
import {
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../App.Styles";

export const MainContainer = styled(FlexColumn)`
  margin-bottom: 100px;
`;
export const InnerContainer = styled(InnerSection)`
  display: flex;
  justify-content: start;
  align-items: start;
  background: #fff;
  opacity: 1;
  width: 100%;
  margin-bottom: 30px;
`;

export const ContentBackTitle = styled(FlexRow)`
  font-size: 18px;
  justify-content: start;
`;

export const BackTitle = styled("p")`
  cursor: pointer;
  padding: 15px 0;
  margin: 0 5px;
  color: ${(props) => props.Color && "#707070"};
`;

export const HeroSection = styled(FlexRow)`
  align-items: flex-start;
  justify-content: space-between;
  word-wrap: wrap;
  margin: 32px 0;
`;

export const ColumnContent = styled(FlexColumn)`
  width: ${(props) => (props.Width ? props.Width : "50%")};
  height: auto;
  align-items: start;

  padding: 5px;
`;

export const Image = styled("img")`
  object-fit: contain;
  width: 100%;
  border-radius: 16px;
`;

export const RowContainer = styled(FlexRow)`
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.Width && props.Width};
`;

export const InerRowContainer = styled(FlexRow)`
  width: auto;
`;

export const InnerColumnContent = styled(FlexColumn)`
  align-items: flex-start;
  justify-content: space-between;
`;

export const Row = styled(InnerColumnContent)`
  flex-direction: row;
  justify-content: space-between;
`;

export const TypographyText = styled(Typography)`
  line-height: 1.8;
`;

export const ContentReviews = styled(FlexColumn)`
  align-items: flex-start;
  padding: 0 51px 15px 51px;
  align-items: center;


`;

export const ContainerCol = styled(FlexColumn)`
  align-items: center;
  border: 1px solid #bcbcbc;
  padding: 0 51px 15px 51px;
 `;

export const InnerContainerCol = styled(FlexColumn)`
  align-items: flex-start;
  width: 1000px;

 `;

export const CardsBox = styled(FlexRow)`
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  width: 90vw;
  max-width: 1800px;



  @media screen and (max-width: 1100px) {
    justify-content: center;
    align-items: center;
  }
`;

export const LoadMore = styled(FlexRow)`
  width: 200px;
  height: 50px;
  font-size: 18px;
  background: ${(props) => (props.isLoading ? "#ddd" : "#fcdd06")};
  color: #fff;
  border-radius: 21px;
  margin-bottom: 20px;
  cursor: pointer;
  margin: 0 auto;
`;

export const StyledFlexColumn = styled(FlexColumn)`
  width: 1134px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 16px;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  margin: 20px 0;
  padding: 20px;
  border-radius: 5px;
  resize: vertical;
// 

`;

export const ButtonColor = styled(FlexRow)`
  align-items: start;
  width: 40px;
  height: 40px;
  background: ${(props) => props.background};
  border-radius: 50%;
  margin-left: 10px;
`;



