import count from './count/reducers'
import login from './count/login'
import { combineReducers } from "redux";

const reducers = combineReducers({
  count,
  login
})

export default reducers;
