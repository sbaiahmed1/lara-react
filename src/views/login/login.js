import React, { Component } from "react";
import addloginStyle from '../login/addloginStyle';
import ButtonAppBar from "../../components/navbar/navbar"

export default class Login extends Component{
render(){
    return(
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
                              <input  type={'password'} name={'pass'}  style={addloginStyle.inputContainer}/>
                          </div>
                      </div>
                       <div className={'center'}>
                           <div className="card-action">
                              <button type={'submit'} className="btn center">Connexion</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>)
}
}