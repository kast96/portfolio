import styled from "styled-components"

export const AboutPageStyled = styled.div`
  .personal-info {
    display: flex;
    flex-wrap: wrap;
  }

  .personal-info-photo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding-right: 40px;
    box-sizing: border-box;
    margin-bottom: 20px;

    @media screen and (max-width: 991px) {
      width: 100%;
      padding: 0;
    }

    .img {
      flex: 1;
      max-width: 400px;
      height: 400px;
      background-color: rgb(255 255 255 / 20%);
      box-shadow: 0 0 7px rgb(0 0 0 / 90%);
      backdrop-filter: blur(4px);
      border-radius: 10px;
      background-position: top center;
      background-size: cover;

      @media screen and (max-width: 991px) {
        max-width: 250px;
        height: 250px;
        margin: 0 auto;
      }
    }
  }

  .personal-info-items {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    align-self: flex-start;
    margin-bottom: 20px;

    @media screen and (max-width: 991px) {
      width: 100%;
    }
  }

  .personal-info-item {
    display: flex;
    width: 50%;
    margin: 14px 0;

    @media screen and (max-width: 991px) {
      width: 100%;
      justify-content: center;
      margin: 8px 0;
    }

    &__name {
      margin-right: 6px;
    }

    &__value {
      font-weight: 700;
    }
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
  }

  .stack-item {
    width: 25%;
    text-align: center;
    margin-bottom: 40px;
    padding: 20px;
    box-sizing: border-box;

    @media screen and (max-width: 991px) {
      width: 33.3333%;
    }

    @media screen and (max-width: 767px) {
      width: 50%;
    }

    &__icon {
      font-size: 64px;
      color: ${(props) => props.theme.mainColor};

      &.--react {color: #5ed4f4}
      &.--redux {color: #7248b7}
      &.--ts {color: #3178c6}
      &.--js {color: #f0d91e}
      &.--node {color: #72b100}
      &.--sass {color: #c76495}
      &.--css {color: #116fb2}
      &.--html {color: #de4a24}
      &.--php {color: #7477ae}
      &.--bitrix {color: #c10d2f}
      &.--git {color: ${(props) => props.theme.textColor}}
      &.--yarn {color: #2a8ab5}
    }

    &__name {
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  .way {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }

  .way-item {
    display: flex;
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 20px;

    @media screen and (max-width: 767px) {
      width: 100%;
    }

    &__left {
      position: relative;
      margin-right: 20px;

      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        border-right: 1px solid ${(props) => props.theme.bgBtnColor};
        z-index: 1;
      }
    }

    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 50px;
      height: 50px;
      background-color: ${(props) => props.theme.mainColor};
      border-radius: 50%;
      z-index: 2;
      font-size: 20px;
      color: ${(props) => props.theme.textBtnHoverColor};
      font-size: 16px;
    }

    &__date {
      display: inline-block;
      border: 1px solid ${(props) => props.theme.mainColor};
      border-radius: 20px;
      padding: 2px 10px;
      font-size: 14px;
      margin-bottom: 10px;
    }

    &__title {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 4px;
      text-transform: uppercase;
    }

    &__subtitle {
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      color: ${(props) => props.theme.mainColor};
    }

    &__description {
      margin-top: 16px;
    }
  }
`