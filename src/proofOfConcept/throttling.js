import React, { Component } from 'react'

export default class Throttling extends Component {


    callbackfunction(){
        console.log('Im being called..!!');
    }

    throttleFunction(func, time){
        let timeOutId = null;
        return function () {
            let context = this,
            args = arguments;
            if (!timeOutId) {
                func.apply(context, args);
                timeOutId = setTimeout(() => {
                    clearTimeout(timeOutId);
                    timeOutId = null;
                }, time)
            }
        }
    }

    componentDidMount() {        
        let intervalId = setInterval(()=>{
            document.getElementById('throttlebutton').click();
        },0)
        setTimeout(()=>{
            clearInterval(intervalId)
        },20000)
    }
    

    render() {
        return (
            <div>
                <button 
                    onClick={this.callbackfunction}>
                        My click function which is not throttled.
                </button>
                <br/>
                <br/>
                <br/>
                <button
                    id="throttlebutton"
                    onClick={this.throttleFunction(this.callbackfunction, 5000)}>
                        My click function which has been throttled
                </button>
            </div>
        )
    }
}
