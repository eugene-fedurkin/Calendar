import React, { Component } from 'react';

import Days from './Days';
import Month from './Month';

import FontAwesome from 'react-fontawesome';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonth: new Date().getMonth(),
            storeEvents: {},
        };
        this.month = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        this.year = new Date().getFullYear();
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
        var copy = Object.assign({},  this.state.storeEvents);
        if (!copy[event.startMonth]) {
            copy[event.startMonth] = [];
        }
        if (!copy[event.startMonth][event.startNumber]) {
            copy[event.startMonth][event.startNumber] = [];
        }
        copy[event.startMonth][event.startNumber].push(event);
        this.setState({ storeEvents: copy });
    }
    getRequestEvent = (props) => {
        let lastEvent;
        let nextEvent;
        let event;
        let that = this;
        if (that.state.storeEvents) {
            if (props.rest === 'days' && this.state.storeEvents[props.month] 
                && this.state.storeEvents[props.month][props.number]) {
                event = this.state.storeEvents[props.month][props.number].slice();
                if (event.length > 3) {
                    event.push({nameEvent: `+ ${event.splice(2, event.length - 1).length} more`})
                }
            }
            if (props.rest === 'prevDays' && that.state.storeEvents[that.month[that.month.indexOf(props.month) - 1]] 
                && that.state.storeEvents[that.month[that.month.indexOf(props.month) - 1]][props.number]) {
                lastEvent = this.state.storeEvents[this.month[this.month.indexOf(props.month) - 1]][props.number].slice()
                if (lastEvent && lastEvent.length > 3) {
                    lastEvent.push({nameEvent: `+ ${lastEvent.splice(2, lastEvent.length - 1).length} more`});
                }
            } else if (props.rest === 'nextDays' 
                && that.state.storeEvents[that.month[that.month.indexOf(props.month) + 1]] 
                && that.state.storeEvents[that.month[that.month.indexOf(props.month) + 1]][props.number]) {
                
                nextEvent = that.state.storeEvents[that.month[that.month.indexOf(props.month) + 1]][props.number].slice()
                if (nextEvent && nextEvent.length > 3) {
                    nextEvent.push({nameEvent: `+ ${nextEvent.splice(2, nextEvent.length - 1).length} more`});
                }
            }
            return {
                    lastEvent: lastEvent,
                    nextEvent: nextEvent,
                    event: event
            }
        }
    }

    render() {
        return (
            <div id="calendar">
                <div className="titleCalendar">
                    <FontAwesome
                    name="calendar"
                    style={{ fontSize: "15px",
                             marginRight: "5px" }}/>
                    Year {this.year} Calendar
                </div>
                <Month onPrev={this.prevClick} onNext={this.nextClick}
                    currentMonth={this.state.currentMonth} listMonths={this.month} />
                <Days storeEvents={this.state.storeEvents} addEvent={this.addEvent}
                    currentMonth={this.state.currentMonth} currentNameMonth={this.month[this.state.currentMonth]}
                    prevNameMonth={this.month[this.state.currentMonth - 1]}
                    nextNameMonth={this.month[this.state.currentMonth + 1]} getRequestEvent={this.getRequestEvent}/>
            </div>
        );
    }
}

export default Calendar;