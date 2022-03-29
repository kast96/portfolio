import styled from "styled-components"

export const ContactsPageStyled = styled.div`
  .message {
    margin-bottom: 30px;
    text-align: center;
  }

  .contacts {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
    justify-content: space-between;
  }

  .contacts-item {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
    justify-content: center;

    @media screen and (max-width: 1199px) {
      width: 100%;
    }

    &__left {
      position: relative;
      margin-right: 20px;
    }

    &__right {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
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
      color: ${(props) => props.theme.textBtnHoverColor};
      font-size: 16px;
    }

    &__title {
      width: 100%;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 4px;
      text-transform: uppercase;
    }

    &__subtitle {
      width: 100%;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      color: ${(props) => props.theme.mainColor};
    }
  }
`