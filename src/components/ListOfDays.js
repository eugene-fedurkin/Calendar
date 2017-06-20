import React, { Component } from 'react';

import Day from './Day';

import Modal from 'react-modal';
import FontAwesome from 'react-fontawesome';


class ListOfDays extends Component {
    constructor(props) {
        super(props);
        this.dayOfModal = null;
        this.monthOfModal = null;
        this.hourStart = null;
        this.minutesStart = null;
        this.state = {
            isActive: false,
            store: []
        }
    }
        componentWillMount() {
        Modal.setAppElement('body');
    }
        toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        });
    }
    _handlers = (e) => {
        if (+e.currentTarget.firstChild.innerText > 22 && e.target.parentElement === e.target.parentElement.parentElement.children[1]) {
            this.monthOfModal = this.props.prevNameMonth;
        } else if (+e.currentTarget.firstChild.innerText < 7 && e.target.parentElement === e.target.parentElement.parentElement.lastChild) {
            this.monthOfModal = this.props.nextNameMonth
        } else {
            this.monthOfModal = this.props.currentNameMonth
        }
        this.dayOfModal = e.currentTarget.children[0].innerText;
        this.toggleModal();
    }

    render() {
        const props = {
            number: this.props.number,
            month: this.props.currentNameMonth,
            rest: this.props.rest,
            monthNumber: this.monthOfModal
        }
        let events = this.props.getRequestEvent(props);
        let event;
        if (events.lastEvent && this.props.rest === 'prevDays') {
            event = events.lastEvent.map((event, index) => 
                        <div key={index} className ="events">
                            {event.nameEvent}
                        </div>
                    )
        } else if (events.nextEvent && events.nextEvent && this.props.rest === 'nextDays') {
            event = events.nextEvent.map((event, index) => 
                        <div key={index} className ="events">
                            {event.nameEvent}
                        </div>
                    )
        } else if (events.event && this.props.rest === 'days') {
             event = events.event.map((event, index) => 
                        <div key={index} className ="events">
                            {event.nameEvent}
                        </div>
                    )
        }

        return(
            <div onClick={this._handlers} id="dates" className={'datesClass' + (this.props.active ? ' active' : '') }>
                <div className="numbers">{this.props.number}</div>
                {event}
                <Modal className="modalDay" isOpen={this.state.isActive} onRequestClose={this.toggleModal} contentLabel="Modal">
                  
                <FontAwesome onClick={this.toggleModal}
                    name="times"
                    className="close"
                    />
                        <Day storeEvents={this.props.storeEvents} addEvent={this.props.addEvent} number={this.dayOfModal} currentMonth={this.props.currentMonth} month={this.monthOfModal} rest={this.props.rest} />
                    </Modal>
            </div>
        )
    }
}

export default ListOfDays;