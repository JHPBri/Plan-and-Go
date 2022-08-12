import React, { useState, useEffect } from "react";
import { useAuth } from "../../store/appContext";
import { db } from "../../store/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { EditProfile } from "../Profiles/editProfile";
import "../Profiles/profile.css";

export const Profile = () => {
  const { currentUser } = useAuth();
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <section className="h-100 gradient-custom-2">
              <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col col-lg-9 col-xl-7">
                    <div className="card">
                      <div
                        className="rounded-top text-white d-flex flex-row"
                        style={{ backgroundColor: "#000", height: 200 }}
                      >
                        <div
                          className="ms-4 mt-5 d-flex flex-column"
                          style={{ width: 150 }}
                        >
                          <img
                            src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
                            alt="Generic placeholder image"
                            className="img-fluid img-thumbnail mt-4 mb-2"
                            style={{ width: 150, zIndex: 1 }}
                          />
                          <a
                            type="button"
                            className="btn btn-outline-dark"
                            data-mdb-ripple-color="dark"
                            style={{ zIndex: 1 }}
                            href="/edit-profile"
                            onClick={EditProfile}
                          >
                            Edit profile
                          </a>
                        </div>
                        <div className="ms-3" style={{ marginTop: 130 }}>
                          <h5>{user.name}</h5>
                          <p>{user.location}</p>
                        </div>
                      </div>
                      <div
                        className="p-4 text-black"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        <div className="d-flex justify-content-end text-center py-1">
                          <DropdownButton
                            id="dropdown-basic-button"
                            title="Bucket"
                          >
                            <Dropdown.Item href="#/action-1">
                              Six Flags
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Hells Kitchen
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Miami Beach
                            </Dropdown.Item>
                          </DropdownButton>
                          <DropdownButton
                            id="dropdown-basic-button"
                            title="Friends"
                          >
                            <Dropdown.Item href="#/action-1">
                              Chris Luperon
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              4Geeks
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Janice Shin
                            </Dropdown.Item>
                          </DropdownButton>
                          <DropdownButton
                            id="dropdown-basic-button"
                            title="Visited"
                          >
                            <Dropdown.Item href="#/action-1">
                              Disney Land
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Prince Street Pizza
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              75 Rockerfeller Plaza
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                      </div>
                      <div className="card-body p-4 text-black">
                        <div className="mb-5">
                          <p className="lead fw-normal mb-1">About</p>
                          <div
                            className="p-4"
                            style={{ backgroundColor: "#f8f9fa" }}
                          >
                            <p className="font-italic mb-1">Web Developer</p>
                            <p className="font-italic mb-1">
                              Lives in {user.location}
                            </p>
                            <p className="font-italic mb-0">Pro Gamer</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <p className="lead fw-normal mb-0">Your Journey</p>
                          <p className="mb-0">
                            <a href="#!" className="text-muted">
                              Show all
                            </a>
                          </p>
                        </div>
                        <div className="row g-2">
                          <div className="col mb-2">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                              alt="image 1"
                              className="w-100 rounded-3"
                            />
                          </div>
                          <div className="col mb-2">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                              alt="image 1"
                              className="w-100 rounded-3"
                            />
                          </div>
                        </div>
                        <div className="row g-2">
                          <div className="col">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                              alt="image 1"
                              className="w-100 rounded-3"
                            />
                          </div>
                          <div className="col">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                              alt="image 1"
                              className="w-100 rounded-3"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};
