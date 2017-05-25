import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class CurrentDate extends Component {
    constructor(props) {
        super(props);
        /*this.currentDate = new Date().getMonth(); // --- в январе Prev отсутствует
        this.state = {month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']};*/
        this.state = {currentDate: new Date().getMonth()};
        this.month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
    prevClick = () => {
        if (this.state.currentDate) {
            this.setState(currentMonth => ({
                currentDate: currentMonth.currentDate - 1
            }));
        }
    }
    nextClick = () => {
        if (this.state.currentDate < 11) {
            this.setState(currentMonth => ({
                currentDate: currentMonth.currentDate + 1
            }));
        }
    }
    render() {
        return (
            <div className="swapperMonths">
                <div onClick={this.prevClick} className="prevDate">
                    <FontAwesome
                    name="arrow-left"
                    className='fa fa-arrow-left'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                    {this.month[this.state.currentDate - 1]}
                </div>
                <div className="currentDate">
                    {this.month[this.state.currentDate]}
                </div>
                <div onClick={this.nextClick} className="nextDate">
                    {this.month[this.state.currentDate + 1]}
                    <FontAwesome
                    name="arrow-right"
                    className='fa fa-arrow-right'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                </div>
            </div>
        )
    }
}

export default CurrentDate;