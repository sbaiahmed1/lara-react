import React, {Component} from "react";
import {Link} from "react-router";

class ViewCourse extends Component {
    render() {
        let downloadLink = 'http://127.0.0.1:8000/storage/' + this.props.coursePath;
        let islogged = this.props.islogged;
        let doit = islogged ? false : true;
        return (
            <div>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Course Name : {this.props.courseName}</span>
                                <p> Course Description : {this.props.courseDescription}</p>
                            </div>
                            <div className="center card-action">
                                <Link to={downloadLink} target="_blank" download>
                                    <button disabled={doit}
                                            className="btn waves-effect waves-light">Download
                                        <i className="material-icons right">get_app</i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ViewCourse;
