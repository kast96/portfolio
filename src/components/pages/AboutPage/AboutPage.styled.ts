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
`