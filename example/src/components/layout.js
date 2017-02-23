import React from 'react'
import {Link} from 'react-router'

export default class extends React.Component {
	render(){
		return (
			<div>
				<div className="header">Layout top</div>
				<Link to="/">Page 1</Link>
				<Link to="/page2">Page 2</Link>
				{this.props.children}
				<div>layout bottom</div>
			</div>
		)
	}

}