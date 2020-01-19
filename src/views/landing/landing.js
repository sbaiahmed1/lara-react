import React, {Component} from "react";
import ButtonAppBar from "../../components/navbar/navbar";
import landingStyle from './landingStyle';
import {Link} from "react-router";

const register = require('../../assets/hicxlipart.com.png');
const login = require('../../assets/register.png');

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: 'false'
        }
    }

    render() {
        return (
            <div>
                <ButtonAppBar isLoggedIn={this.state.isLoggedIn}/>
                <div className="row">
                    <div className="col s6 push-s7">
                        <div className="card" style={{margin:'3%',width: '50%', height: '450px'}}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={register} width={'50px'} height={'300px'}/>
                            </div>
                            <div className="card-content">
                        <Link to={'/register'}><span className="center card-title activator grey-text text-darken-4">Register</span></Link>
                            </div>
                        </div>
                    </div>
                    {/*----------------------------------------------------------------------------------*/}
                    <div className="col s6 pull-s4">
                        <div className="card" style={{margin:'3%',width: '50%', height: '450px'}}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={login} width={'50px'} height={'300px'}/>
                            </div>
                            <div className="card-content">
                                <Link to={'/login'}><span className="center card-title activator grey-text text-darken-4">Login</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
