import React from 'react';

import { ArrowRight, Check, Download, Facebook, Linkedin, Mail, Phone } from "react-feather";
import MyWork from './MyWork';

import Skills from './Skills';

const HomePage = () => {

	return (

		<div id="home-page">
			<div className="uk-container">

				<div className="header uk-flex uk-flex-middle uk-flex-center" data-uk-height-viewport="offset-top : true">
					<div className="uk-text-center">
						<h1 className="uk-heading-small uk-text-white uk-margin-remove first-letter-capitalize">Hello, I am <span className="uk-text-primary">Lotfi Kamel</span>.</h1>
						<h1 className="uk-heading-small uk-text-white uk-margin-remove first-letter-capitalize">I am a network engineer and senior full-stack developer.</h1>
					</div>
				</div>

				<Skills/>

				<MyWork/>

				<div className="contact uk-margin">
					<h2 className="uk-h1 uk-text-white first-letter-capitalize">contact me</h2>
					<p className="uk-text-white uk-text-lead">If you are considering building your next big project, don't hesitate to contact me. I can ensure the best quality of work.</p>
					<ul className="uk-nav">
						<li className="uk-text-white">
							<a href="https://www.facebook.com/lotfi.kamel.web" target="_blank" rel="noreferrer" className="uk-link-reset">
								<Facebook size={22}/>
								<span className="uk-text-middle uk-margin-small-left">lotfi.kemel.web</span>
							</a>
						</li>
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
	)
}

export default HomePage;