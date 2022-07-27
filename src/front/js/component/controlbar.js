import React from "react";
import "../../styles/controlbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
export const Controlbar = () => {
  return (
    <div className="controlContainer">
      <Dropdown className="Location-Dropdown" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          <i className="fa-solid fa-location-dot"></i> Location
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">United States</Dropdown.Item>
          <Dropdown.Item href="#/action-2">London</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Seoul</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Sydney</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="Date-Dropdown" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          <i className="fa-solid fa-calendar-days"></i> Date
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            <InputGroup className="mb-3">
              <Button id="button-addon1">Submit</Button>
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="Filter-Dropdown" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          <i className="fa-solid fa-filter"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Header>Age restriction</Dropdown.Header>
          <Dropdown.Item href="#/action-1">
            <Form>
              <Col>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="kid-friendly"
                />
                <Form.Check type="switch" id="custom-switch" label="age: 13+" />
                <Form.Check type="switch" id="custom-switch" label="age: 18+" />
                <Form.Check type="switch" id="custom-switch" label="age: 21+" />
              </Col>
            </Form>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <InputGroup className="col-6">
        <FormControl
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <Button id="button-addon2">Search</Button>
      </InputGroup>
    </div>
  );
};
