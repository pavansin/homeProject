/**
 * Created by Chandu on 1/11/2017.
 */
'use strict';
const React = require('react');
const SearchBox = require('./searchBox.js');

module.exports = class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <div className="collapse navbar-collapse" id="navbarText">
                    <SearchBox/>
                </div>
                <button type="button" className="btn btn-default my-2 my-sm-0">
                    <span className="glyphicon glyphicon-upload" aria-hidden="true"/> Upload
                </button>
            </nav>
        )
    }
}