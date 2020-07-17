import React, {Component} from 'react';

class Result extends Component {
    render() {
        return (
            <div>
                <span className={this.props.equals < 10 ? "low" : "high"}>{this.props.equals}</span>
            </div>
        );
    }
}

export default Result;