import React from "react";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";

const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
  return <h2>Dashboard</h2>;
};

export default Dashboard;
