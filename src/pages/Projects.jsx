import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Handle Add or Update
  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) return;

    if (editIndex !== null) {
      // Update existing project
      const updated = [...projects];
      updated[editIndex] = { title, description };
      setProjects(updated);
      setEditIndex(null);
    } else {
      // Add new project
      setProjects([...projects, { title, description }]);
    }

    setTitle("");
    setDescription("");
  };

  // Handle Edit
  const handleEdit = (index) => {
    setTitle(projects[index].title);
    setDescription(projects[index].description);
    setEditIndex(index);
  };

  // Handle Delete
  const handleDelete = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    setProjects(updated);
  };

  return (
    <MDBContainer className="mt-4">
      <MDBRow className="mb-4">
        <MDBCol>
          <h2 className="text-center">Projects</h2>
        </MDBCol>
      </MDBRow>

      {/* Add/Edit Form */}
      <MDBRow className="mb-4">
        <MDBCol md="5">
          <MDBInput
            label="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </MDBCol>
        <MDBCol md="5">
          <MDBInput
            label="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </MDBCol>
        <MDBCol md="2" className="d-flex align-items-center">
          <MDBBtn onClick={handleSubmit} color="success" className="w-100">
            {editIndex !== null ? "Update" : "Add"}
          </MDBBtn>
        </MDBCol>
      </MDBRow>

      {/* Projects Table */}
      <MDBTable striped bordered>
        <MDBTableHead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Title</th>
            <th className="text-center">Description</th>
            <th className="text-center">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {projects.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">
                No projects yet
              </td>
            </tr>
          ) : (
            projects.map((proj, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{proj.title}</td>
                <td className="text-center">{proj.description}</td>
                <td className="text-center">
                  <MDBBtn
                    color="info"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </MDBBtn>
                  <MDBBtn
                    color="danger"
                    size="sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </MDBBtn>
                </td>
              </tr>
            ))
          )}
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}


export default Projects; // 🔥 this line is required



