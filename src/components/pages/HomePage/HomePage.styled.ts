import styled from "styled-components"

export const HomePageStyled = styled.div`
  .accent {
    display: inline-block;
    position: absolute;
    top: 0;
    left: -50%;
    bottom: 0;
    width: 70%;
    background-color: ${(props) => props.theme.mainColor};
    transform: skew(10deg);
    z-index: 1;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
    z-index: 10;
  }

  .img-container,
  .info-container {
    height: 100%;
    padding: 40px;
    box-sizing: border-box;
    z-index: 10;
  }

  .img-container {
    width: 40%;

    .img {
      height: 100%;
      background-color: rgb(255 255 255 / 20%);
      box-shadow: 0 0 7px rgb(0 0 0 / 90%);
      backdrop-filter: blur(4px);
      border-radius: 10px;
      background: url(https://tunis.ibthemespro.com/img/hero/light.jpg);
      backgroud-position: top center;
      background-size: cover;
    }
  }

  .info-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
  }

  .info {
    max-width: 600px;
    
    &__title {
      font-size: 60px;
      font-weight: 700;
      color: ${(props) => props.theme.mainColor};
    }

    &__subtitle {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    &__description {
      margin-bottom: 30px;
    }
  }
`