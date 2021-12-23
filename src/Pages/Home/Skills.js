import React from "react";

import { Check } from "react-feather";

const Skills = () => {

	const fields = [

		{
			name : 'front-end',
			skills : [

				'HTML5',
				'CSS3',
				'JavaScript ES6/ES7',
				'React.Js',
				'React Router DOM',
				'Redux',
				'materializecss',
				'UIkit Css',
			]
		},

		{
			name : 'mobile front-end',
			skills : [

				'React Native',
				'Expo SDK'
			]
		},

		{
			name : 'backend',
			skills : [

				'MongoDB',
				'MySQL',
				'Redis',
				'NodeJs',
				'Express.js',
				'Socket.IO',
				'Json Web Token',
				'Firebase Admin SDK',
				'Expo Server SDK',
			]
		},

		{
			name : 'operating systems and servers',
			skills : [

				'Ubuntu',
				'Ubuntu Server',
				'Configuration and deployment of applications on Ubuntu VPS servers'
			]
		},

		{
			name : 'third party services',
			skills : [

				'Backblaze B2 Cloud Storage',
				'Firebase',
				'Google Admob',
				'Google Analytics',
			]
		},

		{
			name : 'other skills',
			skills : [

				'Web scraping with Puppeteer',
				'Machine learning with python and sklearn'
			]
		}
	]

	return (

		<div className="skills uk-margin-large">
			<h2 className="uk-h1 uk-text-white first-letter-capitalize">skills</h2>
			<p className="uk-text-white uk-text-lead">When I am entrusted with a project, I build it myself, from zero to production, because I have many skills in different areas. take a look !</p>
			<div className="uk-grid-small uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match uk-flex-center" data-uk-grid>

				{ fields.map(field => (

					<div key={field.name}>
						<div className="uk-padding-small uk-background-secondary uk-border-rounded">
							<h3 className="uk-text-white uk-text-capitalize">{ field.name }</h3>
							<ul className="uk-nav">

								{ field.skills.map(skill => (

									<li key={skill}>
										<Check className="uk-text-success"/>
										<span className="uk-text-white uk-margin-small-left">{ skill }</span>
									</li>
								)) }
								
							</ul>
						</div>
					</div>
				)) }

			</div>
		</div>
	)
}

export default Skills;