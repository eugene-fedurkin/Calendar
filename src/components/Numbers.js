import React, { Component } from 'react';

class Numbers extends Component {
    constructor(props) {
        super(props);
        this.arrRestDaysInLastMonth = [];
        this.arrDaysInMonth = [];
        this.arrFirstDaysInNextMonth = [];
       // this.firstDayInCurrentMonth = this.firstDayInCurrentMonth();
        //this.days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
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
            //let arrRestDaysLastMonth = [];
            for (let i = daysInLastMonth - this.state.indexFirstDayInCurrentMonth + 1; i <= daysInLastMonth; i++) {
                this.arrRestDaysInLastMonth.push(i);
            }
            //this.arrDaysInMonth.unshift(...arrRestDaysLastMonth);
        }
    }
    restNumberNextMonth() {
        console.log('########',(this.arrDaysInMonth.length + this.arrRestDaysInLastMonth.length))
        if ((this.arrDaysInMonth.length + this.arrRestDaysInLastMonth.length) % 7 !== 0) {
            let countRestDay = 7 - (this.arrDaysInMonth.length + this.arrRestDaysInLastMonth.length) % 7;
            //let arrRestDay = [];
            for (let i = 1; i <= countRestDay; i++) {
                this.arrFirstDaysInNextMonth.push(i);
            }
            //this.arrDaysInMonth.push(...arrRestDay);
        }
    }
    changeMonth() {
        this.arrRestDaysInLastMonth = [];
        this.arrDaysInMonth = [];
        this.arrFirstDaysInNextMonth = [];
    }
    componentWillReceiveProps(newProps) {
        this.date =  new Date(new Date().getFullYear(), newProps.currentMonth, 1);
        console.log('#################componentWillMount#########################')
        console.log(this.props.currentMonth)
        this.setState(currentMonth => ({
            countDaysInMonth: new Date(new Date().getFullYear(), newProps.currentMonth + 1, 0).getDate(),
            indexFirstDayInCurrentMonth: this.date.getDay()
        }));
    }
    render() {
        this.changeMonth();
        this.daysInMonth();
        this.firstNumberOnCalendar();
        this.restNumberNextMonth();
        console.log(this.arrFirstDaysInNextMonth)
        const daysLastMonthItem = this.arrRestDaysInLastMonth.map((day, index) =>
            <div key={index} id="Lastdates">
                {day}
            </div>
        );
        const dayItem = this.arrDaysInMonth.map((day, index) =>
            <div key={index} id="dates">
                {day}
            </div>
        );
        const daysNextMonthItem = this.arrFirstDaysInNextMonth.map((day, index) =>
            <div key={index} id="Nextdates">
                {day}
            </div>
        );
        return (
            <div>
                <div className="LastDays">
                    {daysLastMonthItem}
                </div>
                {dayItem}
                <div className="NextDays">
                    {daysNextMonthItem}
                </div>
            </div>
        )
    }
}

export default Numbers; 