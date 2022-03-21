import styled from "styled-components"

export const AppStyled = styled.div`
  flex: 1 0 auto;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};

  @media screen and (max-width: 767px) {
    padding-bottom: 60px;
  }
`