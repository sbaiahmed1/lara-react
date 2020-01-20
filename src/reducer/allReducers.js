import {combineReducers} from "redux";
import Login from './login'

const allReducers = combineReducers({
    login : Login
});
export default allReducers
