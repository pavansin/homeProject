/**
 * Created by Chandu on 1/8/2017.
 */
'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const NavBar = require('./navbar.js');

class App extends React.Component {

    render() {
        return (
            React.createElement(NavBar)
        )
    }
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('react')
);