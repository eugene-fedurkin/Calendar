import React, { Component } from 'react';

class Numbers extends Component {
    constructor(props) {
        super(props);
        this.state = {countDaysInMonth: new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()} // del +1
        this.arrDaysInMonth = [];
        this.firstDayInCurrentMonth = this.firstDayInCurrentMonth();

    }
    daysInMonth() {
        for (let i = 1; i <= this.state.countDaysInMonth; i++) {
            this.arrDaysInMonth.push(i);
        }
    }
    firstDayInCurrentMonth() {
        let firstDay = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1); // add - 1
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return {day: days[firstDay.getDay()],
                index: days.indexOf(days[firstDay.getDay()])};
    }
    firstNumberOnCalendar() {
        if (this.firstDayInCurrentMonth.day !== 'Sunday') {
            let daysInLastMonth = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 0).getDate(); // add - 1
            let arrRestDaysLastMonth = [];
            for (let i = daysInLastMonth - this.firstDayInCurrentMonth.index + 1; i <= daysInLastMonth; i++) {
                arrRestDaysLastMonth.push(i);
            }
            this.arrDaysInMonth.unshift(...arrRestDaysLastMonth);
        }
    }
    restNumberNextMonth() {
        if (this.arrDaysInMonth.length % 7 !== 0) {
            let countRestDay = 7 - this.arrDaysInMonth.length % 7;
            let arrRestDay = [];
            for (let i = 1; i <= countRestDay; i++) {
                arrRestDay.push(i);
            }
            this.arrDaysInMonth.push(...arrRestDay);
        }
    }

    render() {
        console.log('###',this.arrDaysInMonth);
        console.log(this.firstDayInCurrentMonth);
        this.daysInMonth();
        this.firstNumberOnCalendar();
        this.restNumberNextMonth();
        console.log(this.arrDaysInMonth)
        console.log('###',this.arrDaysInMonth);
        const dayItem = this.arrDaysInMonth.map((day, index) =>
            <div key={index} id="dates">
                {day}
            </div>
        );
        return (
            <div>
                {dayItem}
            </div>
        )
    }
}

export default Numbers; 