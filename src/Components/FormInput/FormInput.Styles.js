import styled from "styled-components";
import { Field, Form } from "formik";
import { Link } from "react-router-dom";

export const Forms = styled(Form)`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(Field)`
  outline: none;
  height: 40px;
  //  width: 100%;
  width: 100%;

  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 6)}px;
  opacity: 1;
  font-size: 15px;
  padding: 11px;
  color: #707070;
  margin-bottom: 22px;
  border: 1px solid #242424;
  ${(props) => props.MarginLeft && ` margin-left: 50px`};
  &::placeholder {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

export const ErrorMsg = styled("span")`
  color: red;
  margin: -14px 0 14px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  font-size: 12px;
`;

export const ElementLink = styled(Link)`
  color: #000;
  :hover {
    color: #49433d;
  }
`;
