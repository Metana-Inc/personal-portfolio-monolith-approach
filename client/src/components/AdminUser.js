import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserRole, setNewUserRole] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const createUser = async () => {
    try {
      const response = await axios.post("/api/users/register", {
        name: newUserName,
        email: newUserEmail,
        password: newUserPassword,
        role: newUserRole,
      });
      console.log("User created successfully:", response.data);
      fetchUsers(); // Refresh users list after creation
      setNewUserName(""); // Clear input fields
      setNewUserEmail("");
      setNewUserPassword("");
      setNewUserRole("");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`/api/users/${id}`);
      console.log("User deleted successfully:", response.data);
      fetchUsers(); // Refresh users list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3 fw-bold text-uppercase">Manage Users</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user._id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <span>{user.name}</span>
              <div>
                <button
                  onClick={() => deleteUser(user._id)}
                  className="btn btn-danger me-2"
                >
                  Delete
                </button>
                <button className="btn btn-primary">Edit</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h3 className="mb-3">Create New User</h3>
        <div className="mb-3">
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            className="form-control mb-2"
            placeholder="Enter new user name"
          />
          <input
            type="email"
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
            className="form-control mb-2"
            placeholder="Enter email"
          />
          <input
            type="password"
            value={newUserPassword}
            onChange={(e) => setNewUserPassword(e.target.value)}
            className="form-control mb-2"
            placeholder="Enter password"
          />
          <input
            type="text"
            value={newUserRole}
            onChange={(e) => setNewUserRole(e.target.value)}
            className="form-control"
            placeholder="Enter role"
          />
        </div>
        <button
          onClick={createUser}
          className="btn btn-primary"
          style={{
            backgroundColor: "#ff6300",
            borderColor: "#ff6300",
          }}
        >
          Create User
        </button>
      </div>
    </div>
  );
};

export default AdminUser;
