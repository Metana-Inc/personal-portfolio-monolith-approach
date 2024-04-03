import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Link to="/admin/blogs" className="btn btn-primary">
        Manage Blogs
      </Link>
    </div>
  );
};

export default AdminDashboard;
