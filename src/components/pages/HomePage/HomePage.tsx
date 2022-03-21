import { Link } from "react-router-dom"
import { Button } from "../../common/Button/Button"
import { HomePageStyled } from "./HomePage.styled"
import { FaUser } from "react-icons/fa"

export const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="accent"></div>
      <div className="content">
        <div className="img-container">
          <div className="img"></div>
        </div>
        <div className="info-container">
          <div className="info">
            <div className="info__title">Hi, i'm</div>
            <div className="info__subtitle">front</div>
            <div className="info__description">description</div>
            <Button>
              <Link to="/about/" className="info__btn">
                <FaUser />
                <span>About</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </HomePageStyled>
  )
}