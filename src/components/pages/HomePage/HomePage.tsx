import { Link } from "react-router-dom"
import { Button } from "../../common/Button/Button"
import { HomePageStyled } from "./HomePage.styled"
import { FaArrowRight } from "react-icons/fa"

export const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="accent"></div>
      <div className="content">
        <div className="img-container">
          <div className="img" style={{backgroundImage: "url('/images/me.jpg')"}}></div>
        </div>
        <div className="info-container">
          <div className="info">
            <div className="info__title">Hi, i'm Evgeniy</div>
            <div className="info__subtitle">Front-end developer</div>
            <div className="info__description">I'm a front-end ReactJS developer from Russia. I make web-applications in my spare time. At the moment I am developing on PHP on CMS 1C-Bitrix.</div>
            <Button>
              <Link to="/about/" className="info__btn">
                <span>About me</span>
                <FaArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </HomePageStyled>
  )
}