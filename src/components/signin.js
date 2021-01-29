import React, { Component } from 'react'
import firebase from '../config/firebase'
export default class SignIn extends Component {
    state={
        email:'',
        password:''
    }

    constructor(props){
        super(props);
        // let thisArg = "Hello"
        this.signin = this.signin.bind(this);
    }

    async signin(){
        let email = this.state.email;
        let password = this.state.password;
        let userCredentials  = await firebase.auth().signInWithEmailAndPassword(email,password)
        console.log(userCredentials);
    }
    render() {
        return (
            <div style={{border:'1px dashed black', padding:'20px',marginTop:'30px'}}>
                <div>
                    <input className="form-control" type="email" placeholder="Email" value={this.state.email} onChange={e=>{
                        this.setState({email:e.target.value});
                    }} />
                    <input className="form-control" type="password" placeholder="Password" value={this.state.password}  onChange={e=>{
                        this.setState({password:e.target.value});
                    }} />
                </div>
                <div>
                    <button onClick={this.signin}>SignIn</button>
                </div>
            </div>
        )
    }
}
