import React,{Component} from 'react'
import {Link} from "react-router";

class SignedInLinks extends Component{
    render() {
        return(
            <ul className="right">
                <li><Link to='/create'>New project</Link></li>
                <li><Link to='/'>LogOut</Link></li>
                <li><Link to='/' className='btn btn-floating pink lighten-1'>NN</Link></li>
            </ul>
        )
    }


}
export default SignedInLinks
