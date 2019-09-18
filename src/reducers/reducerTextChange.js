import { HANDLE_TEXT_CHANGE } from '../actions/action';

export default function (state = { currentValue: ''}, action) {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {        
        case HANDLE_TEXT_CHANGE:
            newState.currentValue = action.data;
            break;
        default:
            return newState;
    }

    return newState;

}