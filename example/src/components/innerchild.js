import React from 'react'
import shared from '../shared'

export default class extends React.Component {
	constructor(){
		super()
		this.state = {timer: null}
	}

	onClick(){
		shared.setState({innerchild_data: {ready: false, value: null}})
		this.loadData(this.refs.text1.value)
	}

	loadData(value){
		if(this.state.timer ) clearTimeout(this.state.timer )
		this.setState({timer : setTimeout(() => {
			shared.setState({innerchild_data: {ready: true, value: value}})
		}, 2000)})
	}

	render(){
		// console.log('innerchild'+this.props.childNumber+' rendered')
		const ready = shared.state.innerchild_data.ready
		const value = shared.state.innerchild_data.value
		return (
			<div className="innerchild">
				<div className="header">InnerChild {this.props.childNumber}</div>
				<input type="text" ref="text1"/>
				<button onClick={() => this.onClick()}>Click</button>
				<div>child_data: {shared.state.child_data}</div>
				{ready ? 
					value ? <div>innerchild_data: {value}</div> : <br/>
					:
					<div>Loading...</div>}

			</div>
		)
	}

}