


import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "./Ticket.css";
import { ticketData } from "../../Data/TicketData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import t from "../../assets/ticket.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faMoneyBill,
  faMoneyBills,
} from "@fortawesome/free-solid-svg-icons";

function Ticket() {
  const limitedTicketData = ticketData.slice(0, 2); // Get the first two ticket details

  return (
    <div>
      <Card className="ticket-card">
        <CardContent>
          <Typography
            variant="h5"
            className="typo-card-content11">
            Ticket
          </Typography>

          {limitedTicketData.map((ticket, index) => (
            <Card key={index} className="ticket-details">
              <img src={t} className="ticket" />
              <CardContent>
                <Typography variant="h6" className="typo-card1">
                  {ticket.ticketData}
                </Typography>
                <div className="ticket-div" >
                  <Typography className="typo-card-content" variant="body1">
                    <FontAwesomeIcon
                      icon={faMoneyBills}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    {ticket.price}
                  </Typography>
                  <Typography variant="body1" className="typo-card-content1">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    {ticket.location}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="ticket-button">
            <Button className="button1" style={{ float: "right", marginBottom: "2px" }}>
              See More
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Ticket;
