import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DayOfTheWeek from './DayOfTheWeek';
import ListOfDays from './ListOfDays';

class Days extends Component {
    constructor(props) {
        super(props);
        this.arrRestDaysInLastMonth = [];
        this.arrDaysInMonth = [];
        this.arrFirstDaysInNextMonth = [];
        this.date =  new Date(new Date().getFullYear(), this.props.currentMonth, 1);
        this.state = {
            countDaysInMonth: new Date(new Date().getFullYear(), this.props.currentMonth + 1, 0).getDate(),
            indexFirstDayInCurrentMonth: this.date.getDay()
        };
    }


    daysInMonth() {
        for (let i = 1; i <= this.state.countDaysInMonth; i++) {
            this.arrDaysInMonth.push(i);
        }
    }
    firstNumberOnCalendar() {
        if (this.state.indexFirstDayInCurrentMonth !== 0) {
            let daysInLastMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();
            for (let i = daysInLastMonth - this.state.indexFirstDayInCurrentMonth + 1; i <= daysInLastMonth; i++) {
                this.arrRestDaysInLastMonth.push(i);
            }
        }
    }
    restNumberNextMonth() {
        if ((this.arrDaysInMonth.length + this.arrRestDaysInLastMonth.length) % 7 !== 0) {
            let countRestDay = 7 - (this.arrDaysInMonth.length + this.arrRestDaysInLastMonth.length) % 7;
            for (let i = 1; i <= countRestDay; i++) {
                this.arrFirstDaysInNextMonth.push(i);
            }
        }
    }
    changeMonth() {
        this.arrRestDaysInLastMonth = [];
        this.arrDaysInMonth = [];
        this.arrFirstDaysInNextMonth = [];
    }
    componentWillReceiveProps(newProps) {
        this.date =  new Date(new Date().getFullYear(), newProps.currentMonth, 1);
        this.setState(currentMonth => ({
            countDaysInMonth: new Date(new Date().getFullYear(), newProps.currentMonth + 1, 0).getDate(),
            indexFirstDayInCurrentMonth: this.date.getDay()
        }));
    }
    getRows() {
        const allDayinCurrentMonth = this.arrRestDaysInLastMonth
            .concat(this.arrDaysInMonth)
            .concat(this.arrFirstDaysInNextMonth);

        let rows = [];
        let row = [];
        for (let i = 1; i <= allDayinCurrentMonth.length; i++) {
            let currentMonthDay = i > this.arrRestDaysInLastMonth.length && i <= (this.arrRestDaysInLastMonth.length + this.arrDaysInMonth.length);
            row.push(
            <ListOfDays key={i} storeEvents={this.props.storeEvents} addEvent={this.props.addEvent} currentMonth={this.props.currentMonth} number={allDayinCurrentMonth[i - 1]} currentNameMonth={this.props.currentNameMonth} prevNameMonth={this.props.prevNameMonth} nextNameMonth={this.props.nextNameMonth}
                active={currentMonthDay}>
            </ListOfDays>
            );
            if (i > 1 && i % 7 === 0) {
                rows.push(<div className='indent' key={'r' + i}>{row}</div>);
                row = [];
            }
        }
        return rows;
    }
    render() {
        this.changeMonth();
        this.daysInMonth();
        this.firstNumberOnCalendar();
        this.restNumberNextMonth();
        let rows = this.getRows();
        return (
            <div>
                <DayOfTheWeek />
                {rows}
            </div>
        )
    }
}

export default Days; 