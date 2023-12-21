import { useTranslation } from 'react-i18next'

const Main = () => {
	const fechaInicio = new Date('2023-02-01').getTime()
	const fechaFin = new Date().getTime()

	const { t } = useTranslation()

	const diff = fechaFin - fechaInicio

	const actualJobDuration = Math.ceil(diff / (1000 * 60 * 60 * 24 * 30))

	return (
		<main>
			<section className='main-info-cv'>
				<div className='grid300 centered'>
					<img
						className='foto-perfil-cv'
						src={'./octavio-frangipani.jpg'}
						alt='foto perfil'
					/>

					<article className='info-cv'>
						<h1>
							<em
								id='html-icon'
								className='fa-brands fa-html5'
							></em>{' '}
							<em
								id='css-icon'
								className='fa-brands fa-css3-alt'
							></em>{' '}
							<em
								id='js-icon'
								className='fa-brands fa-js-square'
							></em>{' '}
							<em
								id='bs-icon'
								className='fab fa-bootstrap'
							></em>{' '}
							<em
								id='react-icon'
								className='fa-brands fa-react'
							></em>{' '}
							<em
								id='node-icon'
								className='fa-brands fa-node'
							></em>{' '}
							<em
								id='git-icon'
								className='fa-brands fa-git-alt'
							></em>{' '}
							{/* <em id='python-icon' className='fa-brands fa-python'></em>{' '} */}
						</h1>
						<p>{t('city')}</p>
						<p>
							<em className='fas fa-envelope'></em>{' '}
							<a href='mailto:frangipani.octavio@gmail.com'>
								frangipani.octavio@gmail.com
							</a>
						</p>
						<p>
							<em className='fas fa-phone'></em>{' '}
							<a href='tel:+34722696514'>+34 722 69 65 14</a>
						</p>

						<p>
							<em
								id='linkedin-icon'
								className='fab fa-linkedin'
							></em>{' '}
							<a
								href='https://www.linkedin.com/in/octavio-frangipani-080aa947/'
								target='_blank'
							>
								{t('linkedin')}
							</a>
						</p>
						<p>
							<em
								id='github-icon'
								className='fab fa-github-square'
							></em>{' '}
							<a
								href='https://github.com/octapf?tab=repositories'
								target='_blank'
							>
								{t('github')}
							</a>
						</p>
						<p>
							<em className='fa-solid fa-check'></em> <a>{t('work-permit')}</a>
						</p>
						<p>
							<em className='fa-solid fa-language'></em> <a>{t('language')}</a>
						</p>
						<p>{t('summary')}</p>
					</article>
				</div>
				<h4 className='mary1'>
					{t('about')}{' '}
					<a href='#header'>
						<em
							style={{ fontSize: '12px' }}
							className='fa-solid fa-angle-up'
						></em>
					</a>
				</h4>
				<article className='info-cv'>
					<p>{t('about-text')}</p>
				</article>
			</section>

			<main className='main-container-cv'>
				<section id='working-experience'>
					<h4 className='mary1'>
						{t('experience')}{' '}
						<a href='#header'>
							<em
								style={{ fontSize: '12px' }}
								className='fa-solid fa-angle-up'
							></em>
						</a>
					</h4>
					<div className='grid300'>
						<article className='article-cv'>
							<h5>
								Full Stack {t('developer')} {t('at')}{' '}
								<a
									href='https://www.urbanyhostels.com/'
									target='_blank'
								>
									Urbany Hostels
								</a>
							</h5>
							<p>
								{t('February 2023 to present')}{' '}
								{`(${actualJobDuration} ${t('months')})`}
								<br />
								<small>
									{t('city')} ({t('hybrid')})
								</small>
							</p>

							<small>
								{t('Proficiency in')} <i>React</i>
								<br />
								{t('Proficiency in')} <i>HTML / CSS / JavaScript</i>
								<br />
								{t('Creation of')} <i>custom Hooks</i>
								<br />
								{t('Implement')} <i>Typescript</i> - Frontend & Backend
								<br />
								{t('Working with')} <i>Node & Express.Js</i> - Backend
								<br />
								{t('Use of')} <i>styled components</i>
								<br />
								{t('Implement')} <i>REDUX</i>
								<br />
								{t('Responsive Design')}
								<br />
								{t('Understanding of Clean code & Design patterns')}
								<br />
								{t('Applied')} <i>Unit Testing - JEST</i>
								<br />
								{t('Integrating')} PayPal/Strive APIs
								<br />
								<i>GitHub & Git</i> {t('for Version Control System')}
								<br />
								{t('Creation of')} RESTful APIs
								<br />
								{t('Working with')} <i>MongoDB</i> & Mongoose ORM
								<br />
								{t('Authorization/Authentication workflow')}
								<br />
							</small>
						</article>
						<article className='article-cv'>
							<h5>
								Full Stack Web {t('developer')} {t('at')}{' '}
								<a
									href='https://www.linkedin.com/company/worksut/mycompany/'
									target='_blank'
								>
									Worksut
								</a>
							</h5>
							<p>
								{t('December 2021 - May 2022')} (6 {t('months')})
								<br />
								<small>
									{t('city')} ({t('remote')})
								</small>
							</p>

							<small>
								{t('Knowledge of')} <i>{t('Object Oriented Programming')}</i>{' '}
								<br />
								{t('Implement microservice architectures')}
								<br />
								{t('Working with')} Azure Cloud Services
								<br />
								{t('Main experience with')} <i>MERN Stack</i>
								<br />
								{t('Implement')} TDD & Unit Testing
								<br />
								{t('Usign')} <i>Typescript</i> - Front & Backend
								<br />
								{t('Working with')} <i>Node & Express.Js</i> - Backend
								<br />
								<i>{t('Agile Methodology')}</i> (SCRUM)
								<br />
								{t('Implement')} <i>React / Redux</i>
								<br />
								{t('Experience building')} RESTful API’s
								<br />
								{t('Quality Documentation and Diagrams')}
								<br />
								{t('Using Git-Flow and Git for Version control system')}
								<br />
							</small>
						</article>
						<article className='article-cv'>
							<h5>
								Full Stack Web {t('developer')} {t('at')}{' '}
								<a
									href='#'
									target='blank'
								>
									Letizia
								</a>
							</h5>
							<p>
								{t('February 2021 - January 2022')} (1 {t('year')})
								<br />
								<small>
									{t('city-2')} ({t('remote')})
								</small>
							</p>

							<small>
								{t('Implement')} <i>{t('payment processing system')}</i>
								<br />
								{t('Proficiency in')} <i>HTML / CSS / JS</i>
								<br />
								{t('Use of')} <i>React / Redux / Typescript</i> - Frontend
								<br />
								Typescript, <i>NodeJS & MongoDB</i> stack - Backend
								<br />
								{t('Experience implementing')} <i>OTP services</i>
								<br />
								{t('Working with')} <i>SCRUM</i> as an Agile methodology
								<br />
								{t('Experience building')} <i>APIs</i>
								<br />
								{t('Live team')} <i>{t('code reviews')}</i>
								<br />
								{t('Proficiency in')} <i>GitFlow</i>
								<br />
							</small>
						</article>
						{/* <article className='article-cv'>
							<h5>
								Head of Photography at{' '}
								<a href='http://www.sodimac.com/' target='_blank'>
									Sodimac
								</a>
							</h5>
							<p>
								November 2013 - April 2019 (5.7 years)<br />
								<small>Buenos Aires, Argentina (On-site)</small>
							</p>

							<small>
								Knowledge of HTML/CSS/JS applied in landings and email marketing
								<br />
								Knowledge of SQL Databases for content info consultancies
								<br />
								Intermediate MS Excel level
								<br />
								Photography and Video production on E-commerce sector at
								multinational retail company
								<br />
								Manage products/photography studio logistics
								<br />
								Manage digital content edition
								<br />
								Team leader of production (12 people) - Buenos Aires & Uruguay
								<br />
								Administrate content of over 47.000 products online-published
								<br />
								Design/Production of monthly catalogue
								<br />
							</small>
						</article> */}
					</div>
				</section>
				<section id='education'>
					<h4 className='mary1'>
						Education{' '}
						<a href='#header'>
							<em
								style={{ fontSize: '12px' }}
								className='fa-solid fa-angle-up'
							></em>
						</a>
					</h4>
					<div className='grid300'>
						<article className='article-cv'>
							<h5>
								Full Stack Web Developer at{' '}
								<a
									href='https://www.barcelonactiva.cat/es/itacademy#mesinfo'
									target='_blank'
								>
									Barcelona Activa - IT Academy
								</a>
							</h5>
							<p>April 2023 - August 2023 (4 months)</p>
							<small>
								<a
									href='https://cibernarium.barcelonactiva.cat/it-academy/inscripcio;jsessionid=75DD3AEA4E31B065F1E2C1A936EC750A?p_p_id=activitiesbycode_WAR_cibernariumportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_cacheability=cacheLevelPage&p_p_col_id=column-1&p_p_col_pos=1&p_p_col_count=2&_activitiesbycode_WAR_cibernariumportlet_id=838003'
									target='_blank'
									rel='noopener noreferrer'
								>
									Details
								</a>
							</small>
							<br />
							<small>
								Proficiency in <i>React</i>
								<br />
								Creation of <i>custom Hooks</i>
								<br />
								Implement <i>Typescript</i> in front/back end
								<br />
								Use of <i>styled components</i>
								<br />
								Use of Redux & <i>UseContext API</i>
								<br />
								<i>Responsive Design</i>
								<br />
								Understanding of <i>Clean code & Design patterns</i>
								<br />
								Applied Unit Testing - <i>JEST</i>
								<br />
							</small>
						</article>
						<article className='article-cv'>
							<h5>
								Full Stack MERN eCommerce Project{' '}
								<a
									href='https://www.udemy.com/course/mern-ecommerce/'
									target='_blank'
								>
									Proshop
								</a>
							</h5>
							<p>March 2021 - July 2021 (5 months)</p>
							<small>
								<a
									href='https://www.udemy.com/course/mern-ecommerce/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Details
								</a>
							</small>
							<br />
							<small>
								Develop a full <i>transactional e-commerce website</i>
								<br />
								Implement MERN stack, REDUX and <i>React-Bootstrap</i>
								<br />
								<i>Nodejs/ExpressJs</i> with <i>MongoDB/Mongoose</i> ORM
								<br />
								Use of <i>JWT authentication</i>
								<br />
								Creating <i>Custom error handlers</i>
								<br />
								Integrating the <i>PayPal/Strive</i> APIs
								<br />
								Project <i>deployment</i> to Heroku
								<br />
							</small>
						</article>

						<article className='article-cv'>
							<h5>
								Full Stack Web Development BootCamp at{' '}
								<a
									href='https://www.appbrewery.co/'
									target='_blank'
								>
									AppBrewery
								</a>
							</h5>

							<p>October 2020 - February 2021 (4 months)</p>
							<small>
								Proficiency in <i>HTML / CSS / JavaScript</i>
								<br />
								Understanding of <i>DOM Manipulation</i>
								<br />
								MERN Stack with <i>REDUX</i>
								<br />
								GitHub and Git for Version Control System
								<br />
								<i>Express & Nodejs</i> Backend implementation
								<br />
								Creation of <i>RESTful APIs</i>
								<br />
								<i>SQL / NOSQL Database</i> implementation
								<br />
								Work with MongoDB & <i>Mongoose</i> ORM
								<br />
								<i>Authorization/Authentication</i> workflow
								<br />
							</small>
						</article>
					</div>
				</section>

				<section id='skills'>
					<h4 className='mary1'>
						Skills{' '}
						<a href='#header'>
							<em
								style={{ fontSize: '12px' }}
								className='fa-solid fa-angle-up'
							></em>
						</a>
					</h4>
					<div className='grid120'>
						<article className='article-cv'>
							<p>
								<em
									id='html-icon'
									className='fa-brands fa-html5'
								></em>
								<strong> HTML5</strong>
							</p>
						</article>
						<article className='article-cv'>
							<p>
								<em
									id='css-icon'
									className='fa-brands fa-css3-alt'
								></em>
								<strong> CSS3</strong>
							</p>
						</article>
						<article className='article-cv'>
							<p>
								<em
									id='js-icon'
									className='fa-brands fa-js'
								></em>
								<strong> JavaScript</strong>
							</p>
						</article>
						<article className='article-cv'>
							<p>
								<em
									id='bs-icon'
									className='fab fa-bootstrap'
								></em>
								<strong> Bootstrap</strong>
							</p>
						</article>
						<article className='article-cv'>
							<p>
								<em
									id='react-icon'
									className='fa-brands fa-react'
								></em>
								<strong> React</strong>
							</p>
						</article>
						<article className='article-cv'>
							<p>
								<strong>REDUX</strong>
							</p>
						</article>
						<article className='article-cv'>
							<p>
								<strong>TypeScript</strong>
							</p>
						</article>

						<article className='article-cv'>
							<p>
								<strong>MongoDB</strong>
							</p>
						</article>
						<article className='article-cv'>
							<p>
								<strong>Express.js</strong>
							</p>
						</article>
						<article className='article-cv'>
							<p>
								<em
									id='node-icon'
									className='fa-brands fa-node'
								></em>
								<strong> Node.js</strong>
							</p>
						</article>

						<article className='article-cv'>
							<p>
								<em
									id='git-icon'
									className='fa-brands fa-git-alt'
								></em>
								<strong> Git</strong>
							</p>
						</article>
					</div>
				</section>
			</main>
		</main>
	)
}

export default Main
