import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './FirebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
    const [newUser, setnewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name:'',
        email:'',
        error:'',
        success:false
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName, email} = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email
            }
        setUser(signedInUser);
        history.replace(from);
        })
        .catch(err => {
          console.log(err.message);
        })

    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password===user.confirmpassword) {
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
              const newUserInfo = { ...user };
              newUserInfo.error = '';
              newUserInfo.success = true;
              setUser(newUserInfo);
              updateUserName(user.email);
            })
            .catch(error => {
              // Handle Errors here.
              const newUserInfo = { ...user };
              newUserInfo.error = error.message;
              newUserInfo.success = false;
              setUser(newUserInfo);
            });
        }
        if (!newUser && user.email && user.password) {
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
              const newUserInfo = { ...user };
              newUserInfo.error = '';
              newUserInfo.success = true;
              setLoggedInUser(newUserInfo);
              setUser(newUserInfo);
              history.replace(from);
            })
            .catch(function (error) {
              const newUserInfo = { ...user };
              newUserInfo.error = error.message;
              newUserInfo.success = false;
              setUser(newUserInfo);
            });
        }
        e.preventDefault();
      }
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
          const isPasswordValid = e.target.value.length > 6;
          const isPasswordHasNumber = /\d{1}/.test(e.target.value)
          isFieldValid = isPasswordValid && isPasswordHasNumber;
        }
        if (isFieldValid) {
          const newUserInfo = { ...user };
          newUserInfo[e.target.name] = e.target.value;
          setUser(newUserInfo);
        }
      }
      const updateUserName = name => {
        const user = firebase.auth().currentUser;
    
        user.updateProfile({
          displayName: name,
        }).then(function () {
          console.log('Update successful.')
        }).catch(function (error) {
          console.log(error)
        });
      }
 
    return (
        <div className="login">
            <Header></Header>
            <input type="checkbox" onChange={() => setnewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">New User Sign Up</label>
            <form onSubmit={handleSubmit}>
                {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Enter your Name" required/>}
                <br/>
                <input type="email" name="email" onBlur={handleBlur} placeholder="Enter your Email" id="" required/>
                <br/>
                <input type="password" name="password" onBlur={handleBlur} placeholder="Enter your Password" id="" required/>
                <br/>
                {newUser && <input type="password" name="confirmpassword" onBlur={handleBlur} placeholder="Confirm your Password" id="" required/>}
                <br/>
                <input type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
            </form>
            <button onClick={handleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default Login;