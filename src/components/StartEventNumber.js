import React, { Component } from 'react';

import Input from './Input';

class StartEventNumber extends Component {
    componentDidMount() {
        document.getElementById('startEventNumber').value = this.props.number
    }
    handlerNumber = (e) => {
        const NumbersInMonth = new Date(new Date().getFullYear(),this.props.currentMonth + 1 ,0).getDate();
        
        if (e.target.value <= NumbersInMonth && e.target.value >= 1 && e.target.value.length <= 2) {
            console.log( new Date(new Date().getFullYear(),this.props.currentMonth + 1 ,0).getDate())
            e.target.style.background = '#81C784';
            e.target.style.color = 'white'
        } else {
            e.target.style.background = '#E53935';
            e.target.style.color = 'white'
        }
    }
    getNumber = (e) => {
        this.props.startNumber(e.target.value);
    }
    render() {
        return(
            <div className="dub">
                <div className="secondaryInput  dateInformation noteForTime">
                    Start event(number):
                </div>
                <input onChange={this.getNumber} onBlur={this.handlerNumber} id="startEventNumber" className="secondaryInput dateInformation" type="text" placeholder="Day of the month" />
                <Input month={this.props.month} startMonth={this.props.startMonth} />
            </div>
        )
    }
}
export default StartEventNumber;