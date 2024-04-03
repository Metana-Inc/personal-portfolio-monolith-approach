import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Link to="/admin/blogs" className="btn btn-primary mr-3">
        Manage Blogs
      </Link>
      <Link to="/admin/projects" className="btn btn-primary">
        Manage Projects
      </Link>

    </div>
  );
};

export default AdminDashboard;
