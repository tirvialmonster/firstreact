import React from 'react';
// import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import './less/index.less';
import './less/App.less';
import './less/Homepage.less';

import App from './js/App';
import Homepage from './js/Homepage';

import registerServiceWorker from './modules/registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

render(
	//配置路由
	(
		<Router>
			<div className="rootDiv">
				<Route exact path="/" component={App}/>
        		<Route exact path="/homepage" component={Homepage}/>
			</div>
		</Router>
	),
	document.getElementById('root')
)

registerServiceWorker();
