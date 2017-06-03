import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class CurrentDate extends Component {
    /*constructor(props) {
        super(props);
        this.currentDate = new Date().getMonth(); // --- в январе Prev отсутствует
        this.state = {month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']};
}*/



    render() {
        return (
            <div className="swapperMonths">
                <div onClick={this.props.prevClick} className="prevDate">
                    <FontAwesome
                    name="arrow-left"
                    className='fa fa-arrow-left'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                    {this.props.listMonths[this.props.currentMonth - 1]}
                </div>
                <div className="currentDate">
                    {this.props.listMonths[this.props.currentMonth]}
                </div>
                <div onClick={this.props.nextClick} className="nextDate">
                    {this.props.listMonths[this.props.currentMonth + 1]}
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