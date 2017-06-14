import React, { Component } from 'react';

class StartEventInput extends Component {
    handlerHour = (e) => {
        let type = parseInt(+e.target.value)
        if (type < 13 && type > 0) {
            e.target.style.background = '#81C784';
            //#81C784
        } else {
            e.target.style.background = '#E53935';
            e.target.style.color = 'white'
        }
    }
    handlerMinutes = (e) => {
        let type = parseInt(+e.target.value)
        if (type < 60 && type >= '00' && e.target.value.length <= 2 && e.target.value.length > 0) {
            e.target.style.background = '#81C784';
        } else {
            e.target.style.background = '#E53935';
            e.target.style.color = 'white';
        }
    }
    getHour = (e) => {
        this.props.startHour(e.target.value);
    }
    getMinutes = (e) => {
        this.props.startMinutes(e.target.value)
    }
    getFormat = (e) => {
        this.props.startFormat(e.target.value);
    }
    render() {
        return (
            <div className="dub">
                <div className="secondaryInput  dateInformation noteForTime">
                    Start event(time):
                </div>
                <input onChange={this.getHour} onBlur={this.handlerHour} id="hour" className="secondaryInput  dateInformation" type="text" placeholder="Hour" /> : <input onChange={this.getMinutes} onBlur={this.handlerMinutes} id="minutes" className="secondaryInput  dateInformation" type="text" placeholder="minutes" />
                <select onChange={this.getFormat} className="secondaryInput format dateInformation" name="format">
                    <option value="a.m">a.m</option>
                    <option value="p.m">p.m</option>
                </select>
            </div>
        )
    }
}

export default StartEventInput;