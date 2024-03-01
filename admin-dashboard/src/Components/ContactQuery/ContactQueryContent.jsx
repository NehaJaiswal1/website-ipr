

import React, { useState } from "react";
import {
  Select,
  MenuItem,
  Button,
  FormControl,
  TextField,
  Typography,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
   Modal,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faQuestionCircle,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { queryData } from "../../Data/ContactQuery";

function ContactQueryContent() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendQuery=()=>{
    console.log("Congratuations on submit")
  }

  return (
    <div
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
        border: "10px",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      {/* <FormControl style={{ width: '500px', height: '500px', padding: '10px' }}>
        <Select
          label="Email"
          variant="outlined"
          defaultValue=""
        >
          <MenuItem value="" disabled>Select an Email</MenuItem>
          <MenuItem value="email1@example.com">email1@example.com</MenuItem>
          <MenuItem value="email2@example.com">email2@example.com</MenuItem>
          <MenuItem value="email3@example.com">email3@example.com</MenuItem>
        </Select>
        <TextField
          label="Message"
          placeholder="Type your Message Here"
          variant="outlined"
          
          style={{ marginTop: '20px' , marginBottom: '30px',height:'20px'}}
          
        />
        <Button variant="contained" color="primary" style={{ marginTop: '30px' ,  width: '30%', justifyContent:'center'}}>
          send
        </Button>
      </FormControl> */}

      <TableContainer style={{ borderRadius: "10px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  textAlign: "left",
                  color: "#2d3748",
                  fontSize: "1rem",
                  backgroundColor: "#e2e8f0",
                }}
              >
                Name
              </TableCell>
              <TableCell
                style={{
                  textAlign: "left",
                  color: "#2d3748",
                  fontSize: "1rem",
                  backgroundColor: "#e2e8f0",
                }}
              >
                Email
              </TableCell>
              <TableCell
                style={{
                  textAlign: "left",
                  color: "#2d3748",
                  fontSize: "1rem",
                  backgroundColor: "#e2e8f0",
                }}
              >
                Message
              </TableCell>
              <TableCell
                style={{
                  textAlign: "left",
                  color: "#2d3748",
                  fontSize: "1rem",
                  backgroundColor: "#e2e8f0",
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {queryData.map((data, index) => (
              <TableRow
                style={{
                  backgroundColor: index % 2 === 0 ? "#fff" : "#e2e8f0",
                }}
              >
                
                <TableCell
                  tyle={{ textAlign: "left", borderBottom: "1px solid #ccc" }}
                >
                  {data.Name}
                </TableCell>
                <TableCell
                  tyle={{ textAlign: "left", borderBottom: "1px solid #ccc" }}
                >
                  {data.email}
                </TableCell>
                <TableCell
                  tyle={{ textAlign: "left", borderBottom: "1px solid #ccc" }}
                >
                  {data.Message}
                </TableCell>

                <TableCell
                  style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}
                >
                  <Button style={{ fontSize: "12px" }}  onClick={handleOpen} >
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog Box */}
      {/* {dialogOpen && (
        <div>
          <form>
            <Typography variant="h6">
              Query Support
            </Typography>
            <TextField
              label="Email"
              placeholder="Type your Email Here"
              variant="outlined"
              fullWidth
              required
              autoComplete="email"
            />
            <TextField
              label="Subject"
              multiline
              rows={1}
              variant="outlined"
              name="subject"
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              name="message"
              required
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Send
            </Button>
          </form>
        </div>
      )} */}

{/* <Button onClick={handleOpen}>Open Modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          backgroundColor: 'white',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <form>
            <Typography variant="h6">
              Query Support
            </Typography>
            <TextField
              label="Email"
              placeholder="Type your Email Here"
              variant="outlined"
              fullWidth
              required
              autoComplete="email"
            />
            <TextField
              label="Subject"
              multiline
              rows={1}
              variant="outlined"
              name="subject"
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              name="message"
              required
              fullWidth
              margin="normal"
            />
            <Button type="submit" onClick={handleSendQuery} variant="contained" color="primary">
              Send
            </Button>
            <Button type="submit" onClick={handleClose} variant="contained" color="primary">
              Cancel
            </Button>
          </form>
        </div>
      </Modal>

     

      {/* <form className=" overflow-hidden">
        <Typography
          variant="h6"
          style={{ marginTop: "10px", display: "flex", alignItems: "center" }}
        >
          <FontAwesomeIcon
            icon={faQuestionCircle}
            style={{ marginRight: "8px" }}
          />
          Query Support
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              placeholder="Type your Email Here"
              variant="outlined"
              style={{ marginTop: "10px" }}
              fullWidth
              required
              autoComplete="email"
            />
            <TextField
              label="Subject"
              multiline
              rows={1}
              variant="outlined"
              name="subject"
              // value={queryData.subject}
              // onChange={handleQueryChange}
              required
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              name="message"
              // value={queryData.message}
              // onChange={handleQueryChange}
              required
              fullWidth
              margin="normal"
            />
          </Grid>
          <Button
            type="button"
            variant="contained"
            color="primary"
            // onClick={handleSendQuery}
            style={{
              backgroundColor: "rgb(30 58 138)",
              borderRadius: "20px",
              marginLeft: "8px",
              boxShadow: "2px 2px 2px rgb(30 58 140)",
            }}
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              style={{ marginRight: "8px" }}
            />
            Send
          </Button>
         
        </Grid>
      </form> */}
    </div>
  );
}

export default ContactQueryContent;
