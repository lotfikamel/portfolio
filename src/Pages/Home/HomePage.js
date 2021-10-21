import { ArrowRight, Facebook, Linkedin, Mail, Phone } from "react-feather";

const HomePage = () => {

	return (

		<div id="home-page">
			<div className="uk-container">

				<div className="header uk-flex uk-flex-middle uk-flex-center" data-uk-height-viewport>
					<div className="uk-text-center">
						<h1 className="uk-heading-small uk-text-white uk-margin-remove first-letter-capitalize">Hello, I am <span className="uk-text-primary">Lotfi Kamel</span>.</h1>
						<h1 className="uk-heading-small uk-text-white uk-margin-remove first-letter-capitalize">I am a senior full-stack web and mobile developer.</h1>
						<button className="uk-button uk-button-primary uk-border-rounded uk-button-large uk-margin">
							<span className="uk-text-middle uk-margin-small-right">View my work</span>
							<ArrowRight/>
						</button>
					</div>
				</div>

				<div className="contact">
					<h2 className="uk-h1 uk-text-white first-letter-capitalize">contact me</h2>

					<div className="uk-grid-small uk-child-width-expand@m" data-uk-grid>
						<div>
							<ul className="uk-nav">
								<li className="uk-text-white">
									<a href="https://www.facebook.com/lotfi.kamel.web" target="_blank" className="uk-link-reset">
										<Facebook size={22}/>
										<span className="uk-text-middle uk-margin-small-left">lotfi.kemel.web</span>
									</a>
								</li>
								<li className="uk-text-white">
									<a href="https://www.linkedin.com/in/lotfi-kamel-606232198/" target="_blank" className="uk-link-reset">
										<Linkedin size={22}/>
										<span className="uk-text-middle uk-margin-small-left">Lotfi Kamel</span>
									</a>
								</li>
							</ul>
						</div>
						<div>
						<ul className="uk-nav">
								<li className="uk-text-white">
									<a className="uk-link-reset">
										<Phone size={22}/>
										<span className="uk-text-middle uk-margin-small-left">0699 87 82 64</span>
									</a>
								</li>
								<li className="uk-text-white">
									<a className="uk-link-reset">
										<Mail size={22}/>
										<span className="uk-text-middle uk-margin-small-left">lotfi.kamel.web@gmail.com</span>
									</a>
								</li>
							</ul>
						</div>
					</div>

				</div>

			</div>
		</div>
	)
}

export default HomePage;