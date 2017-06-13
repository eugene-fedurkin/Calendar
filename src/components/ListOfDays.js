import React, { Component } from 'react';

import Day from './Day';

import Modal from 'react-modal';

class ListOfDays extends Component {
    constructor(props) {
        super(props);
        this.dayOfModal = null;
        this.monthOfModal = null;
        this.state = {
            isActive: false
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
    render() {
        return(
            <div onClick={this._handlers} id="dates" className="datesClass">
                <div className="numbers">{this.props.number}</div>
                <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal} contentLabel="Modal">
                        <Day number={this.dayOfModal} currentMonth={this.props.currentMonth} month={this.monthOfModal}/>
                    </Modal>
            </div>
        )
    }
}

export default ListOfDays;