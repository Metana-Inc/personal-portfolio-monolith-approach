import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserRole, setNewUserRole] = useState("user"); // Default role is "user"
  const [editingUserId, setEditingUserId] = useState(null);
  const [editingUserName, setEditingUserName] = useState("");
  const [editingUserEmail, setEditingUserEmail] = useState("");
  const [editingUserRole, setEditingUserRole] = useState("");

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
      // Clear input fields after creation
      setNewUserName("");
      setNewUserEmail("");
      setNewUserPassword("");
      setNewUserRole("user");
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

  const updateUser = async (id) => {
    try {
      const response = await axios.put(`/api/users/${id}`, {
        name: editingUserName,
        email: editingUserEmail,
        role: editingUserRole,
      });
      console.log("User updated successfully:", response.data);
      fetchUsers(); // Refresh users list after update
      setEditingUserId(null); // Reset editing user state
      setEditingUserName("");
      setEditingUserEmail("");
      setEditingUserRole("");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleEditUser = (user) => {
    setEditingUserId(user._id);
    setEditingUserName(user.name);
    setEditingUserEmail(user.email);
    setEditingUserRole(user.role);
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3 fw-bold text-uppercase">Manage Users</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                {editingUserId === user._id ? (
                  <input
                    type="text"
                    value={editingUserName}
                    onChange={(e) => setEditingUserName(e.target.value)}
                    className="form-control"
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingUserId === user._id ? (
                  <input
                    type="email"
                    value={editingUserEmail}
                    onChange={(e) => setEditingUserEmail(e.target.value)}
                    className="form-control"
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUserId === user._id ? (
                  <select
                    value={editingUserRole}
                    onChange={(e) => setEditingUserRole(e.target.value)}
                    className="form-select"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                ) : (
                  user.role
                )}
              </td>
              <td>
                {editingUserId === user._id ? (
                  <button
                    onClick={() => updateUser(user._id)}
                    className="btn btn-success me-2"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditUser(user)}
                    className="btn btn-primary me-2"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => deleteUser(user._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
          <select
            value={newUserRole}
            onChange={(e) => setNewUserRole(e.target.value)}
            className="form-select mb-2"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
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
