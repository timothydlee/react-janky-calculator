import React, { Component } from 'react';

class NumberKey extends Component {
	render() {
		return (
			<span 
				className={this.props.className} 
				onClick={this.props.showNumber}
				>
				{this.props.numValue}
			</span>
		)
	}
}

export default NumberKey;



