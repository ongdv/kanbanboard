import * as type from '../actions/ActionTypes';
import update from 'react-addons-update'

const initialState = {
    login: {
        status: 'INIT'
    },
    status: {
        isLoggedIn: false,
        currentUser: '',
    }
};

export default function authentication(state, action) {
    if(typeof state === "undefined")
        state = initialState;

    switch(action.type){
        case type.AUTH_LOGIN:
            return update(state, {
                login: {
                    status: {$set: 'WAITING'}
                }
            });
        case type.AUTH_LOGIN_SUCCESS:
            return update(state, {
                login: {
                    status: {$set: 'SUCCESS'}
                },
                status: {
                    isLoggedIn: {$set: true},
                    currentUser: {$set: action.username}
                }
            });
        case type.AUTH_LOGIN_FAILURE:
            return update(state, {
                login: {
                    status: {$set: 'FAILURE'}
                }
            });
        default:
            return state;
    }
}