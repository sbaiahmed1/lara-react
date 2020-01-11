import React, {Component} from 'react'
import {Link} from 'react-router'
import SignedInLinks from "./signedInLinks";
import SignedOutLinks from "./signedOutLinks";
// import  from './navbarStyle';


export default class ButtonAppBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let buttonsControl;
        if (this.props.isLoggedIn=='true'){
            buttonsControl = <SignedInLinks/>
        }
        else {
            buttonsControl = <SignedOutLinks/>
        }
        return (
            <div className="navbar-fixed">
                <nav className="nav-wrapper grey darken-3">
                    <div className="container">
                        <Link to='/' className='brand-logo left'>E-learn</Link>
                        {buttonsControl}
                    </div>
                </nav>
            </div>
        );
    }
}


