

import React from "react";
import NameBanner from "./NameBanner";
import Ticket from "./Ticket";
import VideoBanner from "./VideoBanner";
import Schedule from "./Schedule";
import User from "./User";
import "./DashboardContent.css";

function DashboardContent() {
  return (
    <div>
      <NameBanner />
      <div className="dashboard-div">
        <div>
          <Ticket />
          <User />
        </div>

        <div>
          <VideoBanner />
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
