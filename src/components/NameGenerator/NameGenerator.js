import React, {Component} from 'react';
import "./NameGenerator.css"


const nameFunc = (names) => {
    const randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber];

}

class NameGenerator extends Component {
    render() {
        const name = nameFunc(this.props.names);
        const logic = name === "john" ? `Hi ${name}` : `Sorry your name is ${name}`;
        return (
            <div className={"NameGenerator"}>
                <h1>Names</h1>
                <p>{logic}</p>
            </div>
        );
    }
}

export default NameGenerator;