import React, {Component} from 'react';
import "./Calculator.css"
import Result from "../Result/Result";

const doMath = (a,b,c) => {
    if(b === "*"){
        return a*c;
    } else if( b === "/"){
        return a/c;
    } else if(b === "+"){
        return a+c;
    } else {
        return a-c;
    }
}

class Calculator extends Component {
    render() {
        const equation = `${this.props.operandA} ${this.props.operator} ${this.props.operandB} = `;

        return (
            <div>
                <h1>{equation}</h1>
                <Result equals={doMath(this.props.operandA,this.props.operator,this.props.operandB)}/>
            </div>
        );
    }
}

export default Calculator;