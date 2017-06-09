import React, { Component } from 'react';

class EndDayInput extends Component {
    render() {
        return (
            <div className="dub">
                <div className="secondaryInput  dateInformation noteForTime">End event(day):</div>
                <select className="secondaryInput format dateInformation dayOfTheWeek" name="dayOfTheWeek">
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                </select>
            </div>
        )
    }
}

export default EndDayInput;