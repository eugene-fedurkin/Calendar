import React, { Component } from 'react';
import Days from './Days';
import Numbers from './Numbers';
import CurrentDate from './CurrentDate'


class Calendar extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            countDaysInMonth: new Date(new Date().getFullYear(), new Date().getMonth()+1, 0).getDate()
        }*/
    }
    render () {
        return (
            <div id="calendar">
                <CurrentDate />
                <Days />
                <Numbers />
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