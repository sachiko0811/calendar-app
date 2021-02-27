import React from "react";

// import * as styles from './style.css';
import "./style.css";

const Schedule = ({ schedule, onClickSchedule }) => {
    return (
    <div 
    // className={styles.schedule}
    className="schedule"
    onClick={e => onClickSchedule(schedule, e)}
    >
        {schedule.title}
    </div>
    )
};

export default Schedule;