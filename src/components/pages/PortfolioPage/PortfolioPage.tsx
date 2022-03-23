import { FaFileAlt, FaJsSquare, FaLink, FaReact } from "react-icons/fa"
import { PortfolioPageStyled } from "./PortfolioPage.styled"

export const PortfolioPage = () => {
	type ProjectItemType = {
		name: string
		img: string
		project?: string
		link?: string
		stack?: Array<{
			code: string
			icon: JSX.Element
		}>
	}

	let portfolio = [
		{
			name: 'Project',
			img: '/images/me.jpg',
			project: 'project',
			link: '#test',
			stack: [
				{code: 'react', icon: <FaReact />},
				{code: 'js', icon: <FaJsSquare />}
			]
		},
		{
			name: 'Project',
			img: '/images/me.jpg',
			project: 'project',
			link: '#test',
			stack: [
				{code: 'react', icon: <FaReact />},
				{code: 'js', icon: <FaJsSquare />}
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
									<div className="portfolio-item__img" style={{backgroundImage: `url('${item.img}')`}}></div>
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