import React from 'react';
import { Box, Grid, Typography, Paper, Stack } from '@mui/material';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import email from './images/email.jpg';

const ContactInfo = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      '& > :not(style)': {
        m: 2,
        width: 324,
        height: 67,
        bgcolor: '#FFD6E5',
        borderRadius: '10px',
      },
    }}
  >
    {/* Email */}
    <Paper elevation={0}>
      <Stack direction="row" spacing={1} alignItems="center" marginTop="7%" marginLeft="8%">
        <img src={email} alt="API Icon" style={{ width: '2rem', height: '2rem', borderRadius: '50%', marginRight: '2%' }} />
        <Typography variant="body1">rathish2793@gmail.com</Typography>
      </Stack>
    </Paper>

    {/* Mobile */}
    <Paper elevation={0}>
      <Stack direction="row" spacing={1} alignItems="center" marginTop="7%" marginLeft="8%">
        <MobileFriendlyIcon color="secondary" />
        <Typography variant="body1"> 9342825949</Typography>
      </Stack>
    </Paper>
  </Box>
);

const ContactForm = ({ form, sendEmail }) => (
  
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="your name"
          style={{
            marginTop: '1%',
            paddingLeft: '9%',
            paddingRight: '9%',
            paddingTop: '1%',
            paddingBottom: '1%',
            border: '2px solid grey',
            borderRadius: '8px',
            backgroundColor: '#ADD8E6',
          }}
        />
        <input
          type="email"
          name="user_email"
          placeholder="your email"
          style={{
            marginTop: '1%',
            paddingLeft: '9%',
            paddingRight: '9%',
            paddingTop: '1%',
            paddingBottom: '1%',
            borderRadius: '8px',
            border: '2px solid grey',
            backgroundColor: '#ADD8E6',
          }}
        />
        <textarea
          name="message"
          placeholder="Type your message here .."
          style={{
            marginTop: '2%',
            paddingLeft: '9%',
            paddingRight: '9%',
            paddingTop: '1%',
            paddingBottom: '8%',
            border: '2px solid grey',
            borderRadius: '8px',
            backgroundColor: '#ADD8E6',
          }}
        />
        <input
          type="submit"
          value="Send Message"
          style={{
            marginTop: '1.5%',
            paddingLeft: '0.8%',
            paddingRight: '0.8%',
            paddingTop: '0.3%',
            paddingBottom: '0.3%',
            backgroundColor: '#000080',
            color: 'white',
            borderRadius: '6px',
          }}
        />
      </form>
);

const ContactBox = ({ form, sendEmail }) => (
  <Box sx={{ marginTop: 10, padding: 4 }}>
    <Grid container spacing={3}>
      {/* Left Column (Contact Info) */}
      <ContactInfo />

      {/* Right Column (Contact Form) */}
      <ContactForm form={form} sendEmail={sendEmail} />

      {/* Additional Grid items or components */}
    </Grid>
  </Box>
);

const ContactPage = () => (
  <>
    {/* Additional components or layout */}
    {/* ... */}

    {/* Contact Box */}
    <ContactBox />

    {/* Additional components or layout */}
    {/* ... */}
  </>
);

export default ContactPage;
