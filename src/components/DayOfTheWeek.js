import React, { Component } from 'react';

class DayOfTheWeek extends Component {
    render() {
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return (
            <div id="header">
                {
                    days.map(day => 
                            <div key={day} className="days">
                                {day}
                            </div>
                    )
                }
            </div>
        )
    }
}

export default DayOfTheWeek;