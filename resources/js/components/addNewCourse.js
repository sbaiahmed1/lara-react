import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { Link } from 'react-router';


export default class AddNewCourse extends Component{
    constructor(props) {
        super(props);
        this.state = {name: '', path: ''};
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}