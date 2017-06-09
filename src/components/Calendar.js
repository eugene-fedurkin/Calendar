import React, { Component } from 'react';
import DayOfTheWeek from './DayOfTheWeek';
import Numbers from './Numbers';
import CurrentDate from './CurrentDate';

import { BrowserRouter, Route, } from 'react-router-dom';



class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {currentDate: new Date().getMonth()};
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

    render () {
        console.log('STATE(MONTH)',this.month[this.state.currentDate - 1])
        return (
            <div id="calendar">
                <CurrentDate prevClick={this.prevClick} nextClick={this.nextClick} currentMonth={this.state.currentDate} listMonths={this.month} />
                <DayOfTheWeek />
                <Numbers currentMonth={this.state.currentDate} currentNameMonth={this.month[this.state.currentDate]} prevNameMonth={this.month[this.state.currentDate - 1]} nextNameMonth={this.month[this.state.currentDate + 1]} />
            </div>
        );
    }
}

export default Calendar;