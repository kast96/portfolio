import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"
import { MenuStyled, LinkStyled } from "./Menu.styled"

export const Menu = () => {
  return (
    <MenuStyled>
      <ul>
      <LinkStyled>
        <Link to="/">
          <FaHome />
          <span>Home</span>
        </Link>
      </LinkStyled>
      <LinkStyled>
        <Link to="/about/">
          <FaUser />
          <span>About</span>
        </Link>
      </LinkStyled>
      <LinkStyled>
        <Link to="/portfolio/">
          <FaBriefcase />
          <span>Portfolio</span>
        </Link>
      </LinkStyled>
      <LinkStyled>
        <Link to="/contacts/">
          <FaEnvelope />
          <span>Contacts</span>
        </Link>
      </LinkStyled>
      </ul>
    </MenuStyled>
  )
}