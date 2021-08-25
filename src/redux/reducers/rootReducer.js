import { combineReducers } from "redux";
import countries from "./countries";
import filterCountry from "./filterCountry";
import pagination from "./pagination";

const rootReducer = combineReducers({
    countries,
    filterCountry,
    pagination
})

export default rootReducer