import { FaCss3Alt, FaFileAlt, FaGithub, FaHtml5, FaJsSquare, FaLink, FaNodeJs, FaPhp, FaReact, FaSass } from "react-icons/fa"
import { PortfolioPageStyled } from "./PortfolioPage.styled"
import SvgBitrix from "../../../images/icons/1c_bitrix"
import SvgTs from "../../../images/icons/ts"
import SvgRedux from "../../../images/icons/redux"

export const PortfolioPage = () => {
	type ProjectItemType = {
		name: string
		img?: string
		project?: string
		link?: string
		stack?: Array<{
			code: string
			icon: JSX.Element
		}>
	}

	let portfolio = [
		{
			name: 'React Social',
			project: 'React App',
			link: 'https://github.com/kast96/social',
			stack: [
				{code: 'react', icon: <FaReact />},
				{code: 'redux', icon: <SvgRedux />},
				{code: 'ts', icon: <SvgTs />},
				{code: 'js', icon: <FaJsSquare />},
				{code: 'sass', icon: <FaSass />},
				{code: 'git', icon: <FaGithub />},
			]
		},
		{
			name: 'React Tasks',
			project: 'React Native App',
			link: 'https://github.com/kast96/tasks',
			stack: [
				{code: 'react', icon: <FaReact />},
				{code: 'redux', icon: <SvgRedux />},
				{code: 'js', icon: <FaJsSquare />},
				{code: 'sass', icon: <FaSass />},
				{code: 'git', icon: <FaGithub />},
			]
		},
		{
			name: 'React Novel',
			project: 'React App',
			link: 'https://github.com/kast96/novel',
			stack: [
				{code: 'react', icon: <FaReact />},
				{code: 'redux', icon: <SvgRedux />},
				{code: 'js', icon: <FaJsSquare />},
				{code: 'sass', icon: <FaSass />},
				{code: 'git', icon: <FaGithub />},
			]
		},
		{
			name: 'React SpaceX',
			project: 'React App',
			link: 'https://github.com/kast96/spacex',
			stack: [
				{code: 'react', icon: <FaReact />},
				{code: 'redux', icon: <SvgRedux />},
				{code: 'js', icon: <FaJsSquare />},
				{code: 'sass', icon: <FaSass />},
				{code: 'git', icon: <FaGithub />},
			]
		},
		{
			name: 'Sitemap Generator',
			project: 'Module for 1C-Bitrix',
			stack: [
				{code: 'bitrix', icon: <SvgBitrix />},
				{code: 'php', icon: <FaPhp />},
				{code: 'js', icon: <FaJsSquare />},
				{code: 'css', icon: <FaCss3Alt />},
				{code: 'html', icon: <FaHtml5 />},
				{code: 'git', icon: <FaGithub />},
			]
		},
		{
			name: 'SEO Generator',
			project: 'Module for 1C-Bitrix',
			stack: [
				{code: 'bitrix', icon: <SvgBitrix />},
				{code: 'php', icon: <FaPhp />},
				{code: 'js', icon: <FaJsSquare />},
				{code: 'css', icon: <FaCss3Alt />},
				{code: 'html', icon: <FaHtml5 />},
				{code: 'git', icon: <FaGithub />},
			]
		},
		{
			name: 'Module of redirects',
			project: 'Module for 1C-Bitrix',
			stack: [
				{code: 'bitrix', icon: <SvgBitrix />},
				{code: 'php', icon: <FaPhp />},
				{code: 'js', icon: <FaJsSquare />},
				{code: 'css', icon: <FaCss3Alt />},
				{code: 'html', icon: <FaHtml5 />},
				{code: 'git', icon: <FaGithub />},
			]
		},
		{
			name: 'Marioberlucci',
			project: 'Site improvements',
			link: 'https://marioberlucci.ru/',
			stack: [
				{code: 'bitrix', icon: <SvgBitrix />},
				{code: 'php', icon: <FaPhp />},
				{code: 'node', icon: <FaNodeJs />},
				{code: 'js', icon: <FaJsSquare />},
				{code: 'css', icon: <FaCss3Alt />},
				{code: 'html', icon: <FaHtml5 />},
				{code: 'git', icon: <FaGithub />},
			]
		},
		{
			name: 'Dykat',
			project: 'Site a turn-key basis',
			stack: [
				{code: 'bitrix', icon: <SvgBitrix />},
				{code: 'php', icon: <FaPhp />},
				{code: 'js', icon: <FaJsSquare />},
				{code: 'css', icon: <FaCss3Alt />},
				{code: 'html', icon: <FaHtml5 />},
			]
		},
		{
			name: 'Nordski',
			project: 'Site a turn-key basis',
			stack: [
				{code: 'bitrix', icon: <SvgBitrix />},
				{code: 'php', icon: <FaPhp />},
				{code: 'js', icon: <FaJsSquare />},
				{code: 'css', icon: <FaCss3Alt />},
				{code: 'html', icon: <FaHtml5 />},
			]
		},
		{
			name: 'Santalux',
			project: 'Site improvements',
			link: "https://santalux.ru",
			stack: [
				{code: 'bitrix', icon: <SvgBitrix />},
				{code: 'php', icon: <FaPhp />},
				{code: 'js', icon: <FaJsSquare />},
				{code: 'css', icon: <FaCss3Alt />},
				{code: 'html', icon: <FaHtml5 />},
			]
		},
		{
			name: 'ХимПромКомплект',
			project: 'Site a turn-key basis',
			link: "https://hpk-penza.com/",
			stack: [
				{code: 'bitrix', icon: <SvgBitrix />},
				{code: 'php', icon: <FaPhp />},
				{code: 'js', icon: <FaJsSquare />},
				{code: 'css', icon: <FaCss3Alt />},
				{code: 'html', icon: <FaHtml5 />},
			]
		},
		{
			name: 'Sensa Massage',
			project: 'Site improvements',
			link: "https://sensa-massage.ru",
			stack: [
				{code: 'bitrix', icon: <SvgBitrix />},
				{code: 'php', icon: <FaPhp />},
				{code: 'js', icon: <FaJsSquare />},
				{code: 'css', icon: <FaCss3Alt />},
			]
		},
		{
			name: 'Кристалл',
			project: 'Site a turn-key basis, improvements',
			link: "https://vodada.com/",
			stack: [
				{code: 'bitrix', icon: <SvgBitrix />},
				{code: 'php', icon: <FaPhp />},
				{code: 'js', icon: <FaJsSquare />},
				{code: 'css', icon: <FaCss3Alt />},
				{code: 'html', icon: <FaHtml5 />},
			]
		},
	] as Array<ProjectItemType>

	return (
		<PortfolioPageStyled>
			<div className="container container-page">
				<h1 className="title">My <span>Portfolio</span></h1>
				<div className="portfolio">
					{portfolio.map(item => (
						<div className="portfolio-item-container">
							<div className="portfolio-item">
								<div className="portfolio-item__img-container">
									<div className="portfolio-item__img" style={{backgroundImage: item.img ? `url('${item.img}')` : 'none'}}></div>
								</div>
								<span className="portfolio-item__name">{item.name}</span>
								{item.project && 
									<span className="portfolio-item-prop">
										<span className="portfolio-item-prop__icon"><FaFileAlt /></span>
										<span className="portfolio-item-prop__name">Project: </span>
										<span className="portfolio-item-prop__value">{item.project}</span>
									</span>
								}
								{item.link && 
									<span className="portfolio-item-prop">
										<span className="portfolio-item-prop__icon"><FaLink /></span>
										<span className="portfolio-item-prop__value">
											<a href={item.link} target="_blank" rel="noreferrer">{item.link}</a>
										</span>
									</span>
								}
								{item.stack && 
									<div className="portfolio-item__stack">
										{item.stack.map(stack =>
											<div className={`portfolio-item__stack-icon icon-color--${stack.code}`}>
												{stack.icon}
											</div>
										)}
									</div>
								}
							</div>
						</div>
					))}
				</div>
			</div>
		</PortfolioPageStyled>
	)
}