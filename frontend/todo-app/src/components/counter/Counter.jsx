import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Counter.css'


class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

	render() {
		return (
			<div className="App">
				<CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
				<CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
				<CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className="Count">{this.state.counter}</span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
			</div>
		);
    }
    
    
    reset() {
        this.setState({counter : 0});
    }

    // Update state, counter++
    increment(by) {
        //console.log(`increment from parent - ${by}`);

        // Bad Practice
        //this.state.counter++;
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    // Update state, counter--
    decrement(by) {
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        );
    }

}

class CounterButton extends Component {

    // Define the initial state in a constructor
    // state => counter 0
    // constructor() {
    //     super();
        // this.state = {
        //     counter : 0
        // }

        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    // }

    render() {
        //const style = {fontSize : "50px", padding : "15px 30px"}; 

        return (
            <div className="Counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                {/*<span className="Count">{this.state.counter}</span>*/}
            </div>
        );
    }
    // // Update state, counter++
    // increment() {
    //     //console.log('increment');

    //     // Bad Practice
    //     //this.state.counter++;
    //     this.setState(
    //         (prevState) => {
    //             return {counter: prevState.counter + this.props.by}
    //         }
    //     );
    //     this.props.incrementMethod(this.props.by);
        
    // }

    // // Update state, counter--
    // decrement() {
    //     //console.log('increment');

    //     // Bad Practice
    //     //this.state.counter++;
    //     this.setState(
    //         (prevState) => {
    //             return {counter: prevState.counter - this.props.by}
    //         }
    //     );
    //     this.props.decrementMethod(this.props.by);
        
    // }
    
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter;
 