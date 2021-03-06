import Navbar from "./Components/Navbar";

import Router from './Router';

const App = () => {

	return (

		<div id="app" className="main-page-padding">

			<Navbar/>

			<main>
				<Router/>
			</main>

		</div>
	)
}

export default App;