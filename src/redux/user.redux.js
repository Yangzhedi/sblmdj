// import axios from 'axios'

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MESSAGE = 'ERROR_MESSAGE';
const LOAD_DATA = 'LOAD_DATA';
const initState = {
    // redirectTo:'',
    isAuth: false,
    msg: '',
    user: '',
    type: '',
};
// reducer
export function user(state=initState, action) {
    switch (action.type){
        case LOGIN_SUCCESS:
            return {msg:'',isAuth:true};
        case REGISTER_SUCCESS:
            return {msg:'',isAuth:true};
        case LOAD_DATA:
            return {isAuth:true};
        case ERROR_MESSAGE:
            return { msg:action.msg,isAuth:false};
        default:
            return state
    }
}

// action creator
function loginSuccess(data) {
    return {type:LOGIN_SUCCESS, payload:data}
}
function registerSuccess(data) {
    return {type:REGISTER_SUCCESS, payload:data}
}
function errMsg(msg) {
    return {type:ERROR_MESSAGE, msg}
}

export function loadData(userinfo) {
    return {type:LOAD_DATA, payload: userinfo}
}

export function login({user, password}) {
    if (!user || !password) return errMsg('用户名密码必须输入');
    return dispatch => {
        axios.post('/user/login', {user, password})
            .then(res => {
                if (res.status === 200 && res.data.code === 0){
                    dispatch(loginSuccess(res.data.data))
                } else {
                    dispatch(errMsg(res.data.msg))
                }
            })
    }
}

export function register({user, password, repeatpwd, type}) {
    if (!user || !password ||!type) return errMsg('用户名密码必须输入');
    if (password !== repeatpwd) return errMsg('两次密码不同');
    return dispatch => {
        axios.post('/user/register', {user, password, type})
            .then(res => {
                if (res.status === 200 && res.data.code === 0){
                    dispatch(registerSuccess({user, password, type}))
                } else {
                    dispatch(errMsg(res.data.msg))
                }
            })
    }
}