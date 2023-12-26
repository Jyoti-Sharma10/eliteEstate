import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap";
import "../index.css";
import {useNavigate} from "react-router-dom";

export default function Signup() {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({});

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    try {
      const json = await response.json();
      // Handle JSON response
      if (json.success) {
        navigate("/login");
      } else {
        alert("Enter valid credentials");
      }
    } catch (error) {
      // Handle fetch or JSON parsing error
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="container wrapper mx-auto">
      <h2 className="text-center my-4">Sign up to eliteESTATE</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" name="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={credentials.username}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" name="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={credentials.email}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" name="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={onChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: "100%" }}>
          SIGN UP
        </Button>
      </Form>
      <div className="d-flex gap-2 my-2">
        <p>Have an account?</p>
        <LinkContainer to="/login">
          <span style={{ color: "blue" }}>Login</span>
        </LinkContainer>
      </div>
    </div>
  );
}
