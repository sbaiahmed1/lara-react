import React,{Component} from 'react'
import {Link} from "react-router";

class SignedOutLinks extends Component{
    render() {
        return (
            <ul className="right">
                <li><Link to='/signup'>SignUp</Link></li>
                <li><Link to='/signin'>Login</Link></li>
            </ul>
        );
    }
}
export default SignedOutLinks
