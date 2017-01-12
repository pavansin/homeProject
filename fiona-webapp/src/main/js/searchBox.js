/**
 * Created by Chandu on 1/10/2017.
 */
'use strict';
const React = require('react');
//const ReactDOM = require('react-dom');

module.exports = class SearchBox extends React.Component {
    render() {
        return (
        <form className="form-inline" method="get" action="/search" id="search">
            <div className="form-group">
                <input name="q" type="text" className="form-control" placeholder="Search"/>
            </div>
            <button type="submit" className="btn btn-info">
                <span className="glyphicon glyphicon-search"  aria-hidden="true"></span> Search
            </button>
        </form>
        );
    }
}
