import React from "react";
import { useAuth } from "../store/appContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../pages/profile.css";

export const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div className="profile-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{JSON.stringify(currentUser, null, 2)}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
