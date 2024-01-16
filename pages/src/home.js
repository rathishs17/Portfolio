import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PhoneIcon from '@mui/icons-material/Phone';
import Grid from '@mui/material/Grid';
import profileImage from './images/mentor3.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <Box sx={{ flexGrow: 3 } }>
      <AppBar position="fixed" sx={{ background: 'white', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'black', fontFamily: '"Poppins", sans-serif' }}>
            <b>Rathish</b>
          </Typography>
          <Link to="/" >
          <Button startIcon={<PersonIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', marginRight: 2, '&:hover': { textDecorationThickness: '2px', textDecorationOffset: '4px' , color:'grey' } }} color="inherit">
            Home
          </Button></Link>
          <Link to="/about" >
          <Button startIcon={<PersonIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', marginRight: 2, '&:hover': { textDecorationThickness: '2px', textDecorationOffset: '4px' , color:'grey' } }} color="inherit">
            About
          </Button></Link>
          <Button  startIcon={<TipsAndUpdatesIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', marginRight: 2, '&:hover': {   color:'grey' } }} color="inherit">
            Skills
          </Button>
          <Button startIcon={<WidgetsIcon sx={{ fontSize: '1.5rem' }} />}  sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', marginRight: 2, '&:hover': {  color:'grey' } }} color="inherit">
            Projects
          </Button>
          <Button startIcon={<PhoneIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', '&:hover': {  color:'grey' } }} color="inherit">
            Contact
          </Button>
        </Toolbar>
      </AppBar>

 
      <Box sx={{ marginTop: 10, padding: 4 }}>
        <Grid container spacing={3}>
          {/* Left Column (Image) */}
          <Grid item xs={12} md={6} textAlign="center" marginTop="8%">
            <img src={profileImage} alt="Profile" style={{ width: '50%', height: 'auto', borderRadius: 8 , animation: 'float 3s infinite'}} />
          </Grid>

          {/* Right Column (Text) */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ color :"grey", fontFamily: '"Poppins", sans-serif', textAlign: 'center' ,marginTop:'19%'}}>
              <h4><b color='grey'>Hello, I'm</b></h4> {/* Replace with your actual text */}
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: '"Poppins", sans-serif', textAlign: 'center' , marginTop: '-4%'}}>
              <h1><b color='grey'>Rathish</b></h1> {/* Replace with your actual text */}
            </Typography>
            <Typography variant="h5" sx={{ color:'grey',fontFamily: '"Poppins", sans-serif', textAlign: 'center', marginTop: '-4%' }}>
              <h2><b >Frontend Developer</b></h2> {/* Replace with your actual text */}
            </Typography>
<Typography  textAlign="center"><Button color="secondary" variant='outlined' sx={{ border: '1px solid black' , color: 'black',borderRadius:'13px' }}>Download CV</Button></Typography>
{<LinkedInIcon sx={{ fontSize: '2.3rem',marginTop:'6.5%',marginLeft:"43%" }} />}       
{<GitHubIcon sx={{ fontSize: '2.3rem', marginLeft:'4%'}} />}    </Grid>

        </Grid>
        
      </Box>
    </Box>

       </>

  );
}
