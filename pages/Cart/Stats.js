import React, { Component } from 'react';
import "../Cart/StaffStatus.css";
class Stats extends Component {
    render() {
        return (
            <div>
                <div className='txt'><h2>LIBRARY STATISTICS</h2></div>
                <div className="stat">
                <img src="../../images\items-requested.png"/>
            </div>
            <div className="stats">
                <img src="../../images\searches.png"/>
           </div>
            </div>
        );
    }
}

export default Stats;