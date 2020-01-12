import React, {Component} from "react";
import addCourseStyle from './addCourseStyle'
import ButtonAppBar from "../../components/navbar/navbar";
import axios from "axios";

export default class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.state={
            courseName:'',
            courseDescription:'',
            fileName:'',
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const products = {
            title: this.state.productTitle,
            body: this.state.productBody
        }
        let uri ='127.0.0.1/api/products';
        axios.post(uri, products).then((response) => {
            browserHistory.push('/display-item');
        });

    }
    render() {
        return (
            <div>
                <ButtonAppBar/>
                    <p className="card-title" style={addCourseStyle.uploadCourseTitle}>Upload A course</p>
                <div style={addCourseStyle.formContainer}>
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card">
                                <div style={addCourseStyle.inputContainer}>
                                    <div className="card-content">
                                        <p className={'center'}>Course Name</p>
                                        <input type={'text'} style={addCourseStyle.inputContainer} name={'courseName'}/>
                                        <p className={'center'}>Course Description</p>
                                        <textarea  className={'materialize-textarea'} name={'courseDescription'}  style={addCourseStyle.inputContainer}/>
                                    </div>
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
                                 <div className={'center'}>
                                     <div className="card-action">
                                        <button type={'submit'} className="btn center">Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
