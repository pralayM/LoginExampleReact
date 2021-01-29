import './App.css';
import SignUp from './components/signup'
import { useEffect,useState } from 'react';
import firebase from './config/firebase'
import SignIn from './components/signin';

function App() {
  var [isLoggedIn,setIsLoggedIn] = useState(false);
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
    })
  },[isLoggedIn]);
  function logout(){
    firebase.auth().signOut().then(()=>{
      setIsLoggedIn(false);
    }).catch(e=>{
    })
  }
  if(isLoggedIn){
    return (
      <div className="App">
        "Hello"
        <button onClick={logout}>Logout</button>
      </div>
    );
  }else{
    return (
      <div className="App">
        <SignUp />
        <SignIn />
      </div>
    );
  }
}

export default App;
