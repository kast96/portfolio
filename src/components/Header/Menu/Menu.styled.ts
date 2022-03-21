import styled from "styled-components"

export const MenuStyled = styled.div`
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  ul {
    margin: 0;
    padding: 0;
  }
`

export const LinkStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 20px 0;
  z-index: 101;
  font-size: 16px;
  background-color: ${(props) => props.theme.bgBtnColor};
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  transition: all .3s;

  a {
    color: ${(props) => props.theme.textColor};
  }

  span {
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    color: ${(props) => props.theme.textBtnHoverColor};
    line-height: 50px;
    font-weight: 500;
    transition: all .3s;
    border-radius: 30px;
    text-transform: uppercase;
    padding: 0 25px 0 30px;
    height: 50px;
    margin: 0;
    font-weight: 700;
  }

  :hover {
    color: ${(props) => props.theme.textBtnHoverColor};
    background-color: ${(props) => props.theme.mainColor};

    a {
      color: ${(props) => props.theme.textBtnHoverColor};
    }

    span {
      opacity: 1;
      right: 27px;
      margin: 0;
      text-align: center;
      border-radius: 30px 0 0 30px;
      background-color: ${(props) => props.theme.mainColor};
    }
  }
`