import React, { Component } from 'react';

import Day from './Day';

import Modal from 'react-modal';

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
        if (e.currentTarget.textContent > 22 && e.target.parentElement === e.target.parentElement.parentElement.firstChild) {
            this.monthOfModal = this.props.prevNameMonth;
        } else if (e.currentTarget.textContent < 7 && e.target.parentElement === e.target.parentElement.parentElement.lastChild) {
            this.monthOfModal = this.props.nextNameMonth
        } else {
            this.monthOfModal = this.props.currentNameMonth
        }
        this.dayOfModal = e.currentTarget.children[0].innerText;
        this.toggleModal();
    }
    /*storeEvents = (value, number) => {
        console.log('value', value, 'number', number)
        let CopyStore = this.state.store.slice();
        console.log('CopyStore', CopyStore)
        CopyStore = CopyStore.concat(value);
        console.log('CopyStore', CopyStore);
        this.setState({ store: CopyStore }, console.log('this.state.store', this.state.store))
        
        if (number == this.props.number) {
            let events = this.state.store.slice();
            this.event = events.map((event, len) =>
                <div className="events" key={len}>
                    {event}
                </div>
            )
        }
        console.log('this.event', this.event)
    }*/
    /*storeEvents = (nameEvent) => {
        console.log('nameEvent', nameEvent);
        let newState = this.state.store.slice();
        newState.push(nameEvent);
        this.setState({store: newState});
        console.log('this.state.store', this.state.store);

    }*/
    render() {
        let events = this.props.storeEvents.slice();
        let result = [];
        for (let event of events) {
            if (event['startNumber'] == this.props.number && event['startMonth'] == this.props.currentNameMonth) {
                result.push([event['nameEvent']]);
                /*this.hourStart = event['startHour'];// -- mb dont request
                this.minutesStart = event['startMinutes']*/
            }
        } //---need life cycle
        return(
            <div onClick={this._handlers} id="dates" className="datesClass">
                <div className="numbers">{this.props.number}</div>
                {result.map((event, index) => 
                    <div key={index} className ="events">
                        {event}
                    </div>
                )}
                <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal} contentLabel="Modal">
                        <Day storeEvents={this.props.storeEvents} putStoreEvent={this.props.putStoreEvent} number={this.dayOfModal} currentMonth={this.props.currentMonth} month={this.monthOfModal}/>
                    </Modal>
            </div>
        )
    }
}

export default ListOfDays;