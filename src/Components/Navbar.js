import { Menu } from 'react-feather';

const Navbar = () => {

	const scroll = (e, el) => {

		e.preventDefault();

		const element = document.querySelector(el);

		element.scrollIntoView({ behavior: 'smooth'});
	}

	return (

		<div id="navbar">
			<div className="uk-container">
				<nav data-uk-navbar className="uk-light">
					<div className="uk-navbar-center">
						<ul className="uk-navbar-nav uk-text-white">
							<li>
								<a onClick={(e) => scroll(e, '.about')} className="uk-text-bold">about</a>
							</li>
							<li>
								<a onClick={(e) => scroll(e, '.about')} className="uk-text-bold">projects</a>
							</li>
							<li>
								<a onClick={(e) => scroll(e, '.contact')} className="uk-text-bold">contact</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Navbar;