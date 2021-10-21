import { ArrowRight } from "react-feather";

const HomePage = () => {

	return (

		<div id="home-page">
			
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

		</div>
	)
}

export default HomePage;