import React,{Component} from 'react'
import {Link} from "react-router";

class SignedInLinks extends Component{
    render() {
        return(
            <ul className="right">
                <li><Link to='/add-course'>New Course</Link></li>
                <li><Link to='/all-courses'>All Courses</Link></li>
                <li><Link to='/'>LogOut</Link></li>
                <li><Link to='/' className='btn btn-floating pink lighten-1'>{this.props.creds}</Link></li>
            </ul>
        )
    }


}
export default SignedInLinks
