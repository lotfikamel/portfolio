import React from 'react';

import { NavLink, useLocation } from "react-router-dom";

import { Home } from "react-feather";

const Menu = () => {

	const location = useLocation();

	React.useEffect(() => {

		UIkit.offcanvas('#menu').hide();
	}, [location])

	return (

		<div id="menu" data-uk-offcanvas="overlay: true">

			<div className="uk-offcanvas-bar">

				<button className="uk-offcanvas-close" type="button" data-uk-close></button>

				<ul className="uk-nav uk-nav-default">

					<li className="uk-margin-small">
						<NavLink to="/">
							<Home size={22}/>
							<span className="first-letter-capitalize uk-margin-small-left">accueil</span>
						</NavLink>
					</li>

				</ul>

			</div>
		</div>
	)
}

export default Menu