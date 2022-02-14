import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import firebase from "./firebase";

const Heading = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const LogoutHandler = () => {
    firebase.auth().signOut();
    navigate("/");
  };

  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">React-Community</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link style={{ color: "#fff" }} to="/">
                Home
              </Link>
              <Link style={{ color: "#fff" }} to="/upload">
                Upload
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {user.accessToken === "" ? (
              <Link style={{ color: "#fff" }} to="/login">
                Login
              </Link>
            ) : (
              <div>
                <Navbar.Collapse
                  style={{
                    color: "#fff",
                    cursor: "pointer",
                  }}
                  onClick={LogoutHandler}
                >
                  Logout
                </Navbar.Collapse>
                <Navbar.Collapse>
                  <Link style={{ color: "#fff" }} to="/mypage">
                    {" "}
                    My Page
                  </Link>
                </Navbar.Collapse>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Heading;
