import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: 11,
            minutes: '00',
            format: 'a.m'
        }
    }
    increase = () => {
        if (this.state.minutes == '00') {
            this.setState(obj => ({
                minutes: '05'
            }))
        } else if (+this.state.minutes < 55) {
            this.setState(obj => ({
                minutes: +obj.minutes + 5
            }))
        } else if (+this.state.hour == 12 && +this.state.minutes == 55) {
            this.setState(obj => ({
                hour: 1,
                minutes: '00'
            }))
        } else if (+this.state.hour == 11 && +this.state.minutes == 55 && this.state.format === 'a.m') {
            this.setState(obj => ({
                hour: 12,
                minutes: '00',
                format: 'p.m'
            }))
        } else if (+this.state.hour == 11 && +this.state.minutes == 55 && this.state.format === 'p.m') {
            this.setState(obj => ({
                hour: 12,
                minutes: '00',
                format: 'a.m'
            })) 
        } else {
            this.setState(obj => ({
                hour: obj.hour + 1,
                minutes: '00'
            }))
        }
    }
    decrease = () => {
        if (this.state.minutes > 10) {
            this.setState(obj => ({
                minutes: +obj.minutes - 5
            }))
        }
        if (this.state.minutes == '10') {
            this.setState(obj => ({
                minutes: '05'
            }))
        } else if (this.state.minutes == '05') {
            this.setState(obj => ({
                minutes: '00'
            }))
        }  else if (+this.state.hour == 1 && +this.state.minutes == '00') {
            this.setState(obj => ({
                hour: 12,
                minutes: 55
            }))
        } else if (+this.state.hour == 12 && +this.state.minutes == '00' && this.state.format == 'p.m') {
            this.setState(obj => ({
                hour: 11,
                minutes: 55,
                format: 'a.m'
            }))
        } else if (+this.state.hour == 12 && +this.state.minutes == '00' && this.state.format == 'a.m') {
            this.setState(obj => ({
                hour: 11,
                minutes: 55,
                format: 'p.m'
            })) 
        } else if (+this.state.minutes == '00') {
            this.setState(obj => ({
                hour: obj.hour - 1,
                minutes: 55
            }))
        }
    }
    handlerIncreasePress = (e) => {
            console.log ('work')
        
        if (e.keyCode === 38) {
            console.log ('work')
        }
    }
    render() {
        return (
            <div>
                <div className="inputTime">
                    <span>
                        {this.state.hour}:{this.state.minutes} {this.state.format}
                    </span>
                    <div className="wrapForIncAndDec">
                        <FontAwesome onClick={this.increase} onMouseDown={this.props.increase} onKeyPress={this.handlerIncreasePress}
                            name="increase"
                            className='fa fa-sort-asc'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                            <FontAwesome onClick={this.decrease}
                            name="dencrease"
                            className='fa fa-sort-desc'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
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