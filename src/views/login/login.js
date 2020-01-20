import React, {Component} from "react";
import addloginStyle from '../login/addloginStyle';
import ButtonAppBar from "../../components/navbar/navbar"
import {connect} from "react-redux";
import {loggedIn} from "../../action/login";
import axios from "axios";
import {browserHistory} from "react-router";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            globalName: null,
            globalLast: null,
            globalType: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.props);
        let uri = 'http://127.0.0.1:8000/api/users/login';
        let config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
        const courses = {
            email: this.state.email,
            password: this.state.password
        };
        await axios.post(uri, courses, config).then((response) => {
            if (response.data.toString() === 'userDoesnt') {
                console.log(response.data.toString())
                this.setState({
                    addingStatus: 'Login falied 😕 Try again 😏',
                })
            } else if(typeof(response.data==Object)) {
                console.log(typeof(response.data));
                let name = response.data[0].name;
                let lname = response.data[0].lastName;
                let type = response.data[0].type;
                let creds = name[0] + lname[0];
                const vars = {
                    globalName: name,
                    globalLast: lname,
                    globalType: type,
                    globalCreds: creds
                };
                this.setState({
                    addingStatus: 'Login successfully 🥰 , Redirecting',
                    vars: vars
                });
                this.props.isLogged(this.state.vars);
                setTimeout(function () {
                    browserHistory.push('/')
                }, 3000)
            }

        }).catch(error => {
            console.log(error);
            this.setState({addingStatus: 'Something went wrong 😕 Try again 😏'})
        });
        // await this.props.isLogged(this.state.vars);
        console.log(this.props)

    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return (
            <div>
                <ButtonAppBar/>
                <p className="card-title" style={addloginStyle.signin}>Sign in</p>
                <div style={addloginStyle.formContainer}>
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card">
                                <div style={addloginStyle.inputContainer}>
                                    <div className="card-content">
                                        <p className={'center'}>Login</p>
                                        <input type={'email'} style={addloginStyle.inputContainer} name={'email'}
                                               onChange={this.handleChange}/>
                                        <p className={'center'}>Password</p>
                                        <input type={'password'} onChange={this.handleChange} name={'password'}
                                               style={addloginStyle.inputContainer}/>
                                    </div>
                                </div>
                                <div className={'center'}>
                                    <div className="card-action">
                                        <p>{this.state.addingStatus}</p>
                                        <button type={'submit'} className="btn center"
                                                onClick={this.handleSubmit}>Connexion
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isLogged: (global) => {
            dispatch(loggedIn(global))
        }
    }
};

export default connect(null, mapDispatchToProps)(Login);
