import React,{Component} from "react";
import addCourseStyle from './addCourseStyle'
import ButtonAppBar from "../../components/navbar/navbar";
export default class AddCourse extends Component{
    render() {
        return (
            <div>
            <ButtonAppBar/>
            <div style={addCourseStyle.formContainer}>
                <div className="row">
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                    <span className="card-title">Card Title</span>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
