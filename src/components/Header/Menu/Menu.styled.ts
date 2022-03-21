import styled from "styled-components"

export const MenuStyled = styled.div`
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 101;

  @media screen and (max-width: 767px) {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    transform: none;
  }

  ul {
    margin: 0;
    padding: 0;

    @media screen and (max-width: 767px) {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      background-color: rgb(50 50 50 / 40%);
      box-shadow: 0 0 7px rgb(0 0 0 / 90%);
      backdrop-filter: blur(4px);
    }
  }
`

export const LinkStyled = styled.li`
  margin: 20px 0;
  font-size: 16px;
  cursor: pointer;
  list-style: none;

  @media screen and (max-width: 767px) {
    margin: 10px 0;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50px;
    height: 50px;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.bgBtnColor};
    text-decoration: none;
    border-radius: 50%;
    transition: all .3s;
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

    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  :hover {
    span {
      opacity: 1;
      right: 27px;
      margin: 0;
      text-align: center;
      border-radius: 30px 0 0 30px;
      background-color: ${(props) => props.theme.mainColor};
    }
  }

  a.active,
  :hover a {
    color: ${(props) => props.theme.textBtnHoverColor};
    background-color: ${(props) => props.theme.mainColor};
  }
`