import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star'; // Replace with your desired icon
import EmailIcon from '@mui/icons-material/Email';
import email from './images/email.jpg';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
export default function SimplePaper1() {
  return (
    <>
<Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'black', fontFamily: '"Poppins", sans-serif' ,display:"flex",justifyContent:"center",marginTop:"4%",marginBottom:"3%"}}>
            <b>Take a Cappuccino & Chat with me </b>
            
          </Typography>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': {
          m: 2,
          width: 324, // Increased width
          height: 67, // Decreased height
          bgcolor: '#FFD6E5', // Pink background color
          borderRadius:'10px'

        },
      }}
    >
      <Paper elevation={0}>
        <Stack direction="row" spacing={1} alignItems="center" marginTop="7%" marginLeft="8%">
        <img src={email} alt="API Icon" style={{ width: '2rem', height: '2rem', borderRadius: '50%',marginRight:"2%" }} />
          <Typography variant="body1">hii@rathish.com</Typography>
        </Stack>
      </Paper>
      <Paper elevation={0}>
      <Stack direction="row" spacing={1} alignItems="center" marginTop="7%" marginLeft="8%">
          <MobileFriendlyIcon color="secondary" />
          <Typography variant="body1" > 987654321</Typography>
        </Stack>
      </Paper>

      
     
    </Box>




<br/>

<br/>



    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': {
          m: 0,
          width: 524, // Increased width
          height: 53, // Decreased height
          bgcolor: '#ADD8E6', // Pink background color
          marginTop:"2%",
          borderRadius:'10px',




        },
      }}
    >
      <Paper elevation={0}>
        <Stack direction="row" spacing={1} alignItems="center" marginTop="2.5%" marginLeft="8%">
        <input
            type="text"
            placeholder="your name"

            style={{
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: 'transparent',
            }}
          />
        </Stack>
      </Paper> 
      <Paper elevation={0}>
        <Stack direction="row" spacing={1} alignItems="center" marginTop="2.5%" marginLeft="8%">
        <input
            type="text"
          placeholder='your email'
            style={{
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: 'transparent',
            }}
          />
        </Stack>
      </Paper> 
    </Box>





    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': {
          m: 0,
          width: 524, // Increased width
          height: 153, // Decreased height
          bgcolor: '#ADD8E6', // Pink background color
          marginTop:"2%",
          borderRadius:'10px'


        },
      }}
    >
      
      <Paper elevation={0}>
        <Stack direction="row" spacing={1} alignItems="center" marginTop="2.5%" marginLeft="8%">
          <input
            type="text"
            placeholder="Type your message here..."

            style={{
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: 'transparent',
            }}
          />
        </Stack>
      </Paper>
      
    </Box>
    <Button
        sx={{
          width: '80px', // Adjusted width
          height: '30px', // Adjusted height
          marginTop: '2%',
          marginLeft:'46%' ,
          color:"white",
          backgroundColor:"purple"// Adjusted marginTop
        }}
      >
        Submit
      </Button>
      <Grid marginLeft="46.3%" marginTop="7%">
<Typography >copyright </Typography>
<Grid  marginTop="4%" marginLeft="-1%">
<Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
      <HomeIcon style={{ fontSize: '1.7rem' }} />
    </Link>
{<LinkedInIcon sx={{ fontSize: '1.7rem'}} />}       
{<GitHubIcon sx={{ fontSize: '1.7rem'}} />}    
</Grid>

      </Grid>
      
    </>

  );
}
