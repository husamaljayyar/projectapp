import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../../App.Styles";
import { Link } from "react-router-dom";

export const ListBox = styled(FlexColumn)`
  justify-content: start;
  align-items: start;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
/*   margin-top: 30px;
  padding: 20px;
 */`;



export const StyledRow = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid lightgray;
  flex-direction: row;
  padding: ${(props) => props.PaddingHeader ? '0' : '20px 30px' };
  justify-content: start;
  cursor: pointer;
  color: inherit;
  &:hover {
    background: #dedddd;
  }
`;

/* export const DivContanir = styled('div')`
  justify-content: start;
  align-items: start;
  background: #fcac5e;
  font-weight: 700;
  font-size: 20px;
  border-radius: 16px;
  width: 1700px;
  height: 60px;
 // margin-left: -9px;

`;
 */

export const RowCell = styled(FlexRow)((props) => ({
  width: props.width ? props.width : "15%",
  justifyContent: "start",
  color: props.isCompleted ? "green" : "inherit",
  
}));
