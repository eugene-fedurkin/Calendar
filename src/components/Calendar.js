import React, { Component } from 'react';
import Days from './Days';
import Month from './Month';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonth: new Date().getMonth(),
            storeEvents: {},
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
        var copy = Object.assign({},  this.state.storeEvents);
        console.log('start', this.state.storeEvents)
        if (!copy[event.startMonth]) {
            copy[event.startMonth] = [];
        }
        if (!copy[event.startMonth][event.startNumber]) {
            copy[event.startMonth][event.startNumber] = [];
        }
        copy[event.startMonth][event.startNumber].push(event);
        this.setState({ storeEvents: copy });
        console.log('11111', this.state.storeEvents)
    }
        // this.setState({ storeEvents: [[this.month.indexOf(event.startMonth)]] })
        // let newState = this.state.storeEvents.slice();
        // newState.push(event);
        //this.setState({storeEvents: newState});
    getRequestEvent = (props) => {
        console.log('month', this.state.storeEvents[props.month])
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






        // for (let event of this.state.storeEvents) {
        //     console.log('request')
        //     let prevMonth = that.month[that.state.currentMonth - 1];
        //     let nextMonth = that.month[that.state.currentMonth + 1];

        //     if (event['startNumber'] == props.number && event['startMonth'] == prevMonth && props.rest === 'prevDays') {
        //         resultLast.push([event['nameEvent']]);
        //     } else if (event['startNumber'] == props.number && event['startMonth'] == that.month[that.state.currentMonth] && props.rest === 'days') {
        //         resultActive.push([event['nameEvent']]);
        //     } else if (event['startNumber'] == props.number && event['startMonth'] == nextMonth && props.rest === 'nextDays'){
        //         resultNext.push([event['nameEvent']]);
        //     }
        // } //---need life cycle
        // if (resultActive.length > 3) {
        //     restEvent.push(resultActive.splice(2, resultActive.length - 1));
        //     resultActive.push(`+ ${restEvent[0].length} more`)
        // }
        // if (resultLast.length > 3) {
        //     restEvent.push(resultLast.splice(2, resultLast.length - 1));
        //     resultLast.push(`+ ${restEvent[0].length} more`)
        // }
        // if (resultNext.length > 3) {
        //     restEvent.push(resultNext.splice(2, resultNext.length - 1));
        //     resultNext.push(`+ ${restEvent[0].length} more`)
        // }
        // return {
        //     resultActive: resultActive,
        //     resultLast: resultLast,
        //     resultNext: resultNext
        // };
    }

    render() {
        console.log(this.state.storeEvents)
        return (
            <div id="calendar">
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