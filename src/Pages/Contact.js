import React from "react";
import "../Styles/Contact.css";
import pizzaLeft from "../Images/pizzaLeft.jpg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Contact() {
  return (
    <div className="Contact">
      <div
        className="contactLeft"
        style={{ backgroundImage: `url(${pizzaLeft})` }}
      >
        <div id="cover"></div>
      </div>

      <div className="contactRight">
        <Box
          component="form"
          className="box"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "50vw" },
          }}
          noValidate
        >
          <h1 className="h1">Contact Us</h1>
          <TextField
            id="standard-required"
            label="Full Name"
            variant="standard"
          />
          <TextField
            id="standard-required"
            label="Email Address"
            variant="standard"
          />
          <TextField
            id="standard-multiline-static"
            label="Message"
            multiline
            rows={4}
            variant="standard"
          />
          <button className="btn">Send</button>
        </Box>
      </div>
    </div>
  );
}

export default Contact;
