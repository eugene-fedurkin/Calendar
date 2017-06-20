import React, { Component } from 'react';

import Event from './Event'

import FontAwesome from 'react-fontawesome';
import Modal from 'react-modal';

class Day extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        }
        this.time = [];
        this.events = [];
        this.scheduleScore = [];
        this.bodySchedule = [];
    }
    componentWillMount() {
        Modal.setAppElement('body');
    }
    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render() {
        
        if (this.props.storeEvents[this.props.month]) {
            let listEvent = this.props.storeEvents[this.props.month][this.props.number];
            this.scheduleScore = [];
            for (let i in listEvent) {
                this.scheduleScore.push({
                    time: `${listEvent[i]['startHour']}:${listEvent[i]['startMinutes']} ${listEvent[i]['startFormat']}`,
                    event: <div>
                                <div>
                                    <b>Name event:</b> {listEvent[i]['nameEvent']}.
                                </div>
                                <div>
                                    <b>Location:</b> {listEvent[i]['location']}.
                                </div>
                                <div>
                                   <b>Discription:</b> {listEvent[i]['discription']}
                                </div>
                        
                            </div>
                         
                });
            }
            this.scheduleScore.sort((a, b) => {
                return new Date('1970/01/01 ' + a['time']) - new Date('1970/01/01 ' + b['time']);
            });
            this.bodySchedule = [];
            for (let i = 0; i < this.scheduleScore.length; i++) {
                this.bodySchedule.push(
                    <div key={i} className="headerOfModal">
                        <div className="time">
                            <span>
                                {this.scheduleScore[i]['time']}
                            </span>
                        </div>
                        <div className="fieldForEvent">{this.scheduleScore[i]['event']}</div>
                    </div>
                )
            }
        }

        return (
            <div className="mainDayContainer">
                <div className="wrapper">
                    <div className="container">
                        {this.props.number} {this.props.month}
                    </div>
                </div>
                <div className="headerOfModal">
                    <div className="time headTime">
                        <FontAwesome
                        name="clock-o"
                        />Time</div>
                    <div className="fieldForEvent title"> Event</div>
                    
                </div>
                <div>
                    {this.bodySchedule}
                </div>
                <div className="containerForButton">
                    <input onClick={this.toggleModal} className="button buttonDay" type="button" value="Create event" />
                </div>
                    <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal} contentLabel="Inpunts" className="modalEvent">
                    
                    <FontAwesome onClick={this.toggleModal}
                        name="times"
                        className="close closeButtonEvent"
                        />
                    
                        <Event storeEvents={this.props.storeEvents} addEvent={this.props.addEvent} currentMonth={this.props.currentMonth} number={this.props.number} month={this.props.month} rest={this.props.rest} />
                    </Modal>
                    
            </div>
        );
    }
}

export default Day;