import React, { Component } from 'react';
import DayOfTheWeek from './DayOfTheWeek';
import Numbers from './Numbers';
import CurrentDate from './CurrentDate';

import { BrowserRouter, Route, } from 'react-router-dom';


class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date().getMonth(),
            storeEvents: [] //-- mb not in state
        };
        this.month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }

    prevClick = () => {
        if (this.state.currentDate) {
            this.setState(currentMonth => ({
                currentDate: currentMonth.currentDate - 1
            }));
        }
    }
    nextClick = () => {
        console.log('work')
        if (this.state.currentDate < 11) {
            this.setState(currentMonth => ({
                currentDate: currentMonth.currentDate + 1
            }));
        }
    }

    putStoreEvents = (nameEvent, startNumber, startMonth, endNumber, endMonth, startHour, startMinutes, startFormat, endHour, endMinutes, endFormat, location, discription) => {
        let newState = this.state.storeEvents.slice();
        newState.push({
            'nameEvent': nameEvent,
            'startNumber': startNumber,
            'startMonth': startMonth,
            'endNumber': endNumber,
            'endMonth': endMonth,
            'startHour': startHour,
            'startMinutes': startMinutes,
            'startFormat': startFormat,
            'endHour': endHour,
            'endMinutes': endMinutes,
            'endFormat': endFormat,
            'location': location,
            'discription': discription
        });
        this.setState({storeEvents: newState});
        console.log('this.state.storeEvent', this.state.storeEvents.slice());
    }

    render() {
        return (
            <div id="calendar">
                <CurrentDate prevClick={this.prevClick} nextClick={this.nextClick} currentMonth={this.state.currentDate} listMonths={this.month} />
                <DayOfTheWeek />
                <Numbers storeEvents={this.state.storeEvents} putStoreEvent={this.putStoreEvents} currentMonth={this.state.currentDate} currentNameMonth={this.month[this.state.currentDate]} prevNameMonth={this.month[this.state.currentDate - 1]} nextNameMonth={this.month[this.state.currentDate + 1]} />
            </div>
        );
    }
}

export default Calendar;