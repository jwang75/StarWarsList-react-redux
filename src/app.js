
import logger from 'redux-logger';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers/index';
import {Provider} from 'react-redux';
import React from 'react';
import thunk from 'redux-thunk';
import {render} from 'react-dom';
import {fetchFilm} from './actions/filmAction';

import Film from './components/films';

const middleware = applyMiddleware(thunk,logger);
const store = createStore(reducers, middleware);

render(
	<Provider store={store}>
		<div>
			<Film />
		</div>

	</Provider>, document.querySelector('.container')
);


