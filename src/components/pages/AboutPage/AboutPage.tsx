import { FaHtml5, FaJs, FaPhp, FaReact, FaSass } from "react-icons/fa"
import { AboutPageStyled } from "./AboutPage.styled"
import SvgBitrix from "../../../images/icons/1c_bitrix"

export const AboutPage = () => {
  type PersonalInfoItemType = {
    name: string
    value: string
  }

  let personalInfo = [
    {name: 'First Name', value: 'Evgeniy'},
    {name: 'Last Name', value: 'Kashtanov'},
    {name: 'Age', value: '25'},
    {name: 'Country', value: 'Russia'},
    {name: 'City', value: 'Penza'},
    {name: 'Email', value: 'kast1996@gmail.com'},
    {name: 'Telegram', value: '@kast96'},
    {name: 'GitHub', value: 'github.com/kast96'},
  ] as Array<PersonalInfoItemType>

  type StackItemType = {
    name: string
    icon: JSX.Element
  }

  let stack = [
    {name: 'React', icon: <FaReact />},
    {name: 'Javascript', icon: <FaJs />},
    {name: 'Sass/Css', icon: <FaSass />},
    {name: 'Html', icon: <FaHtml5 />},
    {name: 'Php', icon: <FaPhp />},
    {name: '1C-Bitrix', icon: <SvgBitrix />},
  ] as Array<StackItemType>

  return (
    <AboutPageStyled>
      <div className="container">
          <h1 className="title">About <span>me</span></h1>
          <h2 className="subtitle">Personal information</h2>
          <div className="personal-info">
            <div className="personal-info-photo">
              <div className="img" style={{backgroundImage: "url('/images/me.jpg')"}}></div>
            </div>
            <div className="personal-info-items">
              {personalInfo.map(item => (
                <div className="personal-info-item">
                  <span className="personal-info-item__name">{item.name}:</span>
                  <span className="personal-info-item__value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <h2 className="subtitle">My Stack</h2>
          <div className="stack">
            {stack.map(item => (
              <div className="stack-item">
                <div className="stack__icon">{item.icon}</div>
                <div className="stack__name">{item.name}</div>
              </div>
            ))}
          </div>
      </div>
    </AboutPageStyled>
  )
}