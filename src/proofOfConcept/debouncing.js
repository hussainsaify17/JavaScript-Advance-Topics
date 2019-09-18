import React, { Component } from 'react'

export default class debouncing extends Component {   
    callbackFunc(e){
        if (e.target.value[e.target.value.length - 1] === " " || e.target.value.length === 0) { return; }
        else if(e.target.value[e.target.value.length - 1] !== " "){
            console.log('value: ' + e.target.value);
        }
        
    }

    debounce(func, time){
        let timeOutId = null;
        return function(){
            let context = this,
            args =arguments;
            if (timeOutId) {
                clearInterval(timeOutId);
            }
            timeOutId = setTimeout(() => {
                func.apply(context, args);
                clearTimeout(timeOutId);
                timeOutId = null;
            }, time)
        }
    }
    

    componentDidMount() {
        document.getElementById('debouncetesting').addEventListener('keyup', this.debounce(this.callbackFunc, 500))
    }

    render() {
        return (
            <div>
                <input type="text" id="debouncetesting" />
            </div>
        )
    }
}
