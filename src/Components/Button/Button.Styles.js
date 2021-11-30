import styled from "styled-components";
import { Link } from "react-router-dom";

export const CustomeButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.isOrange ? "#fcac5e" : "#fff")};
  color: #242424;
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "60px")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '10px')};
  border: none;
  font-size: 24px;
  cursor: pointer;
  text-decoration: none;
  ${(props) =>
    props.disabled
      ? `
        background:gray;
        color:white;
        cursor: none;
  `
      : ""}
`;
