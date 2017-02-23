import React from 'react'
import shared from '../shared'
import InnerChild from './innerchild'

export default class extends React.Component {
	onClick(){
		shared.setState({child_data: this.refs.text1.value})
	}

	render(){
		// console.log('child'+this.props.childNumber+' rendered')
		return (
			<div className="child">
				<div className="header">Child {this.props.childNumber}</div>
				<input type="text" ref="text1"/>
				<button onClick={() => this.onClick()}>Click</button>
				<div>child_data: {shared.state.child_data}</div>
				{shared.state.child_data === "456" ? 'You win!' : 'nope'}
				<InnerChild childNumber="1"/>
				{this.props.children}
			</div>
		)
	}

}