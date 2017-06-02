import React, { Component } from 'react';
import Days from './Days';
import Numbers from './Numbers';
import CurrentDate from './CurrentDate'


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
        console.log('STATE(MONTH)',this.state.currentDate)
        return (
            <div id="calendar">
                <CurrentDate prevClick={this.prevClick} nextClick={this.nextClick} currentMonth={this.state.currentDate} listMonths={this.month} />
                <Days />
                <Numbers currentMonth={this.state.currentDate}/>
            </div>
        );
    }
}
/*function Month() {
    this.date = new Date(month, year);
    this.numberOfDays = this.date.getDate();
    this.nameOfMonth;
    this.firstDay;
    this.calendar;
}
function Date2Day(year, month, day) {
    return (new Date(year, month, day).getDay());
}
function generationCalendar(numberOfDays, month, day, year, dates = {}) {
    let weekDay = MonthNames[Date2Day(year, month, day, year)];
    if(weekDay in dates) {
        dates[weekDay].push(day);
    } else {
        dates[weekDay] = [day]
    }
    day++;
    return day > numberOfDays ? dates : generationCalendar(numberOfDays, month, day, year)
}*/


export default Calendar;