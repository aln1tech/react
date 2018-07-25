"use strict";

var React = require('react');
var Input = require('../common/textinput');

var AuthorForm = React.createClass({
    render: function () {
        return (
            <form>
                <h1>Manage Author</h1>
                <Input
                       name="firstName"
                       label="First Name"
                       value={this.props.author.firstName}
                       onChange={this.props.onChange} />
                <br />

                <Input
                    name="lastName"
                    label="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange} />

                <input type="submit" value="Save" className="btn btn-primary" onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports = AuthorForm;