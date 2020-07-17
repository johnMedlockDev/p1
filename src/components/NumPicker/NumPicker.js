import React, {Component} from 'react';
import "./NumPicker.css";

function pickNum() {
    return Math.floor(Math.random() * 10)  + 1;
}


class NumPicker extends Component {
    render() {
        const num = pickNum();
        return (
            <div>
                <p>Your number is {num}</p>
                <p>{num === 7 ? 'congrats' : "Unlucky!"}</p>
            </div>
        );
    }
}

export default NumPicker;