import React, { useRef } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import RoomIcon from '@mui/icons-material/Room';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import email from './images/email.jpg';
import emailjs from '@emailjs/browser';

import Stack from '@mui/material/Stack'; // Import Stack

export default function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sckwt1d', 'template_so0tvy8', form.current, 'EbVtOiJzgpt0jj69d')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id='contact'>
      <Typography
        variant="h4"
        component="div"
        sx={{
          color: 'white',
          fontFamily: '"Poppins", sans-serif',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '4%',
          marginBottom: '3%',
        }}
      >
        <b>Let's Connect Over Coffee </b>
      </Typography>
      <Box sx={{ border: "2px solid white", borderRadius: "30px", width: "70%", marginLeft: "16%", marginBottom: "0%" }}>
        <Box sx={{ marginTop: 6, padding: 2, marginLeft: 7 }}>
          <Grid container spacing={3}>
          <Grid item xs={12} md={6} textAlign="" marginTop="0%">
  <Grid container spacing={2} direction="column"> {/* Added container with direction column */}
    <Grid item>
      <Typography marginBottom="7%"><h1>Contact Info</h1></Typography> {/* Moved inside Grid item */}
    </Grid>
    <Grid item>
      <Stack direction="row" spacing={1} alignItems="center">
        <EmailIcon />
        <Typography>rathish2793@gmail.com</Typography>
      </Stack>
    </Grid>
    <Grid item>
      <Stack direction="row" spacing={1} alignItems="center">
        <MobileFriendlyIcon />
        <Typography>9342825949</Typography>
      </Stack>
    </Grid>
    <Grid item>
      <Stack direction="row" spacing={1} alignItems="center">
        <RoomIcon />
        <Typography>Coimbatore</Typography>
      </Stack>
    </Grid>
    <Grid item>
      <Stack direction="row" spacing={2} alignItems="center" marginTop="10%" marginLeft="0.5%" fontSize="9rem">
        <GitHubIcon sx={{ fontSize: '2.5rem' }} />
        <LinkedInIcon sx={{ fontSize: '2.5rem' }} />
      </Stack>
    </Grid>
  </Grid>
</Grid>

            <Grid item xs={12} md={6} textAlign="center" paddingBottom="8%">
            <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '80%',
          justifyContent: 'center',
          marginRight: '10%',
        }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="your name"
          style={{
            marginTop: '1%',
            paddingLeft: '5%',
            paddingRight: '9%',
            paddingTop: '3%',
            paddingBottom: '3%',
            boxShadow: '0px 0px 1px 1px rgba(0, 2z5, 255, 0.2), 0 1px 1px 0 rgba(0, 255, 255, 0.19)',

            border: '2px solid grey',
            borderRadius: '8px',
            backgroundColor: '#F0FFFF	',
          }}
        />
        <input
          type="email"
          name="user_email"
          placeholder="your email"
          style={{
            marginTop: '3%',
            paddingLeft: '5%',
            paddingRight: '9%',
            paddingTop: '3%',
            paddingBottom: '3%',
            boxShadow: '0px 0px 0.1px 0.1px rgba(0, 2z5, 255, 0.2), 0 0.1px 0.1px 0 rgba(0, 255, 255, 0.19)',

            borderRadius: '8px',
            border: '2px solid grey',
            backgroundColor: '#F0FFFF	',
          }}
        />
        <textarea
          name="message"
          placeholder="Type your message here .."
          style={{
            marginTop: '3%',
            paddingLeft: '5%',
            paddingRight: '9%',
            paddingTop: '3%',
            paddingBottom: '10%',
            boxShadow: '0px 0px 0.1px 0.1px rgba(0, 2z5, 255, 0.2), 0 0.1px 0.1px 0 rgba(0, 255, 255, 0.19)',

            border: '2px solid grey',
            borderRadius: '8px',
            backgroundColor: '#F0FFFF	',
          }}
        />
        <input
          type="submit"
          value="Send Message"
          style={{
            marginTop: '6.5%',
            paddingLeft: '5%',
            paddingRight: '8%',
            paddingTop: '3%',
            paddingBottom: '3%',
            backgroundColor: '#000080',
            color: 'white',
            boxShadow: '0px 0px 2px 1px rgba(0, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 255, 255, 0.19)',
borderColor:"blue",
            width: '150px',  
            marginLeft:'500x',
            borderRadius: '11px',
            fontSize:'15px',
            cursor: 'pointer' // Adding cursor style when hovering

          }}
        />
      </form>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid container justifyContent="center" marginTop="3.3%" paddingBottom="2%" spacing={2} bgcolor="lack">
        <Grid item>
          <Typography>Developed by Rathish 💜</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
