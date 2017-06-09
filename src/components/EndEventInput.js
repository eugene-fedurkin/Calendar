import React, { Component } from 'react';

class EndEventInput extends Component {
    handlerHour = (e) => {
            let type = parseInt(+e.target.value)
            if (type < 13 && type > 0) {
                document.getElementById('hourEnd').style.background = '#81C784';
                //#81C784
            } else {
                document.getElementById('hourEnd').style.background = '#E53935';
                document.getElementById('hourEnd').style.color = 'white'
            }
        }
        handlerMinutes = (e) => {
            let type = parseInt(+e.target.value)
            if (type < 61 && type >= '00' && e.target.value.length <= 2 && e.target.value.length > 0) {
                document.getElementById('minutesEnd').style.background = '#81C784';
            } else {
                document.getElementById('minutesEnd').style.background = '#E53935';
                document.getElementById('minutesEnd').style.color = 'white'
            }
        }
    render() {
        return (
            <div className="dub">
                <div className="secondaryInput  dateInformation noteForTime">End event(time):</div>
                <input onBlur={this.handlerHour} id="hourEnd"className="secondaryInput dateInformation" type="text" placeholder="Hour"/> : <input onBlur={this.handlerMinutes} id="minutesEnd" className="secondaryInput  dateInformation" type="text" placeholder="minutes"/>
                <select className="secondaryInput format dateInformation" name="format">
                    <option value="a.m">a.m</option>
                    <option value="p.m">p.m</option>
                </select>
            </div>
        )
    }
}

export default EndEventInput;