import React from "react";
//import {Formik, Form} from 'formik';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



export default function AddPersonForm () {
  const initialValues = {
    name: '',
    surname: '',
    position: ''
  };

  return (
    <Form className="stuff-form">
      <h2>add a person</h2>
      <Form.Group controlId="name">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="first name"/>
      </Form.Group>
      <Form.Group controlId="surname">
        <Form.Label>Second name</Form.Label>
        <Form.Control type="text" placeholder="second name" />
      </Form.Group>
      <Form.Group controlId="position">
        <Form.Label>Position</Form.Label>
        <Form.Control type="text" placeholder="position" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Add
      </Button>
    </Form>
  )
}