import React, { useState } from "react";
import "../../styles/controlbar.css";
import {ReactdatePicker} from "./DatePicker.js";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export const Controlbar = (props) => {

  const [term, setTerm] = useState(props.term || '');
  const [location, setLocation] = useState(props.location || '');

  function submit(e) {
    if(typeof props.search === 'function') {
      props.search(term, location);
    }

    console.log(term, location);
    e.preventDefault();
  }

  return (
    <Form className="controlContainer" onSubmit={submit}>
      
      <div className="searchBox">
        
        <input type="search" placeholder="Search" onChange={(e) =>setLocation(e.target.value)}/>
        <i className="fa-solid fa-location-dot" onClick={submit}></i>
      </div>
      <Dropdown className="Date-Dropdown" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          <i className="fa-solid fa-calendar-days"></i> Date
        </Dropdown.Toggle>

        <Dropdown.Menu className="date-menu">
          <Dropdown.Item href="#/action-1">
            <ReactdatePicker/>
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
        
        <input type="search" placeholder="Search" onChange={(e) =>setTerm(e.target.value)}/>
        <i className="fa fa-search" onClick={submit}></i>
      </div>
  </Form>
  );
};
