import React from 'react'
import media from '../media'

export default class extends React.Component {
	render(){
		// console.log('responsive rendered', media)
		return (
			<div className="child">
				<div className="header">
					Responsive-
					{media.xs ? 'xs' : ''}
					{media.sm ? 'sm' : ''}
					{media.md ? 'md' : ''}
					{media.lg ? 'lg' : ''}-
					{media.gtxs ? 'gtxs' : ''}
				</div>
			</div>
		)
	}

}