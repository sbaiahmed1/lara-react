import React, {Component} from "react";
import addCourseStyle from './addCourseStyle'
import ButtonAppBar from "../../components/navbar/navbar";

export default class AddCourse extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar/>
                    <p className="card-title" style={addCourseStyle.uploadCourseTitle}>Upload A course</p>
                <div style={addCourseStyle.formContainer}>
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card">
                                <div className="card-content">
                                    <input type={'text'}/>
                                </div>
                                {/* ---------------------------------------------------*/}
                                <div style={addCourseStyle.inputContainer}>
                                <div className="file-field input-field">
                                    <div className="btn">
                                        <span>File</span>
                                        <input type="file"/>
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text"/>
                                    </div>
                                </div>
                            </div>
                                {/*--------------------------------------*/}
                                <div className="card-action">
                                    <button type={'submit'}>Upload</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
