import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return(
            <h1>Test phrase</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('wrapper'));