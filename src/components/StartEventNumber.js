import React, { Component } from 'react';

import Input from './Input';

class StartEventNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.number,
            month: props.month
        };
        this.validity = {startNumber: null};
    }

    handlerNumber = (e) => {
        this.setState({number: e.target.value});
        const NumbersInMonth = new Date(new Date().getFullYear(),this.props.currentMonth + 1 ,0).getDate();
        if (e.target.value <= NumbersInMonth && e.target.value >= 1 && e.target.value.length <= 2) {
            e.target.style.background = '#71B095';
            e.target.style.color = 'white';
            this.validity.startNumber = 'valid';
        } else {
            e.target.style.background = '#D13F33';
            e.target.style.color = 'white'
            this.validity.startNumber = 'not valid';
        }
        this.props.checkValidity(this.validity);
    }
    getNumber = (e) => {
        this.setState({ number: e.target.value });
        this.props.startNumber(e.target.value);
    }

    render() {
        return(
            <div className="dub">
                <div className="secondaryInput  dateInformation noteForTime">
                    Start event(number):
                </div>
                <input onChange={this.getNumber} onBlur={this.handlerNumber} id="startEventNumber" className="secondaryInput dateInformation" type="text" placeholder="Day of the month" value={this.state.number}/>
                <Input month={this.state.month} startMonth={this.props.startMonth} />
            </div>
        )
    }
}
export default StartEventNumber;