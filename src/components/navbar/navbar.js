import React, {Component} from 'react'
import {Link} from 'react-router'
import SignedInLinks from "./signedInLinks";
import SignedOutLinks from "./signedOutLinks";


export default class ButtonAppBar extends Component {

    render() {
        let buttonsControl;
        if (this.props.isLoggedIn===true){
            buttonsControl = <SignedInLinks creds={this.props.creds}/>
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


