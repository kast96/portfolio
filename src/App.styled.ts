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
    &--react {color: #5ed4f4}
    &--redux {color: #7248b7}
    &--ts {color: #3178c6}
    &--js {color: #f0d91e}
    &--node {color: #72b100}
    &--sass {color: #c76495}
    &--css {color: #116fb2}
    &--html {color: #de4a24}
    &--php {color: #7477ae}
    &--bitrix {color: #c10d2f}
    &--git {color: ${(props) => props.theme.textColor}}
    &--yarn {color: #2a8ab5}
  }
`