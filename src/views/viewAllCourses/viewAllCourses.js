import React, {Component} from "react";
import ViewCourse from "../../components/courseComponent/viewCourse";
import ButtonAppBar from "../../components/navbar/navbar";
import {Dots, Spinner} from 'react-activity';
import 'react-activity/lib/Dots/Dots.css';
import axios from "axios";
import {compose} from "redux";
import {connect} from "react-redux";

class ViewAllCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all: null
        }

    }

    componentDidMount() {
        let uri = 'http://127.0.0.1:8000/api/courses/all';
        axios.get(uri).then((response) => {
            console.log(response);
            this.setState({
                all: response.data
            });
            this.setState({
                animated: false
            })
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        let logged = this.props.isLogged.isLogged;
        return (
            <div>
            <ButtonAppBar isLoggedIn={this.props.isLogged.isLogged} creds={this.props.isLogged.creds}/>
            <div className={'center'}>
                <h1 style={{color: 'white'}}>View Courses</h1>
                <Dots color="#ffffff" size={48} speed={1.4} animating={this.state.animated}/>
                <div style={{marginLeft:'35%'}}>
                    {this.state.all !== null && this.state.all.map(course => {
                        return (
                            <ViewCourse islogged={this.props.isLogged.isLogged} courseName={course.courseName} courseDescription={course.courseDescription} coursePath={course.coursePath}/>)
                    })}
                </div>


            </div>
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
export default compose(connect(mapStateToProps))(ViewAllCourses);
