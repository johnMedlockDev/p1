import React from 'react';
import './App.css';
import NameGenerator from "./components/NameGenerator/NameGenerator";

function App() {
    return (
        <div className="App">
            <NameGenerator
            names ={["rick", "john", "tom", "richard"]}
            />
        </div>
    );
}

export default App;
