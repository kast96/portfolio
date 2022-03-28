import { FaCss3Alt, FaFileAlt, FaGithub, FaHtml5, FaJsSquare, FaLink, FaNodeJs, FaPhp, FaReact, FaSass } from "react-icons/fa"
import { PortfolioPageStyled } from "./PortfolioPage.styled"
import SvgBitrix from "../../../images/icons/1c_bitrix"
import SvgTs from "../../../images/icons/ts"
import SvgRedux from "../../../images/icons/redux"
import { Fancybox } from "../../common/Fancybox/Fancybox"

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
			img: "/images/portfolio/social.jpg",
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
			img: "/images/portfolio/tasks.jpg",
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
			img: "/images/portfolio/novel.jpg",
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
			img: "/images/portfolio/spacex.jpg",
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
			img: "/images/portfolio/sitemap.jpg",
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
			img: "/images/portfolio/generator.jpg",
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
			name: 'Redirects',
			project: 'Module for 1C-Bitrix',
			img: "/images/portfolio/redirects.jpg",
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
			img: "/images/portfolio/mario.jpg",
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
			img: "/images/portfolio/dykat.jpg",
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
			img: "/images/portfolio/nordski.jpg",
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
			link: "https://santalux.ru/",
			img: "/images/portfolio/santalux.jpg",
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
			img: "/images/portfolio/hpk.jpg",
			stack: [
				{code: 'bitrix', icon: <SvgBitrix />},
				{code: 'php', icon: <FaPhp />},
				{code: 'js', icon: <FaJsSquare />},
				{code: 'css', icon: <FaCss3Alt />},
				{code: 'html', icon: <FaHtml5 />},
			]
		},
		{
			name: 'Sensa',
			project: 'Site improvements',
			link: "https://sensa-massage.ru/",
			img: "/images/portfolio/sensa.jpg",
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
			img: "/images/portfolio/vodada.jpg",
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
									<Fancybox>
										<button className="portfolio-item__btn" data-src={item.img ? item.img : ''} data-fancybox="gallery">
											<span className="portfolio-item__img" style={{backgroundImage: item.img ? `url('${item.img}')` : 'none'}}></span>
										</button>
									</Fancybox>
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