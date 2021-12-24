import React from 'react';

import ImageSlideShow from '../../Components/ImageSlideShow';

const MyWork = () => {

	const appSourcesTexts = {

		android : 'view in Google Play',
		web : 'visit the web app'
	}

	const projects = [

		{
			name : 'Wigo',
			type : 'android',
			link : 'https://play.google.com/store/apps/details?id=com.wigo.dz.app',
			description : 'a multi-vendor e-commerce/delivery application built for a new startup.',
			images : [
				
				'https://f002.backblazeb2.com/file/lotfi-portfolio/Screenshot_20211207-115032.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/Screenshot_20211207-114957.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/Screenshot_20211207-115714.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/Screenshot_20211207-120008.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/Screenshot_20211207-120217.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/Screenshot_20211207-120732.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/Screenshot_20211207-120822.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/Screenshot_20211207-121038.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/Screenshot_2021-12-21-12-02-56-70_f73b71075b1de7323614b647fe394240.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/Screenshot_2021-12-21-12-03-02-35_f73b71075b1de7323614b647fe394240.jpg'
			]
		},

		{
			name : 'Wigo Delivery',
			type : 'android',
			link : 'https://play.google.com/store/apps/details?id=com.wigo.dz.delivery.app',
			description : 'the official application used by Wigo deliverers to receive and deliver orders, check their income, etc.',
			images : [

				'https://f002.backblazeb2.com/file/lotfi-portfolio/Screenshot_20211207-121439.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/Screenshot_20211207-121613.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/Screenshot_20211207-121713.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/Screenshot_20211207-121927.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/Screenshot_20211207-121951.png'
			]
		},

		{
			name : 'ML Chat',
			type : 'android',
			link : 'https://play.google.com/store/apps/details?id=com.amarc.mlchat',
			description : 'real time chat application to meet and chat with new people.',
			images : [

				'https://f002.backblazeb2.com/file/lotfi-portfolio/profile.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/menu.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/find+new+people.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/feed.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/comments.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/chat.jpg',
			]
		},

		{
			name : 'Celyn Store',
			type : 'web',
			description : 'customized online store built for a customer.',
			images : [

				'https://f002.backblazeb2.com/file/lotfi-portfolio/1.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/2.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/3.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/4.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/5.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/6.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/7.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/8.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/9.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/10.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/11.png',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/12.png'
			]
		},

		{
			name : 'Optu',
			type : 'android',
			link : 'https://play.google.com/store/apps/details?id=com.amarc.optu.app',
			description : 'marketplace application that connects buyers and stores to contract purchasing transactions.',
			images : [

				'https://f002.backblazeb2.com/file/lotfi-portfolio/optu1.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/optu2.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/optu3.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/optu4.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/optu5.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/optu6.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/optu7.jpg'
			]
		}
	]

	const openPreview = (images) => {

		UIkit.lightboxPanel({

			items : images.map(src => ({ source: src })),

			index : 0
		}).show();
	}

	return (

		<div className="my-work uk-margin-large">
			<h2 className="uk-h1 uk-text-white first-letter-capitalize">my work</h2>
			<p className="uk-text-white uk-text-lead">Here is the list of my previous work choosen for you, each work combines clean code, modern design and great robustness.</p>
			<div className="uk-grid-small uk-child-width-1-1" data-uk-grid>
				{ projects.map(project => (

					<div key={project.name}>

						<div className="uk-background-secondary">

							<div className="uk-grid-small" data-uk-grid>
								
								<div className="uk-width-1-1 uk-width-2-5@s">
									<div className="uk-padding">
										<h3 className="uk-text-white uk-text-bold uk-margin-small">{ project.name }</h3>
										{ project.link && (

											<a href={project.link} target="_blank" rel="noreferrer">{ appSourcesTexts[project.type] }</a>
										) }
										<p className="uk-text-white uk-margin-small">{ project.description }</p>
										<div>
											<button onClick={() => openPreview(project.images)} className="uk-button uk-button-primary uk-button-rounded">see work preview</button>
										</div>
									</div>
									
								</div>

								<div className="uk-width-1-1 uk-width-expand@s">
									<ImageSlideShow images={project.images}/>
								</div>
							</div>

						</div>

						
					</div>
				)) }
			</div>
		</div>
	)
}

export default MyWork;