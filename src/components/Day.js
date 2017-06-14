import React, { Component } from 'react';

import Event from './Event'

import Modal from 'react-modal';

class Day extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        }
        /*this.time = ['1:00 a.m', '2:00 a.m', '3:00 a.m', '4:00 a.m', '5:00 a.m', '6:00 a.m', '7:00 a.m', '8:00 a.m', '9:00 a.m', '10:00 a.m', '11:00 a.m', '12:00 a.m', '1:00 p.m', '2:00 p.m', '3:00 p.m', '4:00 p.m', '5:00 p.m', '6:00 p.m', '7:00 p.m', '8:00 p.m', '9:00 p.m', '10:00 p.m', '11:00 p.m', '12:00 p.m'];*/
        this.time = [];
    }
    componentWillMount() {
        Modal.setAppElement('body');
    }
    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        });
    }
    componentWillMount() {
        if (this.props.hour && this.props.minutes) {
            this.time.push(`${this.props.hour} : ${this.props.minutes}`)
        } 
    }

// ----pass store, TODO: get necessary events
    render() {
        console.log(this.props.hour, this.props.minutes)
        return (
            <div>
                <div className="wrapper">
                    <div className="container">
                        {this.props.number} {this.props.month}
                    </div>
                </div>
                <div className="headerOfModal">
                    <div className="time">Time</div>
                    <div className="fieldForEvent title"> Event</div>
                    
                </div>
                {
                    
                    this.time.map((time, index) =>
                        <div key={time} className="headerOfModal">
                            <div className="time">
                                <span>{time}</span>
                            </div>
                            <div onClick={this.toggleModal} className="fieldForEvent">

                            </div>
                        </div>
                    )
                }
                    <input onClick={this.toggleModal} type="button" value="Create event" />
                    <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal} contentLabel="Inpunts">
                        <Event putStoreEvent={this.props.putStoreEvent} currentMonth={this.props.currentMonth} number={this.props.number} />
                    </Modal>
            </div>
        );
    }
}

export default Day;