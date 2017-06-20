import React, { Component } from 'react';

import Input from './Input'
class EndEventNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.number,
            month: props.month
        };
        this.valid = null;
    }

    componentDidMount() {
        document.getElementById('endEventNumber').value = this.props.number
    }
    handlerNumber = (e) => {
        const NumbersInMonth = new Date(new Date().getFullYear(),this.props.currentMonth + 1 ,0).getDate();
        if (e.target.value <= NumbersInMonth && e.target.value >= 1 && e.target.value.length <= 2) {
            e.target.style.background = '#71B095';
            e.target.style.color = 'white';
            this.valid = 'valid';
        } else {
            e.target.style.background = '#D13F33';
            e.target.style.color = 'white';
            this.valid = 'not valid';
        }
    }
    getNumber = (e) => {
        this.setState({ number: e.target.value });
        this.props.endNumber(e.target.value);
        this.props.checkValidity(this.valid);
    }
    render() {
        return(
            <div className="dub">
                <div className="secondaryInput  dateInformation noteForTime">End event(number): </div>
                <input onChange={this.getNumber} onBlur={this.handlerNumber} id="endEventNumber" className="secondaryInput dateInformation" type="text" placeholder="Day of the month" value={this.state.number} />
                <Input endMonth={this.props.endMonth} month={this.props.month} />
            </div>
        )
    }
}
export default EndEventNumber;