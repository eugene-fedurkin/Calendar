import React, { Component } from 'react';

class StartEventInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: props.hour,
            minutes: props.minutes
        }
        this.validity = {
            startHour: null,
            startMinutes: null
        }
    }
    handlerHour = (e) => {
        let type = parseInt(+e.target.value);
        if (type < 12 && type >= 0 && (+e.target.value ^ 0) === +e.target.value) {
            e.target.style.background = '#71B095';
            e.target.style.color = 'white';
            this.validity.startHour = 'valid';
        } else {
            e.target.style.background = '#D13F33';
            e.target.style.color = 'white';
            this.validity.startHour = 'not valid';
        }
        this.props.checkValidity(this.validity);
    }
    handlerMinutes = (e) => {
        let type = parseInt(+e.target.value);
        if (type < 60 && type >= '00' && e.target.value.length <= 2 && e.target.value.length > 0) {
            e.target.style.background = '#71B095';
            e.target.style.color = 'white';
            this.validity.startMinutes = 'valid';
        } else {
            e.target.style.background = '#D13F33';
            e.target.style.color = 'white';
            this.validity.startMinutes = 'not valid';
        }
        this.props.checkValidity(this.validity);
    }
    getHour = (e) => {
        this.setState({ hour: e.target.value })
        this.props.startHour(e.target.value);
    }
    getMinutes = (e) => {
        this.setState({ minutes: e.target.value })
        this.props.startMinutes(e.target.value);
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
                <input onChange={this.getHour} onBlur={this.handlerHour} id="hour" className="secondaryInput  dateInformation" type="text" placeholder="Hour" value={this.state.hour} /> : <input onChange={this.getMinutes} onBlur={this.handlerMinutes} id="minutes" className="secondaryInput  dateInformation" type="text" placeholder="minutes" value={this.state.minutes} />
                <select onChange={this.getFormat} className="secondaryInput format dateInformation" name="format">
                    <option value="am">{new Date().getHours() > 12 ? 'pm' : 'am'}</option>
                    <option value="pm">{new Date().getHours() > 12 ? 'am' : 'pm'}</option>
                </select>
            </div>
        )
    }
}

export default StartEventInput;