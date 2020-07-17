import React from 'react';
import './App.css';
import NameGenerator from "./components/NameGenerator/NameGenerator";
import Calculator from "./components/Calculator/Calculator";



function App() {
    const obj = [
        {key: 0, a: 1, b: "*", c: 1},
        {key: 1, a: 130, b: "-", c: 58},
        {key: 2, a: 25, b: "+", c: 89},
        {key: 3, a: 12, b: "/", c: 57},
        {key: 4, a: 20, b: "*", c: 1890},
    ];


    return (
        <div className="App">
            <NameGenerator
                names={["rick", "john", "tom", "richard"]}
            />
            {obj.map(item => <Calculator key={item["key"]} operandA={item["a"]} operator={item["b"]} operandB={item["c"]} />)}
        </div>
    );
}

export default App;
