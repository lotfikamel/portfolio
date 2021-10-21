import { Menu } from 'react-feather';

const Navbar = () => {

	return (

		<div id="navbar">
			<div className="uk-container uk-container-large">
				<nav data-uk-navbar className="uk-light">
					<div className="uk-navbar-left">
						<div className="uk-navbar-item" data-uk-toggle="target: #menu">
							<Menu/>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Navbar;