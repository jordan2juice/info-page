"use client";

import React, { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalHeader } from "react-bootstrap";

export default function ModalSignIn({ show, handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User created.");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error in sign up.", error);
    }
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button type="submit" onClick={handleSubmit} variant="primary">
              Submit
            </Button>
          </Form>
        </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
