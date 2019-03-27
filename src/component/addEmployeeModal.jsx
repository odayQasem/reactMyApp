import React from "react";
import { Button, Modal, Row, Col, Form } from "react-bootstrap";

export default class AddEmployeeModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      userName: "",
      age: ""
    };
  }

  
  handleSubmit(event) {
    console.log('sdsas');
    event.preventDefault();
    this.props.onAddEmployee(this.state.userName, this.state.age);
    this.props.onHandleClose();
  };

  handleUserNameChange = e => {
    this.setState({ userName: e.target.value });
  };

  handleAgeChange = e => {
    this.setState({ age: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        
          <Modal show={this.props.modalShow} onHide={this.props.onHandleClose}>
          <Form
        noValidate
        validated={true}
        onSubmit={e => this.handleSubmit(e)}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add Employee
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group as={Row} controlId="formUserName">
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    size="sm"
                    value={this.state.userName}
                    onChange={this.handleUserNameChange}
                    type="text"
                    placeholder="Enter UserName"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formAge">
                <Form.Label column sm="2">
                  Age
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    value={this.state.age}
                    onChange={this.handleAgeChange}
                    size="sm"
                    type="number"
                    placeholder="Age"
                  />
                </Col>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHandleClose}>Close</Button>
              <Button type="submit">Add</Button>
            </Modal.Footer>
            </Form>
          </Modal>
      </React.Fragment>
    );
  }
}
