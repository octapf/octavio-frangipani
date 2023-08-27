const Main = () => {
	return (
		<main>
			<section className='main-info-cv'>
				<div className='grid300'>
					<img
						className='foto-perfil-cv'
						src={'/octavio-frangipani.jpg'}
						alt='foto perfil'
					/>

					<article className='info-cv'>
						<h1>
							<em id='html-icon' className='fa-brands fa-html5'></em>{' '}
							<em id='css-icon' className='fa-brands fa-css3-alt'></em>{' '}
							<em id='js-icon' className='fa-brands fa-js-square'></em>{' '}
							<em id='bs-icon' className='fab fa-bootstrap'></em>{' '}
							<em id='react-icon' className='fa-brands fa-react'></em>{' '}
							<em id='node-icon' className='fa-brands fa-node'></em>{' '}
							<em id='git-icon' className='fa-brands fa-git-alt'></em>{' '}
							{/* <em id='python-icon' className='fa-brands fa-python'></em>{' '} */}
						</h1>
						<p>Barcelona City, Spain</p>
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
							<em id='linkedin-icon' className='fab fa-linkedin'></em>{' '}
							<a
								href='https://www.linkedin.com/in/octavio-frangipani-080aa947/'
								target='_blank'
							>
								LinkedIn Profile
							</a>
						</p>
						<p>
							<em id='github-icon' className='fab fa-github-square'></em>{' '}
							<a
								href='https://github.com/octapf?tab=repositories'
								target='_blank'
							>
								GitHub Profile
							</a>
						</p>
						<p>
							"Self-taught combined with entrepreneurial-tech goals delivered a
							fast-learner Full Stack Software Developer"
						</p>
					</article>
				</div>
				<h4 className='mary1'>
					About{' '}
					<a href='#header'>
						<em
							style={{ fontSize: '12px' }}
							className='fa-solid fa-angle-up'
						></em>
					</a>
				</h4>
				<article className='info-cv'>
					<p>
						When I read traditional success and career articles in my 20s, I was
						bombarded with the same advice: Choose one thing. Focus on doing one
						thing so well you become known as the best. I have never got to be
						that person. There is something inside me that does not let me focus
						on one thing. It's not that I had no idea of what to study, but
						many. It was not until I found the self-taught path that fulfilled
						my soul, enabled to mix, merge, and select all the content available
						out there to be discovered, at my own pace. <br />
						Born with a deep passion for numbers, commerce, technology, sports,
						and art, I found myself with a curious career working as a Full
						Stack Software Developer, with 6 years' experience in the E-commerce
						retail sector, had a short-lived retail startup before moving to
						Barcelona, and having worked as a professional photographer for more
						than 10 years.
						<br />I still have a lot to learn from future mistakes, projects,
						and people. But I can tell you that if you are willing to take this
						path, sometimes frustrating and uncertain, you will be able to shape
						yourself with a dash of originality.
					</p>
				</article>
			</section>

			<main className='main-container-cv'>
				<div className='division'></div>

				<section id='working-experience'>
					<h4 className='mary1'>
						Working Experience{' '}
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
									href='https://www.linkedin.com/company/worksut/mycompany/'
									target='_blank'
								>
									Worksut
								</a>
							</h5>
							<p>
								January 2022 - Present time <br />
								<small>Barcelona, Spain</small>
							</p>

							<p>
								Knowledge of Object-Oriented Programming
								<br />
								Implement microservice architectures
								<br />
								Working with Azure Cloud Services
								<br />
								Main experience with MERN Stack
								<br />
								Implement TDD with Unit Testing
								<br />
								Using NodeJS & Typescript at Backend
								<br />
								Frontend framework React/Redux
								<br />
								Working in an Agile environment (SCRUM)
								<br />
								Creation of NPM packages for Express /<br />
								Experience creating RESTful API’s
								<br />
								Quality Documentation and Diagrams
								<br />
								Knowledge of Containerization (Docker, Kubernetes)
								<br />
								Using Git-Flow/GitHub and Git as version control system
								<br />
							</p>
						</article>

						<article className='article-cv'>
							<h5>
								Full Stack Web Developer at{' '}
								<a href='#' target='_blank'>
									Letizia
								</a>
							</h5>
							<p>
								February 2021 - January 2022 <br />
								<small>Buenos Aires, Argentina</small>
							</p>

							<p>
								E-commerce site development implementing PayPal/Mercado Pago
								<br />
								Proficiency with HTML/CSS/JS
								<br />
								Use of React/Redux/Typescript on Frontend
								<br />
								NodeJS Typescript MongoDB stack on Backend
								<br />
								Working with MVC architectural pattern
								<br />
								Applying SOLID Software design principles
								<br />
								Experience implementing OTP services
								<br />
								Working with SCRUM as an Agile methodology
								<br />
								Experience building APIs
								<br />
								Live team code reviews
								<br />
								Proficiency in GitFlow
								<br />
							</p>
						</article>

						<article className='article-cv'>
							<h5>
								Head of Photography at{' '}
								<a href='http://www.sodimac.com/' target='_blank'>
									Sodimac
								</a>
							</h5>
							<p>
								5 yrs 7 mos <br />
								<small>Buenos Aires, Argentina, 2013 - 2019</small>
							</p>

							<p>
								Photography and Video production on E-commerce sector at
								multinational retail company. <br />
								Manage products/photography studio logistics <br />
								Manage digital content edition <br />
								Team leader of production (12 people) - Buenos Aires & Uruguay
								<br />
								Administrate content of over 47.000 products online-published{' '}
								<br />
								Design/Production of monthly catalogue <br />
								Knowledge of HTML/CSS/JS applied in landings and email marketing{' '}
								<br />
								Knowledge of SQL Databases for content info consultancies <br />
								Intermediate MS Excel level <br />
							</p>
						</article>
					</div>
				</section>
				<div className='division'></div>

				{/* <!-- section   -->
		<!-- h4 Education   -->
		<!-- article   -->
		<!-- h5 title   -->
		<!-- institute   -->
		<!-- city   -->
		<!-- duration   -->
		<!-- <section id="education"> -->
		<!-- <h4 className="mary1"> -->
		<!-- Education -->
		<!-- <a href="#header"><em style="font-size: 12px" className="fa-solid fa-angle-up"></em></a> -->
		<!-- </h4> -->
		<!-- <div className="grid300"> -->
		<!-- <article className="article-cv"> -->
		<!-- <h5> -->
		<!-- Frontend Bootcamp ( React / Redux / TypeScript / UnitTesting ) at -->
		<!-- <a href="https://www.barcelonactiva.cat/es/itacademy#mesinfo" target="_blank">Barcelona Activa - -->
		<!-- IT Academy</a> -->
		<!-- </h5> -->
		<!-- <p>September 2021 to present.</p> -->
		<!-- <small><a -->
		<!-- href="https://cibernarium.barcelonactiva.cat/it-academy/inscripcio;jsessionid=75DD3AEA4E31B065F1E2C1A936EC750A?p_p_id=activitiesbycode_WAR_cibernariumportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_cacheability=cacheLevelPage&p_p_col_id=column-1&p_p_col_pos=1&p_p_col_count=2&_activitiesbycode_WAR_cibernariumportlet_id=838003" -->
		<!-- target="_blank" rel="noopener noreferrer">Details</a></small> -->
		<!-- <br /> -->
		<!-- <small>Proficiency in HTML/CSS & SASS/Javascript</br>Implement Responsive Design </br> Proficiency -->
		<!-- in Bootstrap Library </br> -->
		<!-- React/Redux & Typescript Front/BackEnd </br> Training in SoftSkills </br></small> -->
		<!--  -->
		<!-- </article> -->
		<!-- <article className="article-cv"> -->
		<!-- <h5> -->
		<!-- MERN eCommerce Project <a href="https://proshop-app-177.herokuapp.com/" -->
		<!-- target="_blank">Proshop</a> -->
		<!-- </h5> -->
		<!-- <p>March 2021 - Present time</p> -->
		<!-- <small><a href="https://www.udemy.com/course/mern-ecommerce/" target="_blank" -->
		<!-- rel="noopener noreferrer">Details</a></small> -->
		<!-- <br /> -->
		<!-- <small>Develop a full transactional e-commerce website <br /> -->
		<!-- Implement MERN stack, REDUX and React-Bootstrap <br /> -->
		<!-- Nodejs/ExpressJs with MongoDB/Mongoose ORM <br /> -->
		<!-- Use of JWT authentication <br /> -->
		<!-- Creating Custom error handlers <br /> -->
		<!-- Integrating the PayPal/Strive APIs <br /> -->
		<!-- Project deployment to Heroku</small> -->
		<!-- </article> -->
		<!--  -->
		<!-- <article className="article-cv"> -->
		<!-- <h5> -->
		<!-- Full Stack Web Development BootCamp at -->
		<!-- <a href="https://www.appbrewery.co/" target="_blank">AppBrewery</a> -->
		<!-- </h5> -->
		<!--  -->
		<!--  -->
		<!-- <p>October 2020 - February 2021</p> -->
		<!-- <small> -->
		<!-- Proficiency in HTML/CSS/Javascript </br> -->
		<!-- Understanding of DOM Manipulation </br> -->
		<!-- MERN Stack with REDUX</br> -->
		<!-- GitHub and Git for Version Control System </br> -->
		<!-- Express & Nodejs Backend implementation</br> -->
		<!-- Creation of RESTful APIs </br> -->
		<!-- SQL / NOSQL Database implementation </br> -->
		<!-- Work with MongoDB & Mongoose ORM </br> -->
		<!-- Authorization/Authentication workflow </br> -->
		<!-- Deployment with GitHub Pages, Heroku and MongoDB Atlas</br> -->
		<!-- </small> -->
		<!-- </article> -->
		<!--  -->
		<!--  -->
		<!-- </div> -->
		<!-- </section> -->
		<!-- section   -->
		<!-- h4 Education   -->
		<!-- article   -->
		<!-- h5 title   -->
		<!-- institute   -->
		<!-- city   -->
		<!-- duration   --> */}
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
								Frontend Bootcamp ( React / Redux / TypeScript / Unit Testing )
								at{' '}
								<a
									href='https://www.barcelonactiva.cat/es/itacademy#mesinfo'
									target='_blank'
								>
									Barcelona Activa - IT Academy
								</a>
							</h5>
							<p>September 2021 to present.</p>
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
								Proficiency in HTML/CSS & SASS/JavaScript
								<br />
								Implement Responsive Design <br /> Proficiency in Bootstrap
								Library <br />
								React/Redux/Typescript Front/Backend implementation <br />{' '}
								Training in soft skills <br />
							</small>
						</article>
						<article className='article-cv'>
							<h5>
								MERN eCommerce Project{' '}
								<a
									href='https://proshop-app-177.herokuapp.com/'
									target='_blank'
								>
									Proshop
								</a>
							</h5>
							<p>March 2021 - Present time</p>
							<small>
								<a href='#' target='_blank' rel='noopener noreferrer'>
									Details
								</a>
							</small>
							<br />
							<small>
								Develop a full transactional e-commerce website <br />
								Implement MERN stack, REDUX and React-Bootstrap <br />
								Nodejs/ExpressJs with MongoDB/Mongoose ORM <br />
								Use of JWT authentication <br />
								Creating of Custom error handlers <br />
								Integrating the PayPal API <br />
								Project deployment to Heroku
							</small>
						</article>

						<article className='article-cv'>
							<h5>
								Full Stack Web Development BootCamp at{' '}
								<a href='https://www.appbrewery.co/' target='_blank'>
									The App Brewery
								</a>
							</h5>

							<p>October 2020 - February 2021</p>
							<small>
								Proficiency in HTML/CSS/JavaScript <br />
								Understanding of DOM Manipulation <br />
								MERN Stack with REDUX
								<br />
								GitHub and Git for Version Control System <br />
								Express & Nodejs Backend implementation
								<br />
								Creation of RESTful APIs <br />
								SQL / NOSQL Database implementation <br />
								Work with MongoDB & Mongoose ORM <br />
								Authorization/Authentication workflow <br />
								Deployment with GitHub Pages, Heroku and MongoDB Atlas
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
								<em id='html-icon' className='fa-brands fa-html5'></em>
								<strong> HTML5</strong>
							</p>
						</article>
						<article className='article-cv'>
							<p>
								<em id='css-icon' className='fa-brands fa-css3-alt'></em>
								<strong> CSS3</strong>
							</p>
						</article>
						<article className='article-cv'>
							<p>
								<em id='js-icon' className='fa-brands fa-js'></em>
								<strong> JavaScript</strong>
							</p>
						</article>
						<article className='article-cv'>
							<p>
								<em id='bs-icon' className='fab fa-bootstrap'></em>
								<strong> Bootstrap</strong>
							</p>
						</article>
						<article className='article-cv'>
							<p>
								<em id='react-icon' className='fa-brands fa-react'></em>
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
						{/* <article className='article-cv'>
							<p>
								<em id='python-icon' className='fa-brands fa-python'></em>
								<strong> Python</strong>
							</p>
						</article> */}

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
								<em id='node-icon' className='fa-brands fa-node'></em>
								<strong> Node.js</strong>
							</p>
						</article>

						<article className='article-cv'>
							<p>
								<em id='git-icon' className='fa-brands fa-git-alt'></em>
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
