import { combineReducers } from "redux";

import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";
import scheduleReducer from './schedules/reducer';
import currentScheduleReducer from './currentSchedule/reducer';

const rootReducer = combineReducers({ 
    calendar: calendarReducer,
    addSchedule: addScheduleReducer,
    currentSchedule: currentScheduleReducer,
    schedules: scheduleReducer
});

export default rootReducer;