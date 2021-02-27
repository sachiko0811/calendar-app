import React from "react";

// import * as styles from "./style.css";
import './style.css';

import Schedule from '../Schedule';

import { Typography } from "@material-ui/core";
import { isSameDay, isSameMonth, isFirstDay, getMonth } from "../../services/calendar";

import  dayjs from "dayjs";

const CalendarElement = ({ day, month, schedules, ...props }) => {

    
    // const isFirstDay = day.date() === 1;
    

    // Today
    const today = dayjs();
    // const compareFormat = "YYYYMMDD";
    // const isToday = day.format(compareFormat) === today.format(compareFormat);

    // greydown for the other months
    // const isCurrentMonth = day.month() === today.month();
    const currentMonth = getMonth(month);
    const isCurrentMonth = isSameMonth(day, currentMonth);
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

    // setting the month info for the first day of the month
    const format = isFirstDay(day) ? "MMM DD" : "DD";

    // today or not
    const isToday = isSameDay(day, today);

    return(
        <div 
        // className={styles.element}
        className="element"
        >
            <Typography 
            // className={styles.date}
            className="date"
            color={textColor}
            align="center"
            variant="caption"
            component="div"
            >
                <span className={isToday ? "today" : ""}>
                    {day.format(format)}
                </span>
            </Typography>
            <div 
            // className={styles.schedules}
            className="schedules"
            >
                {schedules.map(e =>  (
                    <Schedule key={e.id} schedule={e} {...props} />
                ))}
            </div>
        </div>
    )
}

export default CalendarElement;