import React, { Component } from 'react';

class Calculator extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
	  	displayValue: '0',
	  	waitingForOperand: false,
	  	operator: '',
	  	firstNum: '',
	  	secondNum: '',
	  	answer: ''
	  }

	  this.clearDisplay = this.clearDisplay.bind(this);
	  this.evaluate = this.evaluate.bind(this);
	  this.operation = this.operation.bind(this);
	  this.showDot = this.showDot.bind(this);
	  this.showNumber = this.showNumber.bind(this)
	}

	showNumber(num) {
		const { displayValue, waitingForOperand } = this.state;
		const currentNum = displayValue;
		const newNum = `${currentNum}${num}`
		if (waitingForOperand) {
			this.setState({
				displayValue: String(num),
				waitingForOperand: false	
			}) 
		} else {
			this.setState({
				displayValue: displayValue === '0' ? num : newNum
			})
		}
	}

	showDot() {
		const { displayValue, waitingForOperand } = this.state;
		if (waitingForOperand) {
			this.setState({
				displayValue: '.',
				waitingForOperand: false
			})
		} else if (Array.from(displayValue).indexOf('.') === -1) {
			this.setState({
				displayValue: displayValue + '.',
				waitingForOperand: false
			})
		}
	}

	clearDisplay() {
		this.setState({
			displayValue: '0',
			firstNum: '0',
			secondNum: '0'
		})
	}

	operation(type) {
		const { displayValue } = this.state;
		this.setState({
			firstNum: displayValue,
			waitingForOperand: true,
			operator: type
		})
	}

	evaluate() {
		const { displayValue, operator, firstNum, secondNum } = this.state;
		this.setState({
			firstNum: parseFloat(firstNum),
			secondNum: parseFloat(displayValue)
		})

		let addAnswer, subAnswer, multAnswer, divAnswer;

		switch (operator) {
			case '+':
				addAnswer = firstNum + secondNum;
				this.setState({
					displayValue: addAnswer
				});
				break;
			case '-':
				subAnswer = firstNum - secondNum
				this.setState({
					displayValue: subAnswer
				});
				break;
			case '*':
				multAnswer = firstNum * secondNum
				this.setState({
					displayValue: multAnswer
				});
				break;
			case '/':
				divAnswer = firstNum / secondNum
				this.setState({
					displayValue: divAnswer
				});
				break;
			default:
				console.log("nothing");
		}
	}

	render() {
		return (
			<div className="calc-body">
				<div className="top">
					<span className="clear" onClick={() => this.clearDisplay()}>C</span>
					<span className="screen">{this.state.displayValue}</span>
				</div>
				<div className="keys">
					<span onClick={()=>this.showNumber(7)}
						ref="7">7</span>
					<span onClick={()=>this.showNumber(8)}
						ref="8">8</span>
					<span onClick={()=>this.showNumber(9)}
						ref="9">9</span>
					<span className="operator" onClick={()=>this.operation('+')}>+</span>
					<span onClick={()=>this.showNumber(4)}
						ref="4">4</span>
					<span onClick={()=>this.showNumber(5)}
						ref="5">5</span>
					<span onClick={()=>this.showNumber(6)}
						ref="6">6</span>
					<span className="operator" onClick={()=>this.operation('-')}>-</span>
					<span onClick={()=>this.showNumber(1)}
						ref="1">1</span>
					<span onClick={()=>this.showNumber(2)}
						ref="2">2</span>
					<span onClick={()=>this.showNumber(3)}
						ref="3">3</span>
					<span className="operator" onClick={()=>this.operation('/')}>/</span>
					<span onClick={()=>this.showNumber(0)}
						ref="0">0</span>
					<span onClick={()=>this.showDot(".")}
						ref=".">.</span>
					<span className="eval" onClick={() => this.evaluate()}>=</span>
					<span className="operator" onClick={()=>this.operation('*')}>*</span>
				</div>
			</div>
		)
	}
}

export default Calculator;