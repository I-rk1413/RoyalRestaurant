import * as ActionTypes from './actionTypes';

export const SignUp = (state = {
    isLoading: false,
    status:null,
    errMess: null
}, action) => {
switch (action.type) {
    case ActionTypes.SIGNUP_REQUEST:
        return {...state,
            isLoading: true,
        };
    case ActionTypes.SIGNUP_SUCCESS:
        return {...state,
            isLoading: false,
            status:action.status,
            errMess: '',
        
        };
    case ActionTypes.SIGNUP_FAILURE:
        return {...state,
            isLoading: false,
            errMess: action.message
        };
    default:
        return state
}
}