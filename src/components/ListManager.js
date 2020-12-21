import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import AddPersonForm from "./forms/AddPersonForm";
import List from "./List";
import {sampleData} from "./forms/sampleData";

export default function ListManager() {
  return (
    <>
      <h1>Stuff Manager</h1>
      <Button variant="dark">add a person</Button>
      <Col lg={{ span: 6, offset: 3 }}>
        <AddPersonForm/>
      </Col>
      <Row className='list-header'>
        <Col>name</Col>
        <Col>surname</Col>
        <Col>position</Col>
        <Col>action</Col>
      </Row>
      <List persons={sampleData}/>
    </>
  )
}