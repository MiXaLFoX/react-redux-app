import React from 'react';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export default function ListItem ({person}) {
  return (
    <>
      <Row>
        <Col>{person.name}</Col>
        <Col>{person.surname}</Col>
        <Col>{person.position}</Col>
        <Col>
          <Button variant="dark">edit</Button>
          <Button variant="danger">delete</Button>
        </Col>
      </Row>
    </>
  )
}