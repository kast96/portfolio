import styled from "styled-components"

export const ButtonStyled = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 20px;
  position: fixed;
  right: 30px;
  top: 20px;
  border: none;
  outline: none;
  z-index: 101;
  background-color: ${(props) => props.theme.bgBtnColor};
  color: ${(props) => props.theme.textColor};
  cursor: pointer;

  @media screen and (max-width: 767px) {
    right: 10px;
    top: 10px;
  }

  :hover {
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.textBtnHoverColor};
  }
`