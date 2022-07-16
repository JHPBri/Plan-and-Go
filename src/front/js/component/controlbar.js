import React from "react";
import "../../styles/controlbar.css";
import {RdatePicker} from "./DatePicker.js";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

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

        <Dropdown.Menu className="date-menu">
          <Dropdown.Item href="#/action-1">
            <RdatePicker/>
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

      <div className="searchBox">
        <input type="search" placeholder="Search"/>
        <i className="fa fa-search"></i>
      </div>
  </div>
  );
};
