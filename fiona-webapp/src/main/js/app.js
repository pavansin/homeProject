/**
 * Created by Chandu on 1/8/2017.
 */
'use strict';
const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
    render : function() {
        return (
            React.DOM.span(null, "Hello from react land")
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)