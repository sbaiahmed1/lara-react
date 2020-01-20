import React, {Component} from "react";
import addloginStyle from '../login/addloginStyle';
import ButtonAppBar from "../../components/navbar/navbar"
import {connect} from "react-redux";
import {loggedIn} from "../../action/login";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            login :'ahmed',
            pass:'ahmed',
            globalName:null,
            globalLast:null,
            globalType:null
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.props);
        let uri = 'http://127.0.0.1:8000/api/users/login';
        let config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
        const courses = {
            email: 'ahmedclubust@gmail.com',
            password: 'ahmed1920'
        };
        await axios.post(uri, courses, config).then((response) => {
            console.log(response);
            let name = response.data[0].name;
            let lname = response.data[0].lastName;
            let type = response.data[0].type
            let creds = name[0] + lname[0]
             const vars = {
                globalName:name,
                globalLast:lname,
                globalType:type,
                 globalCreds:creds
            }
            this.setState({
                addingStatus: 'Login successfully 🥰 , Redirecting',
                vars:vars
            })
        }).catch(error => {
            console.log(error);
            this.setState({addingStatus: 'Something went wrong 😕 Try again 😏'})
        });
        await this.props.isLogged(this.state.vars)
        console.log(this.props)

    };
    verifyLogin = ()=>{

    }
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
                                        <input type={'email'} style={addloginStyle.inputContainer} name={'login'}/>
                                        <p className={'center'}>Password</p>
                                        <input type={'password'} name={'pass'} style={addloginStyle.inputContainer}/>
                                    </div>
                                </div>
                                <div className={'center'}>
                                    <div className="card-action">
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
}

export default connect(null,mapDispatchToProps)(Login);
