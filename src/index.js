import React from 'react';
// import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {HashRouter as Router,Route} from 'react-router-dom'

import registerServiceWorker from './modules/registerServiceWorker';
import App from './components/App';
import Homepage from './components/home/Homepage';

import './less/index.less';
import './less/App.less';
import './less/Homepage.less';

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
);

registerServiceWorker();
