import React, { Component } from 'react';

import StartEventInput from './StartEventInput';
import EndEventInput from './EndEventInput';
import EndEventNumber from './EndEventNumber';
import Input from './Input';
import StartEventNumber from './StartEventNumber'
class Event extends Component {
    constructor() {
        super();
        this.nameEvent = null;
        this.endDay = null;
        this.startTime = null;
        this.endTime = null;
        this.location = null;
        this.discription = null;
    }
    changeNameEvent = (e) => {
        this.nameEvent = e.target.value;
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
        const hour = document.getElementById('hour');
        const minutes = document.getElementById('minutes');
        const hourEnd = document.getElementById('hourEnd');
        const minutesEnd = document.getElementById('minutesEnd');
        const startEventNumber = document.getElementById('startEventNumber');
        const endEventNumber = document.getElementById('endEventNumber');
        const nameEvent = document.getElementById('nameEvent');
        const countRows = document.getElementsByClassName('indent');
        console.log(document.getElementsByClassName('datesClass')[0].children[0].innerHTML)
        if (hour.style.background === 'rgb(129, 199, 132)'
            && minutes.style.background === 'rgb(129, 199, 132)'
            && hourEnd.style.background === 'rgb(129, 199, 132)'
            && minutesEnd.style.background === 'rgb(129, 199, 132)'
            && startEventNumber.style.background === 'rgb(129, 199, 132)'
            && endEventNumber.style.background === 'rgb(129, 199, 132)'
            && this.nameEvent.length > 0) {
                console.log(this.props.currentMonth)
                for(let i = 0; i < countRows.length; i++) {
                    for (let j = 0; j < 6; j++) {
                        if (document.getElementsByClassName('datesClass')[(i * 7) + j].children[0].innerHTML == document.getElementById('startEventNumber').value) {
                            console.log('added');
                            const div = document.createElement('div');
                            div.innerHTML = document.getElementById('nameEvent').value;
                            div.className = 'events';
                            let countChilds = document.getElementsByClassName('datesClass')[(i * 7) + j].children.length;
                            document.getElementsByClassName('datesClass')[(i * 7) + j].appendChild(div);
                            document.getElementsByClassName('datesClass')[(i * 7) + j].lastChild.style.top = 26 * (countChilds - 1) + 'px';
                            return;
                        }
                    }
                }
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
                    <StartEventNumber currentMonth={this.props.currentMonth} number={this.props.number} />
                    <EndEventNumber currentMonth={this.props.currentMonth} number={this.props.number} />
                </div>
                <div className="containerSecondaryInput">
                    <div>
                        <StartEventInput timeStart={this.timeStart} />
                        <EndEventInput currentMonth={this.props.currentMonth} />
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