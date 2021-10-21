import Navbar from "./Components/Navbar";

import Menu from './Components/Menu';

import Router from './Router';

const App = () => {

	return (

		<div id="app">

			<Navbar/>

			<Menu/>

			<main>
				<Router/>
			</main>

		</div>
	)
}

export default App;