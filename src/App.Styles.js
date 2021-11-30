import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 100vw; 
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: ${(props) => props.PaddingButton && "50px"};
  @media screen and (min-width: 1920px) {
    margin: 0 auto;
  }
`;

export const Typography = styled("p")((props) => ({
  fontSize: `${props.fontSize}px`,
  color: props.color,
  fontWeight: props.fontWeight,
  padding:  props.Padding ? '30px 0' : '0'
}));

export const FlexBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: ${(props) => props.background};
  overflow: hidden;
`;

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
  
`;

export const InnerSection = styled(FlexColumn)`
  max-width: 90vw;
  width: 100%;
  @media screen and (max-width: 1100px) {
    padding: 0 20px;
  }
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border: 6px solid #fcac5e;
  box-sizing: border-box;
  border-radius: 50%;
  border-top-color: #ddd;
  margin-top: 20%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export const ContainerCount = styled(FlexRow)`
  height: 40px;
  width: 204px;
  border: 2px solid #f99838;
 margin-top: ${props => props.MarginTop && '20px'};
`;

export const RIcon = styled("span")`
  width: 48px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TypographyCount = styled(Typography)`
  width: 108px;
  text-align: center;
  


`;

export const BorderLine = styled.div`
  border-top: 3px solid #b5b5b5;
  margin-bottom: 20px;
  width: 100%;
`;
