import React from "react";
import { Form, Button } from "react-bootstrap";
import "../Login/login.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Login = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Log In</Form.Label>
        <Form.Control type="email" placeholder="Email Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
        <Form.Check type="checkbox" label="Forgot My Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
};
