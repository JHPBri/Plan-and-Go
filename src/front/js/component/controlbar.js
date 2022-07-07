import React from "react";
import "../../styles/controlbar.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from "react-bootstrap/FormControl";

import InputGroup from 'react-bootstrap/InputGroup';
export const Controlbar = () => {
  return (
    <div className="controlContainer">
     <Dropdown className="Location-Dropdown">
     <Dropdown.Toggle  id="dropdown-basic">
     <i className="fa-solid fa-location-dot"></i> Location
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
        <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1">
          Submit
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        </Dropdown.Item>
      </Dropdown.Menu>
     </Dropdown>

     <Dropdown className="Date-Dropdown">
     <Dropdown.Toggle  id="dropdown-basic">
      <i className="fa-solid fa-calendar-days"></i> Date
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
        <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1">
          Submit
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        </Dropdown.Item>
      </Dropdown.Menu>
     </Dropdown>


     <Dropdown className="Filter-Dropdown">
     <Dropdown.Toggle  id="dropdown-basic">
     <i className="fa-regular fa-filter"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
        <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1">
          Submit
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        </Dropdown.Item>
      </Dropdown.Menu>
     </Dropdown>

     <InputGroup className="col-6">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>

    </div>
  );
};
