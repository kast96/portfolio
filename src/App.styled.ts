import styled from "styled-components"

export const AppStyled = styled.div`
  flex: 1 0 auto;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};

  @media screen and (max-width: 767px) {
    padding-bottom: 60px;
  }

  .title,
  .subtitle {
    span {
      color: ${(props) => props.theme.mainColor};
    }
  }

  .icon-color {
    &--react {color: #5ed4f4 !important}
    &--redux {color: #7248b7 !important}
    &--ts {color: #3178c6 !important}
    &--js {color: #f0d91e !important}
    &--node {color: #72b100 !important}
    &--sass {color: #c76495 !important}
    &--css {color: #116fb2 !important}
    &--html {color: #de4a24 !important}
    &--php {color: #7477ae !important}
    &--bitrix {color: #c10d2f !important}
    &--git {color: ${(props) => props.theme.textColor} !important}
    &--yarn {color: #2a8ab5 !important}
  }
`