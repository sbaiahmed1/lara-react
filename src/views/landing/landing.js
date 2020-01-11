import React, {Component} from "react";
import ButtonAppBar from "../../components/navbar/navbar";
import landingStyle from './landingStyle';

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoggedIn : 'false'
        }
    }
    render() {
        return (
            <div>
                <ButtonAppBar isLoggedIn={this.state.isLoggedIn}/>
                <div style={landingStyle.mainDiv}>
                    <h1>Hello</h1>
                </div>
            </div>
        );
    }
}
