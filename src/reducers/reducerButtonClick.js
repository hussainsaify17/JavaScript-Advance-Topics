import { HANDLE_BUTTON_CLICK } from '../actions/action';

export default function (state = { valueCollector: [] }, action) {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case HANDLE_BUTTON_CLICK:
            newState.valueCollector.push(action.data);            
            break;
        default:
            return newState;
    }

    return newState;

}