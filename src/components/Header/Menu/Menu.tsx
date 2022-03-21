import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { MenuStyled, LinkStyled } from "./Menu.styled"

export const Menu = () => {
  return (
    <MenuStyled>
      <ul>
      <LinkStyled>
        <NavLink to="/">
          <FaHome />
          <span>Home</span>
        </NavLink>
      </LinkStyled>
      <LinkStyled>
        <NavLink to="/about/">
          <FaUser />
          <span>About</span>
        </NavLink>
      </LinkStyled>
      <LinkStyled>
        <NavLink to="/portfolio/">
          <FaBriefcase />
          <span>Portfolio</span>
        </NavLink>
      </LinkStyled>
      <LinkStyled>
        <NavLink to="/contacts/">
          <FaEnvelope />
          <span>Contacts</span>
        </NavLink>
      </LinkStyled>
      </ul>
    </MenuStyled>
  )
}