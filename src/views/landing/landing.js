import React, {Component} from "react";
import ButtonAppBar from "../../components/navbar/navbar";
import landingStyle from './landingStyle';
import {Link} from "react-router";
import {connect} from "react-redux";
import {compose} from "redux";

const register = require('../../assets/hicxlipart.com.png');
const login = require('../../assets/register.png');
const welcomeBack = <h1 className={'center'}>Welcome Back</h1>;
const newUser = (<div className="row">
    <div className="col s6 push-s7">
        <div className="card" style={{margin: '3%', width: '50%', height: '450px'}}>
            <div className="card-image waves-effect waves-block waves-light">
                <img src={register} width={'50px'} height={'300px'}/>
            </div>
            <div className="card-content">
                <Link to={'/signup'}><span
                    className="center card-title activator grey-text text-darken-4">Register</span></Link>
            </div>
        </div>
    </div>
    {/*----------------------------------------------------------------------------------*/}
    <div className="col s6 pull-s4">
        <div className="card" style={{margin: '3%', width: '50%', height: '450px'}}>
            <div className="card-image waves-effect waves-block waves-light">
                <img src={login} width={'50px'} height={'300px'}/>
            </div>
            <div className="card-content">
                <Link to={'/login'}><span
                    className="center card-title activator grey-text text-darken-4">Login</span></Link>
            </div>
        </div>
    </div>
</div>);

class Landing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        let name = this.props.isLogged.name !== null && this.props.isLogged.lastName !== null ? this.props.isLogged.name + " " + this.props.isLogged.lastName : '';
        return (
            <div>
                <ButtonAppBar isLoggedIn={this.props.isLogged.isLogged} creds={this.props.isLogged.creds}/>
                {this.props.isLogged.isLogged === true ?
                    <div style={{color: 'white'}} className={'center'}>{welcomeBack} <h2>{name}</h2></div> : newUser}
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

export default compose(connect(mapStateToProps))(Landing)
