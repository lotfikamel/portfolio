import React from 'react';

import { ChevronLeft, ChevronRight } from 'react-feather';

const ImageSlideShow = ({ images }) => {

	const createLightboxPanel = (index=0) => {

		UIkit.lightboxPanel({

			items : images.map(src => ({ source: src })),

			index
		}).show();
	}

	return (

		<div id="image-slide-show" className="uk-position-relative uk-visible-toggle uk-light cursor-pointer" tabIndex="-1" data-uk-slideshow uk-data-type="image">

			<ul className="uk-slideshow-items">

				{ images.map((img, index) => (

					<li key={img}>
						<img data-uk-img onClick={() => createLightboxPanel(index)} src={img} alt="" data-uk-cover/>
					</li>
				)) }
			</ul>

			<a className="uk-position-center-left uk-position-small uk-hidden-hover uk-flex uk-flex-center uk-flex-middle" href="#" uk-slideshow-item="previous">
				<ChevronLeft/>
			</a>
			<a className="uk-position-center-right uk-position-small uk-hidden-hover uk-flex uk-flex-center uk-flex-middle" href="#" uk-slideshow-item="next">
				<ChevronRight/>
			</a>

		</div>
	);
}

export default ImageSlideShow;