import styled from "styled-components";
import { InnerSection, FlexRow, FlexColumn } from "../../../../App.Styles";

export const RowContainer = styled(InnerSection)`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LoadMore = styled(FlexRow)`
  width: 200px;
  height: 50px;
  font-size: 18px;
  background: ${(props) => (props.isLoading ? "#ddd" : "#00aeff")};
  color: #fff;
  border-radius: 21px;
  margin-bottom: 20px;
  cursor: pointer;
`;

