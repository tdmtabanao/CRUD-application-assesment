import React, { useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBInput,
  MDBBtn,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function Home() {
  const [activeTab, setActiveTab] = useState("login");

  // Login states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Register states
  const [regUsername, setRegUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");
  const [regFirstName, setRegFirstName] = useState("");
  const [regMiddleName, setRegMiddleName] = useState("");
  const [regLastName, setRegLastName] = useState("");
  const [regBirthdate, setRegBirthdate] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem("auth", "true");
      navigate("/projects");
    } else {
      setError("Invalid username or password!");
    }
  };

  const handleRegister = () => {
    if (
      !regUsername ||
      !regEmail ||
      !regPassword ||
      !regConfirm ||
      !regFirstName ||
      !regLastName ||
      !regBirthdate
    ) {
      setError("Please fill all required fields!");
      return;
    }
    if (regPassword !== regConfirm) {
      setError("Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.username === regUsername);

    if (exists) {
      setError("Username already exists!");
      return;
    }

    users.push({
      username: regUsername,
      email: regEmail,
      password: regPassword,
      firstName: regFirstName,
      middleName: regMiddleName,
      lastName: regLastName,
      birthdate: regBirthdate,
    });

    localStorage.setItem("users", JSON.stringify(users));

    // Clear registration fields
    setRegUsername("");
    setRegEmail("");
    setRegPassword("");
    setRegConfirm("");
    setRegFirstName("");
    setRegMiddleName("");
    setRegLastName("");
    setRegBirthdate("");

    setError("");
    setActiveTab("login");
    alert("Registration successful! You can now login.");
  };

  return (
    <MDBContainer className="d-flex justify-content-center align-items-center vh-100">
      <MDBCard
        className="p-4"
        style={{ maxWidth: "700px", width: "100%" }}
      >
        <MDBCardBody style={{ maxHeight: "85vh", overflowY: "auto" }}>
          <MDBCardTitle className="text-center mb-4">
            Project Management System
          </MDBCardTitle>

          <MDBTabs className="mb-3 justify-content-center">
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => { setActiveTab("login"); setError(""); }}
                active={activeTab === "login"}
              >
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => { setActiveTab("register"); setError(""); }}
                active={activeTab === "register"}
              >
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          {error && (
            <p className="text-danger text-center" style={{ fontSize: "14px" }}>
              {error}
            </p>
          )}

          {/* LOGIN FORM */}
          {activeTab === "login" && (
            <div>
              <MDBInput
                label="Username"
                className="mb-3"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <MDBInput
                label="Password"
                type="password"
                className="mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <MDBBtn className="w-100" onClick={handleLogin}>
                Login
              </MDBBtn>
            </div>
          )}

          {/* REGISTER FORM */}
          {activeTab === "register" && (
            <div>
              {/* Username + Email */}
              <div className="d-flex flex-column flex-md-row gap-2 mb-3">
                <MDBInput
                  label="Username"
                  value={regUsername}
                  onChange={(e) => setRegUsername(e.target.value)}
                />
                <MDBInput
                  label="Email"
                  type="email"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                />
              </div>

              {/* Password + Confirm Password */}
              <div className="d-flex flex-column flex-md-row gap-2 mb-3">
                <MDBInput
                  label="Password"
                  type="password"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                />
                <MDBInput
                  label="Confirm Password"
                  type="password"
                  value={regConfirm}
                  onChange={(e) => setRegConfirm(e.target.value)}
                />
              </div>

              {/* First + Middle + Last Name */}
              <div className="d-flex flex-column flex-md-row gap-2 mb-3">
                <MDBInput
                  label="First Name"
                  value={regFirstName}
                  onChange={(e) => setRegFirstName(e.target.value)}
                />
                <MDBInput
                  label="Middle Name"
                  value={regMiddleName}
                  onChange={(e) => setRegMiddleName(e.target.value)}
                />
                <MDBInput
                  label="Last Name"
                  value={regLastName}
                  onChange={(e) => setRegLastName(e.target.value)}
                />
              </div>

              {/* Birthdate */}
              <MDBInput
                label="Birthdate"
                type="date"
                className="mb-3"
                value={regBirthdate}
                onChange={(e) => setRegBirthdate(e.target.value)}
              />

              <MDBBtn className="w-100" onClick={handleRegister}>
                Register
              </MDBBtn>
            </div>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Home;
