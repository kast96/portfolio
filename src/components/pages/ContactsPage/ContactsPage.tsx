import { FaAt, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa"
import { ContactsPageStyled } from "./ContactsPage.styled"
import ContactsSvg from "../../../images/contacts"

type ContactsItemType = {
  title: string
  subtitle?: string
  icon: JSX.Element
}

let contacts = [
  {title: 'Russia, Penza', subtitle: 'Address', icon: <FaMapMarkerAlt />},
  {title: 'kast1996@gmail.com', subtitle: 'Email', icon: <FaAt />},
  {title: '@kast96', subtitle: 'Telegram', icon: <FaTelegramPlane />},
] as Array<ContactsItemType>

export const ContactsPage = () => {
  return (
    <ContactsPageStyled>
      <div className="container container-page">
				<h1 className="title">Contacts <span>me</span></h1>
        <div className="message">Я всегда открыт для обсуждения новых проектов, творческих идей или возможностей стать частью вашего видения.</div>
        <div className="contacts">
					{contacts.map((item, key) => (
						<div className="contacts-item" key={key}>
							<div className="contacts-item__left">
								<div className="contacts-item__icon">
									{item.icon}
								</div>
							</div>
							<div className="contacts-item__right">
								<div className="contacts-item__title">{item.title}</div>
								{item.subtitle &&
									<div className="contacts-item__subtitle">{item.subtitle}</div>
								}
							</div>
						</div>
					))}
				</div>
				<div className="illustration">
					<ContactsSvg />
				</div>
      </div>
    </ContactsPageStyled>
  )
}