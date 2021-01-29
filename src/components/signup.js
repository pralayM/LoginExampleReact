import React, { Component } from 'react'
import firebase from '../config/firebase'
export default class SignUp extends Component {
    state={
        email:'',
        password:''
    }

    constructor(props){
        super(props);
        let thisArg = "Hello"
        this.signup = this.signup.bind(this);
    }

    async signup(){
        // let email = this.state.email;
        // let password = this.state.password;
        // let userCredentials  = await firebase.auth().createUserWithEmailAndPassword(email,password)
        // console.log(userCredentials);

        let provider  = new firebase.auth.GoogleAuthProvider();
        let res = firebase.auth().signInWithPopup(provider)
        console.log(res);
    }
    render() {
        return (
            <div>
                <div>
                    <input className="form-control" type="email" placeholder="Email" value={this.state.email} onChange={e=>{
                        this.setState({email:e.target.value});
                    }} />
                    <input className="form-control" type="password" placeholder="Password" value={this.state.password}  onChange={e=>{
                        this.setState({password:e.target.value});
                    }} />
                </div>
                <div>
                    <button onClick={this.signup}>SignUp</button>
                </div>
            </div>
        )
    }
}
