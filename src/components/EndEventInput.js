import React, { Component } from 'react';

class EndEventInput extends Component {
    handlerHour = (e) => {
        let type = parseInt(+e.target.value)
        if (type < 12 && type > 0 && (+e.target.value ^ 0) === +e.target.value) {
            document.getElementById('hourEnd').style.background = '#81C784';
        } else {
            document.getElementById('hourEnd').style.background = '#E53935';
            document.getElementById('hourEnd').style.color = 'white'
        }
    }
    handlerMinutes = (e) => {
        let type = parseInt(+e.target.value)
        if (type < 60 && type >= '00' && e.target.value.length <= 2 && e.target.value.length > 0) {
            document.getElementById('minutesEnd').style.background = '#81C784';
        } else {
            document.getElementById('minutesEnd').style.background = '#E53935';
            document.getElementById('minutesEnd').style.color = 'white'
        }
    }
    getHour = (e) => {
        this.props.endHour(e.target.value);
    }
    getMinutes = (e) => {
        this.props.endMinutes(e.target.value);
    }
    getFormat = (e) => {
        this.props.endFormat(e.target.value);
    }
    render() {
        return (
            <div className="dub">
                <div className="secondaryInput  dateInformation noteForTime">End event(time):</div>
                <input onChange={this.getHour} onBlur={this.handlerHour} id="hourEnd"className="secondaryInput dateInformation" type="text" placeholder="Hour"/> : <input onChange={this.getMinutes} onBlur={this.handlerMinutes} id="minutesEnd" className="secondaryInput  dateInformation" type="text" placeholder="minutes"/>
                <select onChange={this.getFormat} className="secondaryInput format dateInformation" name="format">
                    <option value="a.m">{new Date().getHours() > 12 ? 'pm' : 'am'}</option>
                    <option value="p.m">{new Date().getHours() > 12 ? 'am' : 'pm'}</option>
                </select>
            </div>
        )
    }
}

export default EndEventInput;