import React, { Component } from 'react';

import FontAwesome from 'react-fontawesome';

class Month extends Component {
    render() {
        return (
            <div className="swapperMonths">
                <div onClick={this.props.onPrev} className="prevDate">
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
                <div onClick={this.props.onNext} className="nextDate">
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

export default Month;