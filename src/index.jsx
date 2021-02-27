import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
// import { createStore } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import CalendarBoard from "./components/CalendarBoard/container";
import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";

import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import CurrentScheduleDialog from './components/CurrentScheduleDialog/container';


import dayjs from "dayjs";
import "dayjs/locale/en-ca";
// import "dayjs/locale/ja";
dayjs.locale("en-ca");
// dayjs.locale("ja");

// import ErrorSnackbar from "./components/ErrorSnackbar/container";

const store = createStore(rootReducer, applyMiddleware(thunk));


const App = () => (
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={DayjsUtils}>
            <Navigation />
            <CalendarBoard />
            <AddScheduleDialog />
            <CurrentScheduleDialog />
            {/* <ErrorSnackbar /> */}
        </MuiPickersUtilsProvider>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
