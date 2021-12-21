import React from 'react';

import ImageSlideShow from '../../Components/ImageSlideShow';

const MyWork = () => {

	const projects = [

		{
			name : 'Wigo',
			description : 'lotfi love JS',
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
			description : 'lotfi love JS',
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
			description : 'lotfi love JS',
			images : [

				'https://f002.backblazeb2.com/file/lotfi-portfolio/profile.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/menu.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/find+new+people.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/feed.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/comments.jpg',
				'https://f002.backblazeb2.com/file/lotfi-portfolio/chat.jpg',
			]
		}
	]

	return (

		<div className="my-work uk-margin-large">
			<h2 className="uk-h1 uk-text-white first-letter-capitalize">my work</h2>
			<div className="uk-grid-small uk-child-width-1-1 uk-child-width-1-3@s uk-grid-match uk-flex-center" data-uk-grid>
				{ projects.map(project => (

					<div key={project.name}>
						<div className="uk-border-full uk-border-rounded">
							<ImageSlideShow images={project.images}/>
							<div className="uk-padding-small">
								<h4 className="uk-text-white uk-text-bold uk-margin-remove">{ project.name }</h4>
								<p className="uk-text-white uk-margin-remove">{ project.description }</p>
							</div>
						</div>
					</div>
				)) }
			</div>
		</div>
	)
}

export default MyWork;