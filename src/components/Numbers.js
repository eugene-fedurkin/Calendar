import React, { Component } from 'react';

import Day from './Day';

import { Link } from 'react-router-dom';
import Modal from 'react-modal';
class Numbers extends Component {
    constructor(props) {
        super(props);
        this.arrRestDaysInLastMonth = [];
        this.arrDaysInMonth = [];
        this.arrFirstDaysInNextMonth = [];
        this.date =  new Date(new Date().getFullYear(), this.props.currentMonth, 1);
        this.state = {
            countDaysInMonth: new Date(new Date().getFullYear(), this.props.currentMonth + 1, 0).getDate(),
            indexFirstDayInCurrentMonth: this.date.getDay(),
            isActive: false
        };
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }
    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        })
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
        console.log('########',(this.arrDaysInMonth.length + this.arrRestDaysInLastMonth.length))
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
        console.log('#################componentWillMount#########################')
        console.log(this.props.currentMonth)
        this.setState(currentMonth => ({
            countDaysInMonth: new Date(new Date().getFullYear(), newProps.currentMonth + 1, 0).getDate(),
            indexFirstDayInCurrentMonth: this.date.getDay()
        }));
    }
    getRows() {
        const allDayinCurrentMonth = this.arrRestDaysInLastMonth.concat(this.arrDaysInMonth).concat(this.arrFirstDaysInNextMonth);
        var rows = [];
        let row = [];
        for (var i = 1; i <= allDayinCurrentMonth.length; i++) {
            row.push(<div key={i} onClick={this.toggleModal} className="days">{allDayinCurrentMonth[i - 1]}</div>);
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
                {rows}
                <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal} contentLabel="Modal">
                        <Day />
                    </Modal>
            </div>
        )
    }
}

export default Numbers; 