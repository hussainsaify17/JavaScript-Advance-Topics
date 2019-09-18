export const HANDLE_TEXT_CHANGE = 'HANDLE_TEXT_CHANGE';
export const HANDLE_BUTTON_CLICK = 'HANDLE_BUTTON_CLICK';

export function handleTextChange(e){
    return {
        type : HANDLE_TEXT_CHANGE,
        data: e.target.value
    }
}

export function handleButtonClick(data){
    return {
        type : HANDLE_BUTTON_CLICK,
        data
    }
}