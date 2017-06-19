import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            currentMonth: this.props.month
        }
    }
    increase = () => {
        if (this.state.currentMonth === 'December') {
            this.setState({
                currentMonth: 'January'
            })
        } else {
            this.setState({
                currentMonth: this.state.month[this.state.month.indexOf(this.state.currentMonth) + 1]
            })
            
        }
        this.triggerUpdate();
    }
    decrease = () => {
        if (this.state.currentMonth === 'January') {
            this.setState({
                currentMonth: 'December'
            })
        } else {
            this.setState({
                currentMonth: this.state.month[this.state.month.indexOf(this.state.currentMonth) - 1]
            })
        }
        this.triggerUpdate();
    }

    triggerUpdate() {
        if (this.props.startMonth) {
            this.props.startMonth(this.state.currentMonth)
        } else {
            this.props.endMonth(this.state.currentMonth)
        }
    }

    render() {
        return (
            <div className="months">
                <div className="inputTime">
                    <span>
                        {this.state.currentMonth}
                    </span>
                    <div className="wrapForIncAndDec">
                        <FontAwesome onClick={this.increase}
                            name="increase"
                            className='fa fa-sort-asc'
                            style={{ color: "#1A212C" }}
                            />
                            <FontAwesome onClick={this.decrease}
                            name="dencrease"
                            className='fa fa-sort-desc'
                            style={{ color: "#1A212C" }}
                            />
                    </div>
                </div>
                    
                <div className="buttonForTime"></div>
                <div className="buttonForTime" ></div>
            </div>
        )

    }
}

export default Input;