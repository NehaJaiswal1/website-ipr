import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "./Ticket.css";
import { ticketData } from "../../Data/TicketData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import t from "../../assets/ticket.png";

function Ticket() {
  const limitedTicketData = ticketData.slice(0, 2); // Get the first two ticket details

  return (
    <div>
      <Card className="ticket-card">
        <CardContent>
          <Typography
            variant="h5"
            style={{ color: "#F8D673", float:'center' }}
          >
            Ticket
          </Typography>

          {limitedTicketData.map((ticket, index) => (
            <Card key={index} className="ticket-details">
              <img src={t} className="ticket" />
              <CardContent>
                <Typography variant="h6">{ticket.ticketData}</Typography>
                <Typography variant="body1">Price: {ticket.price}</Typography>
                <Typography variant="body1">
                  Location: {ticket.location}
                </Typography>
              </CardContent>
            </Card>
          ))}
          
          <div className="ticket-button">
            <Button style={{ float: "right", marginTop: "10px" }}>See More</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Ticket;
