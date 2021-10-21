import { Switch, Route } from 'react-router-dom';

import HomePage from './Pages/Home/HomePage';

const Router = () => {

	return (

		<Switch>

			<Route path="/portfolio" exact={true} component={HomePage}/>

		</Switch>
	)
}

export default Router;