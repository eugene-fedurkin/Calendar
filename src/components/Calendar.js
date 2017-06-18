import React, { Component } from 'react';
import Days from './Days';
import Month from './Month';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonth: new Date().getMonth(),
            storeEvents: [] //-- mb not in state
        };
        this.month = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
    }

    prevClick = () => {
        if (this.state.currentMonth) {
            this.setState({ currentMonth: this.state.currentMonth - 1 });
        }
    }
    nextClick = () => {
        if (this.state.currentMonth < 11) {
            this.setState({ currentMonth: this.state.currentMonth + 1 });
        }
    }

    addEvent = event => {
        let newState = this.state.storeEvents.slice();
        newState.push(event);
        this.setState({storeEvents: newState});
    }

    render() {
        return (
            <div id="calendar">
                <Month onPrev={this.prevClick} onNext={this.nextClick}
                    currentMonth={this.state.currentMonth} listMonths={this.month} />
                <Days storeEvents={this.state.storeEvents} addEvent={this.addEvent}
                    currentMonth={this.state.currentMonth} currentNameMonth={this.month[this.state.currentMonth]}
                    prevNameMonth={this.month[this.state.currentMonth - 1]}
                    nextNameMonth={this.month[this.state.currentMonth + 1]} />
            </div>
        );
    }
}

export default Calendar;