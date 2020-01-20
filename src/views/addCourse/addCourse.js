import React, {Component} from "react";
import addCourseStyle from './addCourseStyle'
import ButtonAppBar from "../../components/navbar/navbar";
import {browserHistory} from "react-router";
import axios from 'axios'
import {compose} from "redux";
import {connect} from "react-redux";

const loggedInStudentOrNot =<div className={'center'}><h1>Youre not allowed to be here</h1></div>

class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseName: null,
            courseDescription: '',
            coursePath: '',
            file: null,
            addingStatus: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this)


    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let uri = 'http://127.0.0.1:8000/api/courses/store';
        let config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
        this.uploadFile(this.state.file);
        const courses = {
            courseName: this.state.courseName,
            courseDescription: this.state.courseDescription,
            coursePath: this.state.file.name
        };
        axios.post(uri, courses, config).then((response) => {
            console.log(response);
            this.setState({addingStatus: 'Course added successfully 🥰'})
        }).catch(error => {
            console.log(error);
            this.setState({addingStatus: 'Something went wrong 😕 Try again 😏'})
        });
    };
    // -------------------------------------------------
    onChange = (e) => {
        this.setState({file: e.target.files[0]})
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    // -------------------------------------------------------------

    uploadFile = (file) => {
        const fd = new FormData();
        fd.append('file', file);
        const url = 'http://127.0.0.1:8000/api/upload';
        axios.post(url, fd)
            .then(response => {
                console.log(response.request.response)
            })
            .catch(error => console.log(error))
    };


    render() {
        const loggedInProfessor = (
            <div>
                <p className="center" style={addCourseStyle.uploadCourseTitle}>Upload A course</p>
                <div style={addCourseStyle.formContainer}>
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card">
                                <div style={addCourseStyle.inputContainer}>
                                    <div className="card-content">
                                        <p className={'center'}>Course Name</p>
                                        <input type={'text'} style={addCourseStyle.inputContainer} name={'courseName'}
                                               onChange={this.handleChange}/>
                                        <p className={'center'}>Course Description</p>
                                        <textarea className={'materialize-textarea'} name={'courseDescription'}
                                                  style={addCourseStyle.inputContainer} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                {/* ---------------------------------------------------*/}
                                <div style={addCourseStyle.inputContainer}>
                                    <div className="file-field input-field">
                                        <div className="btn">
                                            <span>File</span>
                                            <input type="file" onChange={this.onChange}/>
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate" type="text"/>
                                        </div>
                                    </div>
                                </div>
                                {/*--------------------------------------*/}
                                <div className="center">
                                    <p>{this.state.addingStatus}</p>
                                </div>
                                <div className={'center'}>
                                    <div className="card-action">
                                        <button type={'submit'} className="btn center"
                                                onClick={this.handleSubmit}>Upload
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        let type = this.props.isLogged.type;
        let isLogged = this.props.isLogged.isLogged;
        return (
            <div>
                <ButtonAppBar isLoggedIn={this.props.isLogged.isLogged} creds={this.props.isLogged.creds}/>
                {!(type==='teacher'&&isLogged===true)?loggedInStudentOrNot:loggedInProfessor}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        isLogged: state.login
    }
};
export default compose(connect(mapStateToProps))(AddCourse);
