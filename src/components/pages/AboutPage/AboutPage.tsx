import { FaBriefcase, FaCss3Alt, FaGithub, FaGraduationCap, FaHtml5, FaJsSquare, FaNodeJs, FaPhp, FaReact, FaSass, FaUniversity, FaYarn } from "react-icons/fa"
import { AboutPageStyled } from "./AboutPage.styled"
import SvgBitrix from "../../../images/icons/1c_bitrix"
import SvgTs from "../../../images/icons/ts"
import SvgRedux from "../../../images/icons/redux"

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
		code: string
		icon: JSX.Element
	}

	let stack = [
		{name: 'React', code: 'react', icon: <FaReact />},
		{name: 'Redux', code: 'redux', icon: <SvgRedux />},
		{name: 'Typescript', code: 'ts', icon: <SvgTs />},
		{name: 'Javascript', code: 'js', icon: <FaJsSquare />},
		{name: 'Node', code: 'node', icon: <FaNodeJs />},
		{name: 'SASS', code: 'sass', icon: <FaSass />},
		{name: 'CSS', code: 'css', icon: <FaCss3Alt />},
		{name: 'HTML', code: 'html', icon: <FaHtml5 />},
		{name: 'PHP', code: 'php', icon: <FaPhp />},
		{name: '1C-Bitrix', code: 'bitrix', icon: <SvgBitrix />},
		{name: 'Git', code: 'git', icon: <FaGithub />},
		{name: 'Yarn', code: 'yarn', icon: <FaYarn />},
	] as Array<StackItemType>

	type WayItemType = {
		title: string
		date: string
		subtitle?: string
		description?: string
		icon: JSX.Element
	}

	let way = [
		{title: 'Completed a course of ReactJS', subtitle: 'IT-Kamasutra', date: '2021 - 2022', description: 'Studied React, Redux, SPA, FLUX, TypeScript and other. Developed a social network application', icon: <FaGraduationCap />},
		{title: 'Middle Full-stack 1C-Bitrix', subtitle: 'Expansio', date: '2019 - Present', description: 'Received advanced development experience in 1C-Bitrix CMS. Made several modules and templates. Supported client projects.', icon: <FaBriefcase />},
		{title: 'Junior Full-stack 1C-Bitrix', subtitle: 'ALFA Systems', date: '2018 - 2019', description: 'Work on client projects and templates on PHP in CMS 1C-Bitrix. Got experience with packages in node.js and build', icon: <FaBriefcase />},
		{title: 'University Education', subtitle: 'Penza State University', date: '2014 - 2018', description: 'Studied at the Faculty of Computer Engineering, majoring in computer-aided design systems. GPA 4.6/5', icon: <FaUniversity />},
	] as Array<WayItemType>

	return (
		<AboutPageStyled>
			<div className="container container-page">
				<h1 className="title">About <span>Me</span></h1>
				<h2 className="subtitle"><span>Personal</span> Information</h2>
				<div className="personal-info">
					<div className="personal-info-photo">
						<div className="img" style={{backgroundImage: "url('/images/me.jpg')"}}></div>
					</div>
					<div className="personal-info-items">
						{personalInfo.map((item, key) => (
							<div className="personal-info-item" key={key}>
								<span className="personal-info-item__name">{item.name}:</span>
								<span className="personal-info-item__value">{item.value}</span>
							</div>
						))}
					</div>
				</div>
				<h2 className="subtitle"><span>My Stack</span> and Expirience</h2>
				<div className="stack">
					{stack.map((item, key) => (
						<div className="stack-item" key={key}>
							<div className={`stack-item__icon icon-color--${item.code}`}>{item.icon}</div>
							<div className="stack-item__name">{item.name}</div>
						</div>
					))}
				</div>
				<h2 className="subtitle"><span>My Way</span> and Education</h2>
				<div className="way">
					{way.map((item, key) => (
						<div className="way-item" key={key}>
							<div className="way-item__left">
								<div className="way-item__icon">
									{item.icon}
								</div>
							</div>
							<div className="way-item__right">
								<div className="way-item__date">{item.date}</div>
								<div className="way-item__title">{item.title}</div>
								{item.subtitle &&
									<div className="way-item__subtitle">{item.subtitle}</div>
								}
								{item.description &&
									<div className="way-item__description">{item.description}</div>
								}
							</div>
						</div>
					))}
				</div>
			</div>
		</AboutPageStyled>
	)
}