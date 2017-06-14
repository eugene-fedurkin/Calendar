import React, { Component } from 'react';

import StartEventInput from './StartEventInput';
import EndEventInput from './EndEventInput';
import EndEventNumber from './EndEventNumber';
import StartEventNumber from './StartEventNumber'
class Event extends Component {
    constructor() {
        super();
        this.nameEvent = null;
        this.startNumber = null;
        this.startMonth = null;
        this.endNumber = null;
        this.endMonth = null;
        this.startHour = null;
        this.startMinutes = null;
        this.startFormat = null;
        this.endHour = null;
        this.endMinutes = null;
        this.endFormat = null;
        this.location = null;
        this.discription = null;
        //this.store = [];
    }
    changeNameEvent = (e) => {
        this.nameEvent = e.target.value;
        console.log(this.nameEvent)
    }
    changeStartNumber = (value) => {
        this.startNumber = value;
        console.log(this.startNumber)
    }

    changeStartMonth = (value) => {
        this.startMonth = value;
        console.log(this.startMonth)
    }
    changeEndNumber = (value) => {
        this.endNumber = value;
        console.log(this.endNumber)
    }
    changeEndMonth = (value) => {
        this.endMonth = value;
        console.log(this.endMonth)
    }
    

    changeStartHour = (value) => {
        this.startHour = value;
        console.log(this.startHour)
        
    }
    changeStartMinutes = (value) => {
        this.startMinutes = value;
        console.log(this.startMinutes);
    }
    changeStartFormat = (value) => {
        this.startFormat = value;
        console.log(this.startFormat)
    }
    changeEndHour = (value) => {
        this.endHour = value;
        console.log(this.endHour)
    }
    changeEndMinutes = (value) => {
        this.endMinutes = value;
        console.log(this.endMinutes)
    }
    changeEndFormat = (value) => {
        this.endFormat = value;
        console.log(this.endFormat)
    }
    changeEndFormat = (value) => {
        this.endFormat = value;
        console.log(this.endFormat)
    }
    changeLocation = (e) => {
        this.location = e.target.value;
        console.log(this.location)
        
    }
    changeDiscription = (e) => {
        this.discription = e.target.value;
        console.log(this.discription)
        
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
        this.props.putStoreEvent(this.nameEvent, this.startNumber, this.startMonth, this.endNumber, this.endMonth, this.startHour, this.startMinutes, this.startFormat, this.endHour, this.endMinutes, this.endFormat, this.location, this.discription);
        /*const hour = document.getElementById('hour');
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
            && nameEvent.value.length > 0) {
                console.log(this.props.currentMonth)
                for (let i = 0; i < countRows.length; i++) {
                    for (let j = 0; j < 6; j++) {
                        if (document.getElementsByClassName('datesClass')[(i * 7) + j].children[0].innerHTML == document.getElementById('startEventNumber').value) {
                            console.log('added');
                            const div = document.createElement('div');
                            div.innerHTML = document.getElementById('nameEvent').value;
                            div.className = 'events';
                            let countChilds = document.getElementsByClassName('datesClass')[(i * 7) + j].children.length;
                            
                            this.store.push(document.getElementById('nameEvent').value);
                            this.props.storeEvent(this.store, document.getElementsByClassName('datesClass')[(i * 7) + j].children[0].innerHTML);

                            /*document.getElementsByClassName('datesClass')[(i * 7) + j].appendChild(div);**
                            document.getElementsByClassName('datesClass')[(i * 7) + j].lastChild.style.top = 26 * (countChilds - 1) + 'px';
                            return;
                        }
                    }
                }
                console.log(document.getElementsByClassName('datesClass'))
        }*/
    }
    render() {
        return (
            <div onMouseUp={this.cancelSetInterval} className="containerMainInput">
                <div className="containerMainInput">
                    <input onChange={this.changeNameEvent} className="mainInput" id="nameEvent" placeholder="Name event" />
                </div>
                <div className="containerSecondaryInput">
                    <StartEventNumber startNumber={this.changeStartNumber} startMonth={this.changeStartMonth} currentMonth={this.props.currentMonth} number={this.props.number} />
                    <EndEventNumber endNumber={this.changeEndNumber} endMonth={this.changeEndMonth} currentMonth={this.props.currentMonth} number={this.props.number} />
                </div>
                <div className="containerSecondaryInput">
                    <div>
                        <StartEventInput startHour={this.changeStartHour} startMinutes={this.changeStartMinutes} startFormat={this.changeStartFormat} />
                        <EndEventInput endHour={this.changeEndHour} endMinutes={this.changeEndMinutes} endFormat={this.changeEndFormat} />
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