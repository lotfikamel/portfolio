import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import moment from 'moment';
import 'moment/locale/fr';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

moment.locale('fr');

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
