import React, { useEffect } from 'react';
import { GridList, Typography } from "@material-ui/core";
// import { Typography } from "@material-ui/core";

import CalendarElement from "../CalendarElements";
// import { createCalendar } from "../../services/calendar";

// import dayjs from "dayjs";
// import "dayjs/locale/ja";
// dayjs.locale("ja");

// import * as styles from "./style.css";
// import styles from "./style.css";
import './style.css';

// const calendar = createCalendar();

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarBoard = ({ 
    calendar, 
    month, 
    openAddScheduleDialog,
    openCurrentScheduleDialog,
    fetchSchedule
    // schedules
 }) => {
     useEffect(() => {
         fetchSchedule();
     }, []);
    // console.log(calendar);
    // console.log(schedules);
    return (
        <div 
        // className={styles.container}
        className="container"
        >
            <GridList 
            // className={styles.grid}
            // style={{borderLeft: "1px solid #ccc", color: "red"}}
            className="grid"
            cols={7}
            spacing={0}
            cellHeight="auto"
            >
                {days.map(d => (
                    <li key={d}>
                        <Typography
                        // className={styles.days}
                        className="days"
                        color="textSecondary"
                        align="center"
                        variant="caption"
                        component="div"
                        >
                            {d}
                        </Typography>
                    </li>
                ))}
                {calendar.map(({ date, schedules }) => (
                    <li 
                    key={date.toISOString()}
                    onClick={() => openAddScheduleDialog(date)}
                    >
                        <CalendarElement 
                        day={date}
                        month={month}
                        schedules={schedules}
                        onClickSchedule={openCurrentScheduleDialog}
                        />

                        {/* <Typography
                        className={styles.days}
                        color="textSecondary"
                        align="center"
                        variant="caption"
                        component="div"
                        >
                        {d}
                        </Typography> */}
                    </li>
                ))}
                {/* {calendar.map(c => (
                    <li key={c.toISOString()} onClick={() => openAddScheduleDialog(c)}>
                        <CalendarElement day={c} month={month} />
                    </li>
                ))} */}
            {/* {calendar.map(c => (
                <li>{c}</li>
            ))} */}
            </GridList>
        </div>
    )
}


export default CalendarBoard;