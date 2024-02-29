import React from "react";
import Box from "@mui/material/Box";
import { Button, Card } from "@mui/material";
import { purple } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faGooglePlus,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <Box
      height={700}
      width={200}
      // my={1}
      // display="grid"
      alignItems="center"
      // gap={10}
      p={1}
      sx={{ border: "2px solid gray" }}
    >
      <Card 
      sx={{width: 200, height: 700, backgroundColor: "",}}
      >
        <Button sx={{padding: 3, marginLeft:3, fontSize: 15,  color:'#080942',}}>Events</Button>
        <Button sx={{padding: 3, marginLeft:2,  color:'#080942',}}>Schedule</Button>
        <Button sx={{padding: 3, marginLeft:2,  color:'#080942',}}>Testimonials</Button>
        <Button sx={{padding: 3, marginLeft:2,  color:'#080942',}}>Contact Query</Button>
        <Button sx={{padding: 3, marginLeft:2,  color:'#080942',}}>Logout</Button>
      </Card>
    </Box>
  );
}

export default Sidebar;
