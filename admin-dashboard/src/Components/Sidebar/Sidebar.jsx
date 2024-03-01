

import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Card } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAccessibleIcon,
  faAccusoft,
  faAdn,
  faAirbnb,
  faAlgolia,
  faAmilia,
  faAngular,
  faAtlassian,
  faCcDiscover,
  faCloudsmith,
  faTeamspeak,
} from "@fortawesome/free-brands-svg-icons";
import "./Sidebar.css";
import DashboardContent from "../DashboardContent/DashboardContent";
import Event from "../Event/Event";
import Schedule from "../Schedule/Schedule";
import Transaction from "../Transaction/Transaction";
import TestimonialContent from "../Testimonial/TestimonialContent";
import ContactQuery from "../ContactQuery/ContactQueryContent"
import { useNavigate} from 'react-router';
import { faCalendarAlt, faCalendarCheck, faListAlt, faQuestionCircle, faSignOutAlt, faTasksAlt, faThLarge, faThList } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  // const navigate = useNavigate();
  const [showDashboardContent, setShowDashboardContent] = useState(true);

  const handleDashboardClick = () => {
    setShowDashboardContent(true);
    setEventContent(false);
    setScheduleContent(false);
    setContactQueryContent(false);
    setTransactionContent(false);
  };

  const [eventContent, setEventContent] = useState(false);

  const handleEventClick = () => {
    setEventContent(true);
    setShowDashboardContent(false);
    setScheduleContent(false);
    setContactQueryContent(false);

    setTransactionContent(false);
  };

  const [scheduleContent, setScheduleContent] = useState(false);

  const handleScheduleClick = () => {
    setScheduleContent(true);
    setEventContent(false);
    setShowDashboardContent(false);
    setContactQueryContent(false);
    setTransactionContent(false);
    setTestimonialContent(false)
  };

  const [transactionContent, setTransactionContent] = useState(false);

  const handleTransactionClick = () => {
    setTransactionContent(true);
    setEventContent(false);
    setShowDashboardContent(false);
    setScheduleContent(false);
    setContactQueryContent(false);
  };


  const [testimonialContent, setTestimonialContent] = useState(false);

  const handleTestimonialClick = () => {
    setTestimonialContent(true);
    setEventContent(false);
    setShowDashboardContent(false);
    setScheduleContent(false);
    setTransactionContent(false);
    setContactQueryContent(false);
  }

  const [contactQueryContent, setContactQueryContent] = useState(false);

  const handleContactQueryClick = () => {
    setContactQueryContent(true);
    setTestimonialContent(false);
    setEventContent(false);
    setShowDashboardContent(false);
    setScheduleContent(false);
    setTransactionContent(false);
  }

  const handleLogOut=()=>{
    // navigate(`/`);

    console.log("Im sure you want to move to home ")
  }

  return (
    <>
      <div className="sidenav">
        <div className="profile-name">
          Hello, Admin
        </div>
        <div className="sidebar-item" 
        onClick={handleDashboardClick}>
          <FontAwesomeIcon icon={faListAlt} 
          style={{ marginTop: "20px" }} />
          <a href="#dashboard">
            Dashboard</a>
        </div>

        <div className="sidebar-item" onClick={handleEventClick}>
          <FontAwesomeIcon
            icon={faCalendarCheck}
            style={{ marginTop: "20px" }}
          />
          <a href="#dashboard">Event</a>
        </div>
        <div className="sidebar-item" onClick={handleScheduleClick}>
          <FontAwesomeIcon icon={faCalendarAlt} style={{ marginTop: "20px" }} />
          <a href="#dashboard">Schedule</a>
        </div>
        <div className="sidebar-item" onClick={handleTransactionClick}>
          <FontAwesomeIcon icon={faCcDiscover} style={{ marginTop: "20px" }} />
          <a href="#dashboard">Transaction</a>
        </div>
        <div className="sidebar-item" onClick={handleTestimonialClick}>
          <FontAwesomeIcon icon={faAlgolia} style={{ marginTop: "20px" }} />
          <a href="#dashboard">Testimonial</a>
        </div>
        <div className="sidebar-item" onClick={handleContactQueryClick}>
          <FontAwesomeIcon icon={faQuestionCircle} style={{ marginTop: "20px" }} />
          <a href="#dashboard">Query Support</a>
        </div>
        <div className="sidebar-item" onClick={handleLogOut}>
          <FontAwesomeIcon icon={faSignOutAlt} style={{ marginTop: "20px" }} />
          <a href="#dashboard">LogOut</a>
        </div>
      </div>
      <div className="sidebar-right">
        {showDashboardContent && <DashboardContent />}
        {eventContent && <Event/>}
        {scheduleContent && <Schedule/>}
        {transactionContent && <Transaction/>}
        {testimonialContent && 
        <TestimonialContent/>}
        {contactQueryContent && <ContactQuery/>}
      </div>
    </>
  );
}

export default Sidebar;
