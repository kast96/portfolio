import styled from "styled-components"

export const ButtonStyled = styled.button`
  padding: 0 30px;
  border: none;
  outline: none;
  border-radius: 50px;
  z-index: 101;
  font-size: 16px;
  background-color: ${(props) => props.theme.bgBtnColor};
  cursor: pointer;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 50px;
    color: ${(props) => props.theme.textColor};
    text-decoration: none;
    text-transform: uppercase;

    svg {
      margin-right: 8px;
    }

    span {
      font-size: 14px;
      font-weight: 700;
    }
  }

  :hover {
    background-color: ${(props) => props.theme.mainColor};

    a {
      color: ${(props) => props.theme.textBtnHoverColor};
    }
  }
`