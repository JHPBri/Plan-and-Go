import React from "react";
import { Form, Button } from "react-bootstrap";
import "../Login/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({
  //your config
  apiKey: "AIzaSyBxOMjLFCkBmE5KvOtN9jjXM-2wtDm-XTY",
  authDomain: "plan-and-go-355522.firebaseapp.com",
  projectId: "plan-and-go-355522",
  storageBucket: "plan-and-go-355522.appspot.com",
  messagingSenderId: "196263218036",
  appId: "1:196263218036:web:a7916e95c45be9132e3a21",
  measurementId: "G-52RX6VHFKW",
});

const auth = firebase.auth();

export const Login = () => {
  const [user] = useAuthState(auth);

  function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };

    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Log In</Form.Label>
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
            <Form.Check type="checkbox" label="Forgot My Password" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
        {/* <section>{user ? <Home /> : <SignIn />}</section> */}
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      </div>
    );
  }
};
