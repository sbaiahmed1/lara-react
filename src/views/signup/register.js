import React, {Component} from "react";
import addregisterStyle from './addregisterStyle';
import ButtonAppBar from "../../components/navbar/navbar"


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            password: '',
            c_password: '',
            email: '',
            password_status: ''

        };
        this.verifyPassword = this.verifyPassword.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    verifyPassword = () => {
        if (this.state.password !== this.state.c_password) {
            this.setState({
                password_status: 'Passwords Mismatch'
            })
        } else {
            this.setState({
                password_status: 'Passwords match'
            })
        }
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
                <p className="card-title" style={addregisterStyle.signup}>Sign up</p>
                <div style={addregisterStyle.formContainer}>
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card">
                                <div style={addregisterStyle.inputContainer}>
                                    <div className="card-content">
                                        <p className={'center'}>First name</p>
                                        <input type={'text'} style={addregisterStyle.inputContainer}
                                               name={'name'}/>
                                        <p className={'center'}>Last name</p>
                                        <input type={'text'} style={addregisterStyle.inputContainer}
                                               name={'LastName'}/>
                                        <p className={'center'}>Email</p>
                                        <input type={'email'} style={addregisterStyle.inputContainer} name={'login'}/>
                                        <p className={'center'}>Password</p>
                                        <input type={'password'} name={'password'} onChange={this.handleChange} style={addregisterStyle.inputContainer}/>
                                        <p className={'center'}>Confirm Password</p>
                                        <input type={'password'} name={'c_password'} onChange={this.handleChange} onBlur={this.verifyPassword}
                                               style={addregisterStyle.inputContainer}/>
                                        <p>{this.state.password_status}</p>
                                    </div>
                                </div>
                                <div className={'center'}>
                                    <div className="card-action">
                                        <button type={'submit'} className="btn center">Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)

    }
}
