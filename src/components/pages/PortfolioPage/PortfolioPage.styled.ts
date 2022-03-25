import styled from "styled-components"

export const PortfolioPageStyled = styled.div`
  .portfolio {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    box-sizing: border-box;
  }

  .portfolio-item-container {
    width: 50%;
    padding: 0 15px;
    margin-bottom: 30px;
    box-sizing: border-box;

    @media screen and (max-width: 991px) {
      width: 100%;
    }
  }

  .portfolio-item {
    background-color: ${(props) => props.theme.bgBtnColor}9;
    border-radius: 20px;
    padding: 20px;
    overflow: hidden;

    &__img-container {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 60%;
      margin-bottom: 20px;
    }

    &__img {
      display: inline-block;
      position: absolute;
      top: 0;
       left: 0;
      right: 0;
      bottom: 0;
      text-align: center;
      background-size: cover;
      background-position: center center;
      border-radius: 20px;
      background-color: ${(props) => props.theme.mainColor};
      border: 1px solid #999;
    }

    a {
      text-decoration: none;
    }

    &__name {
      display: inline-block;
      font-size: 22px;
      text-transform: uppercase;
      font-weight: 700;
      color: ${(props) => props.theme.textColor};
      margin-bottom: 10px;

      @media screen and (max-width: 991px) {
        font-size: 18px;
      }
    }

    &-prop {
      display: block;
      margin-bottom: 6px;

      &__icon {
        display: inline-block;
        position: relative;
        top: 2px;
        margin-right: 6px;
      }

      &__value {
        font-weight: 700;
      }

      a {
        color: ${(props) => props.theme.mainColor};
      }
    }

    &__stack {
      display: flex;
      flex-wrap: wrap;
      margin-top: 16px;

      &-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        color: ${(props) => props.theme.mainColor};
        font-size: 32px;
        margin-right: 10px;
      }
    }
  }
`