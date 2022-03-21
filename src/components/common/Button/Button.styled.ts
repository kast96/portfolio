import styled from "styled-components"

export const ButtonStyled = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 50%;
  z-index: 101;
  font-size: 16px;
  background-color: ${(props) => props.theme.bgBtnColor};
  color: ${(props) => props.theme.textColor};
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.textBtnHoverColor};
  }
`