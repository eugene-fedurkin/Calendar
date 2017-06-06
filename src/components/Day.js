import React, { Component } from 'react';


class Day extends Component {
    render() {
        const time = ['1:00 a.m', '2:00 a.m', '3:00 a.m', '4:00 a.m', '5:00 a.m', '6:00 a.m', '7:00 a.m', '8:00 a.m', '9:00 a.m', '10:00 a.m', '11:00 a.m', '12:00 a.m', '1:00 p.m', '2:00 p.m', '3:00 p.m', '4:00 p.m', '5:00 p.m', '6:00 p.m', '7:00 p.m', '8:00 p.m', '9:00 p.m', '10:00 p.m', '11:00 p.m', '12:00 p.m'];

        return (
            <div>
                <div className="wrapper">
                    <div className="time">Time</div>
                    <div className="fieldForEvent title"> Event</div>
                    
                </div>
                {
                    
                    time.map(time =>
                    <div key={time} className="wrapper">
                        <div className="time">
                            <span>{time}</span>
                        </div>
                        <div className="fieldForEvent">

                        </div>
                    </div>
                    )
                }
            </div>
        );
    }
}

export default Day;