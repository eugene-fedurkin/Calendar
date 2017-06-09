import React, { Component } from 'react';

import StartEventInput from './StartEventInput';
import EndEventInput from './EndEventInput';
import StartDayInput from './StartDayInput';
import EndDayInput from './EndDayInput';
import Input from './Input';
class Event extends Component {
    constructor() {
        super();
        this.nameEvent = null;
        this.startDay = null;
        this.endDay = null;
        this.startTime = null;
        this.endTime = null;
        this.location = null;
        this.discription = null;
    }
    changeNameEvent = (e) => {
        this.nameEvent = e.target.value;
        console.log(this.nameEvent)
    }
    changeStartDay = (e) => {
        this.startDay = e.target.value;
    }
    changeEndDay = (e) => {
        this.endDay = e.target.value;
        
    }
    changeStartTime = (e) => {
        this.startTime = e.target.value;
        
    }
    changeEndTime = (e) => {
        this.endTime = e.target.value;
        
    }
    changeLocation = (e) => {
        this.location = e.target.value;
        
    }
    changeDiscription = (e) => {
        this.discription = e.target.value;
        
    }
    unfocusedDay = (e) => {
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let index = days.indexOf(e.target.value);
        if (index === -1) {
            document.getElementById('errorStartTime').innerText = 'Invalid value';
            console.log('here')
        }
    }
    handler = () => {
        const hour = document.getElementById('hour').style.background;
        const minutes = document.getElementById('minutes').style.background;
        const hourEnd = document.getElementById('hourEnd').style.background;
        const minutesEnd = document.getElementById('minutesEnd').style.background;
        const nameEvent = document.getElementById('nameEvent');
        if (hour === 'rgb(129, 199, 132)' && minutes === 'rgb(129, 199, 132)' && hourEnd === 'rgb(129, 199, 132)' && minutesEnd === 'rgb(129, 199, 132)' && this.nameEvent.length > 0) {
            console.log(document.getElementsByClassName('datesClass'))
        }
    }
    render() {
        return (
            <div onMouseUp={this.cancelSetInterval} className="containerMainInput">
                <div className="containerMainInput">
                    <input onChange={this.changeNameEvent} className="mainInput" id="nameEvent" placeholder="Name event" />
                </div>
                <div className="containerSecondaryInput">
                    <StartDayInput />
                    <EndDayInput />
                </div>
                <div className="containerSecondaryInput">
                    <div>
                        <StartEventInput timeStart={this.timeStart} />
                        <EndEventInput />
                    </div>
                </div>
                <div className="middleContainer">
                    <input onChange={this.changeLocation} className="locationClass" placeholder="Location" />
                    <textarea onChange={this.changeDiscription} className="discriptionEvent" placeholder="Discription"/>
                </div>
                <div className="containerForButton">
                    <input onClick={this.handler} className="button" type="button" value="Add event" />
                </div>

            </div>
        )
    }
}

export default Event;