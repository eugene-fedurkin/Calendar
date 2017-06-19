import React, { Component } from 'react';

import StartEventInput from './StartEventInput';
import EndEventInput from './EndEventInput';
import EndEventNumber from './EndEventNumber';
import StartEventNumber from './StartEventNumber';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameEvent: '',
            startNumber: props.number,
            startMonth: props.month,
            endNumber: props.number,
            endMonth: props.month,
            startHour: new Date().getHours(),
            startMinutes: '00',
            startFormat: new Date().getHours() > 12 ? 'pm' : 'am',
            endHour: null,
            endMinutes: null,
            endFormat: null,
            location: null,
            discription: null,
            rest: this.props.rest // request?
        };
    }

    changeNameEvent = e => {
        this.setState({ nameEvent: e.target.value });
    }

    changeStartNumber = value => {
        this.setState({ startNumber: value });
    }

    changeStartMonth = value => {
        this.setState({ startMonth: value });
    }

    changeEndNumber = value => {
        this.setState({ endNumber: value });
    }

    changeEndMonth = value => {
        this.setState({ endMonth: value });
    }

    changeStartHour = value => {
        this.setState({ startHour: value });
    }

    changeStartMinutes = value => {
        this.setState({ startMinutes: value });
    }

    changeStartFormat = value => {
        this.setState({ startFormat: value });
    }

    changeEndHour = value => {
        this.setState({ endHour: value });
    }

    changeEndMinutes = value => {
        this.setState({ endMinutes: value });
    }

    changeEndFormat = value => {
        this.setState({ endFormat: value });
    }

    changeEndFormat = value => {
        this.setState({ endFormat: value });
    }

    changeLocation = e => {
        this.setState({ location: e.target.value });
    }

    changeDiscription = e => {
        this.setState({ discription: e.target.value });
    }

    create = () => {
        console.log('create')
        this.props.addEvent(this.state);
    }

    render() {
        console.log(this.state)
        return (
            <div className="containerMainInput">
                <div className="containerMainInput">
                    <input onChange={this.changeNameEvent} className="mainInput" id="nameEvent" placeholder="Name event" value={this.state.nameEvent} />
                </div>
                <div className="containerSecondaryInput">
                    <StartEventNumber startNumber={this.changeStartNumber} startMonth={this.changeStartMonth}
                        currentMonth={this.props.currentMonth}
                        number={this.state.startNumber}
                        month={this.state.startMonth} />
                    <EndEventNumber endNumber={this.changeEndNumber}
                        endMonth={this.changeEndMonth}
                        currentMonth={this.props.currentMonth}
                        number={this.state.endNumber}
                        month={this.state.endMonth} />
                </div>
                <div className="containerSecondaryInput">
                    <div>
                        <StartEventInput startHour={this.changeStartHour} startMinutes={this.changeStartMinutes} startFormat={this.changeStartFormat} hour={this.state.startHour} minutes={this.state.startMinutes} />
                        <EndEventInput endHour={this.changeEndHour} endMinutes={this.changeEndMinutes} endFormat={this.changeEndFormat} />
                    </div>
                </div>
                <div className="middleContainer">
                    <input onChange={this.changeLocation} className="locationClass" placeholder="Location" />
                    <textarea onChange={this.changeDiscription} className="discriptionEvent" placeholder="Discription"/>
                </div>
                <div className="containerForButton">
                    <input onClick={this.create} className="button" type="button" value="Add event" />
                </div>

            </div>
        )
    }
}

export default Event;