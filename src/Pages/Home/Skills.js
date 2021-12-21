import React from "react";

import { Check } from "react-feather";

const Skills = () => {

	const [ skills, setSkills ] = React.useState({

		frontend : [

			'HTML5',
			'CSS3',
			'JavaScript ES6/ES7',
			'React.Js',
			'React Router DOM',
			'Redux',
			'materializecss',
			'UIkit Css',
		],

		mobileFrontend : [

			'React Native',
			'Expo SDK'
		],

		backend : [

			'MongoDB',
			'MySQL',
			'Redis',
			'NodeJs',
			'Express.js',
			'Socket.IO',
			'Json Web Token',
			'Firebase Admin SDK',
			'Expo Server SDK',
		],

		operatingSystemsAndServers : [

			'Ubuntu',
			'Ubuntu Server',
			'Configuration and deployment of applications on Ubuntu VPS servers'
		],

		thirdPartyServices : [

			'Backblaze B2 Cloud Storage',
			'Firebase',
			'Google Admob',
			'Google Analytics',
		],

		otherSkills : [

			'Web scraping with Puppeteer',
			'Machine learning with python and sklearn'
		]
	})

	return (

		<div className="skills uk-margin-large">
			<h2 className="uk-h1 uk-text-white first-letter-capitalize">skills</h2>
			<p className="uk-text-white uk-text-lead">When I am entrusted with a project, I build it myself, from zero to production, because I have many skills in different areas. take a look !</p>
			<div className="uk-grid-small uk-child-width-1-1 uk-child-width-1-3@s uk-grid-match uk-flex-center" data-uk-grid>

				<div>
					<div className="uk-padding-small uk-border-full uk-border-rounded">
						<h3 className="uk-text-white uk-text-capitalize">web front-end</h3>
						<ul className="uk-nav">

							{ skills.frontend.map(skill => (

								<li key={skill}>
									<Check className="uk-text-success"/>
									<span className="uk-text-white uk-margin-small-left">{ skill }</span>
								</li>
							)) }
							
						</ul>
					</div>
				</div>

				<div>
					<div className="uk-padding-small uk-border-full uk-border-rounded">
						<h3 className="uk-text-white uk-text-capitalize">mobile front-end</h3>
						<ul className="uk-nav">

							{ skills.mobileFrontend.map(skill => (

								<li key={skill}>
									<Check className="uk-text-success"/>
									<span className="uk-text-white uk-margin-small-left">{ skill }</span>
								</li>
							)) }
							
						</ul>
					</div>
				</div>

				<div>
					<div className="uk-padding-small uk-border-full uk-border-rounded">
						<h3 className="uk-text-white uk-text-capitalize">web back-end</h3>
						<ul className="uk-nav">

							{ skills.backend.map(skill => (

								<li key={skill}>
									<Check className="uk-text-success"/>
									<span className="uk-text-white uk-margin-small-left">{ skill }</span>
								</li>
							)) }
							
						</ul>
					</div>
				</div>

				<div>
					<div className="uk-padding-small uk-border-full uk-border-rounded">
						<h3 className="uk-text-white uk-text-capitalize">operating systems and servers</h3>
						<ul className="uk-nav">

							{ skills.operatingSystemsAndServers.map(skill => (

								<li key={skill}>
									<Check className="uk-text-success"/>
									<span className="uk-text-white uk-margin-small-left">{ skill }</span>
								</li>
							)) }
							
						</ul>
					</div>
				</div>

				<div>
					<div className="uk-padding-small uk-border-full uk-border-rounded">
						<h3 className="uk-text-white uk-text-capitalize">third-party services</h3>
						<ul className="uk-nav">

							{ skills.thirdPartyServices.map(skill => (

								<li key={skill}>
									<Check className="uk-text-success"/>
									<span className="uk-text-white uk-margin-small-left">{ skill }</span>
								</li>
							)) }
							
						</ul>
					</div>
				</div>

				<div>
					<div className="uk-padding-small uk-border-full uk-border-rounded">
						<h3 className="uk-text-white uk-text-capitalize">other skills</h3>
						<ul className="uk-nav">

							{ skills.otherSkills.map(skill => (

								<li key={skill}>
									<Check className="uk-text-success"/>
									<span className="uk-text-white uk-margin-small-left">{ skill }</span>
								</li>
							)) }
							
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills;