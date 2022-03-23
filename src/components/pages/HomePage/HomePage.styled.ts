import styled from "styled-components"

export const HomePageStyled = styled.div`
  .accent {
    display: inline-block;
    position: absolute;
    top: 0;
    left: -60%;
    bottom: 0;
    width: 70%;
    background-color: ${(props) => props.theme.mainColor};
    transform: skew(10deg);
    z-index: 1;

    @media screen and (max-width: 991px) {
      width: 300px;
      height: 300px;
      top: -200px;
      left: -220px;
      right: 0;
      transform: rotate(29deg);
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
    z-index: 10;

    @media screen and (max-width: 991px) {
      height: auto;
    }
  }

  .img-container,
  .info-container {
    height: 100%;
    padding: 40px;
    box-sizing: border-box;
    z-index: 10;
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;

    @media screen and (max-width: 991px) {
      width: 100%;
    }

    .img {
      flex: 1;
      height: 100%;
      max-width: 600px;
      max-height: 600px;
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

  .info-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding-right: 120px;

    @media screen and (max-width: 991px) {
      width: 100%;
      padding: 0 20px 40px;
    }
  }

  .info {
    max-width: 600px;
    
    @media screen and (max-width: 991px) {
      text-align: center;
    }
    
    &__title {
      font-size: 60px;
      font-weight: 900;
      text-transform: uppercase;
      color: ${(props) => props.theme.mainColor};

      @media screen and (max-width: 991px) {
        font-size: 34px;
      }
    }

    &__subtitle {
      font-size: 40px;
      font-weight: 900;
      margin-bottom: 20px;
      text-transform: uppercase;

      @media screen and (max-width: 991px) {
        font-size: 22px;
      }
    }

    &__description {
      margin-bottom: 30px;
      line-height: 24px;
    }

    &__btn {
      svg {
        margin-left: 10px;
        margin-right: 0;
        font-size: 14px;
      }
    }
  }
`