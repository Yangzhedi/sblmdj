import {combineReducers} from 'redux'
import { user } from './redux/user.redux'
import { counter } from "./redux/index.redux";

// 合并所有reducers 并且返回
export default combineReducers({user, counter})