import React, { useState } from "react";
import ActiveRides from "../ActiveRides/ActiveRides";
import HistoryRides from "../RideHistory/RideHistory";
import "./RideDashboard.css";
import RiderSidebar from "../RideSidbar/RiderSidebar";

const RiderDashboard = () => {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="rider-dashboard">
      <RiderSidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="dashboard-content">
        {activeTab === "active" && <ActiveRides />}
        {activeTab === "history" && <HistoryRides />}
      </div>
    </div>
  );
};

export default RiderDashboard;
