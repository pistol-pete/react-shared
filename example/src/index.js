import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { Router, Route, browserHistory } from 'react-router'
import shared from './shared'
import media from './media'

const routes = [
	<Route key="/" path="/" component={require('./pages/page1').default}/>,
	<Route key="page2" path="/page2" component={require('./pages/page2').default}/>
]

class App extends React.Component {
	constructor(){
		super()
		shared.init({
		  child_data: "initial",
		  innerchild_data: {
		    ready: true,
		    value: null
		  }
		}, this)
		media.init(this, {xs: 400})
	}
	render() {
		return (
			<Router history={browserHistory}>
				{routes}
			</Router>
		)
	}
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
