"use strict";

var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar">
                <div className="container-fluid"></div>
                <a href="/" className="navbar-brand">
                    <img src="images/pluralsigt-logo.png"/>
                </a>
                <ul className="nav navbar-nav">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#authors">Authors</a>
                    </li>
                    <li>
                        <a href="/#about">About</a>
                    </li>
                </ul>
            </nav>
        );
    }
});

module.exports = Header;