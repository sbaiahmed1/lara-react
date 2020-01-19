import React, {Component} from "react";
import addregisterStyle from './addregisterStyle';
import ButtonAppBar from "../../components/navbar/navbar"
import axios from "axios";


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            password: '',
            c_password: '',
            email: '',
            password_status: '',
            errorComponent: '',
            type:''

        };
        this.verifyPassword = this.verifyPassword.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

// --------------------------------------------------------------------------------
    verifyPassword = () => {
        let password_status;
        if (this.state.password !== this.state.c_password) {
            this.setState({
                password_status: 'Passwords Mismatch',
                errorComponent: <p className={'center red'}>Password Mismatch</p>

            });
        } else {
            this.setState({
                password_status: 'Passwords match',
                errorComponent: <p className={'center green'}>Password Match</p>
            });

        }
    };
    // ----------------------------------------------------------------------------------
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    // --------------------------------------------------------------------------
    handleSubmit = async (e) => {
        e.preventDefault();
        let uri = 'http://127.0.0.1:8000/api/users/create';
        let config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
        const courses = {
            name: this.state.name,
            lastName: this.state.lastName,
            email: this.state.email,
            type:this.state.type,
            password: this.state.password
        };
        axios.post(uri, courses, config).then((response) => {
            console.log(response);
            this.setState({addingStatus: 'User Created successfully 🥰'})
        }).catch(error => {
            console.log(error);
            this.setState({addingStatus: 'Something went wrong 😕 Try again 😏'})
        });
    };

    // ----------------------------------------------------------------------------
    setType(e) {
        console.log(e.target.value);
        this.setState({
            type:e.target.value,
        })
    }
    // --------------------------------------------------------------------------------
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
                                        <input type={'text'} onChange={this.handleChange}
                                               style={addregisterStyle.inputContainer}
                                               name={'name'} required={true}/>
                                        <p className={'center'}>Last name</p>
                                        <input type={'text'} onChange={this.handleChange}
                                               style={addregisterStyle.inputContainer}
                                               name={'lastName'}/>
                                        <p className={'center'}>Email</p>
                                        <input type={'email'} style={addregisterStyle.inputContainer}
                                               onChange={this.handleChange} name={'email'}/>
                                        <p className={'center'}>Password</p>
                                        <input type={'password'} name={'password'} onChange={this.handleChange}
                                               style={addregisterStyle.inputContainer}/>
                                        <p className={'center'}>Confirm Password</p>
                                        <input type={'password'} name={'c_password'} onChange={this.handleChange}
                                               onBlur={this.verifyPassword}
                                               style={addregisterStyle.inputContainer}/>
                                        <div className={'center'}>
                                            <p onChange={this.setType.bind(this)}>
                                                <label>
                                                    <input className="with-gap" name="group3" type="radio" value={'student'}/>
                                                    <span>Student</span>
                                                </label>
                                                <label>
                                                    <input className="with-gap" name="group3" type="radio" value={'teacher'}/>
                                                    <span>Teacher</span>
                                                </label>

                                            </p>
                                        </div>
                                        <div>{this.state.errorComponent}</div>
                                    </div>
                                </div>
                                <div className={'center'}>
                                    <div className="card-action">
                                        <button type={'submit'} className="btn center" onClick={this.handleSubmit}>Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)

    }
}
