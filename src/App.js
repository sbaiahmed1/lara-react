import React, {Component} from 'react';
import {browserHistory, Route, Router} from "react-router";
import ButtonAppBar from "./components/navbar/navbar";
import Landing from "./views/landing/landing";
import AddCourse from "./views/addCourse/addCourse";
import FileUpload from "./views/addTest/file";
import Login from "./views/login/login";
import Register from "./views/signup/register";
import ViewAllCourses from "./views/viewAllCourses/viewAllCourses";
const background = require('./assets/background.jpg');

export default class App extends Component {
    render() {
        return (
            <div style={{backgroundImage:'url('+background+')',minHeight:700}}>
            <Router history={browserHistory}>
                    <Route exact path="/" component={Landing} />
                    <Route path="/add-course" component={AddCourse} />
                    <Route path="/display-item" component={ButtonAppBar} />
                    <Route path="/edit" component={FileUpload} />
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/signup'} component={Register}/>
                    <Route path={'/all-courses'} component={ViewAllCourses}/>
            </Router>
            </div>
        );
    }


}
