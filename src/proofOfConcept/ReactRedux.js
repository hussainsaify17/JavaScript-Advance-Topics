import { connect } from 'react-redux';
import React from 'react';
import { handleButtonClick, handleTextChange } from '../actions/action';

class ReactRedux extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
        <div>
            <h1>
                Welcome to Redux Application Demo..!!
            </h1>
            <input
                type="text"
                onChange={this.props.handleTextChange} />
            <button onClick={() => this.props.handleButtonClick(this.props.currentValue)}> Hit me Brother..!!</button>
            <h3>{this.props.currentValue}</h3>
            <hr/>
            <h2>
                <li>{            
                    this.props.valueCollector.map(values=>{
                        return <ul>{values}</ul>
                    })}
                </li>
            </h2>
        </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        currentValue: state.reducerTextChange.currentValue,
        valueCollector: state.reducerButtonClick.valueCollector
    }
}
export default connect(mapStateToProps, { handleButtonClick, handleTextChange })(ReactRedux);