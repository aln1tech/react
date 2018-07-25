"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({

    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom:function (transition, component) {
            if(component.state.dirty && !confirm('Leave without saving?')){
                transition.abort();
            }
        }
    },

    getInitialState: function () {
        return {
            author: {id: '', firstName: '', lastName: ''},
            errors: {}
        };
    },

    authorFormValidation: function(event){
        var formIsValid = true;
        this.state.errors = {};

        if(this.state.author.firstName.trim().length < 3){
            this.state.errors.firstName = 'First name must be at leas 3 characters.';
            formIsValid = false;
        }

        if(this.state.author.lastName.trim().length < 3){
            this.state.errors.lastName = 'Last name must be at leas 3 characters.';
            formIsValid = false;
        }
        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    setAuthorState: function (event) {
        this.setState({dirty:true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },

    saveAuthor: function (event) {
        event.preventDefault();

        if(!this.authorFormValidation()){
            return;
        }
        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Author Saved.');
        this.setState({dirty:false});
        this.transitionTo('authors');
    },

    render: function () {
        return (
            <AuthorForm author={this.state.author}
                        onChange={this.setAuthorState}
                        onSave={this.saveAuthor}
                        errors={this.state.errors}/>
        );
    }
});

module.exports = ManageAuthorPage;