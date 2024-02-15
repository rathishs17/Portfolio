import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PhoneIcon from '@mui/icons-material/Phone';
import Grid from '@mui/material/Grid';
import profileImage from './images/mentor3.jpg';
import me from './images/rathishpic.png';

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
          <Link to="/skills" >
          <Button  startIcon={<TipsAndUpdatesIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', marginRight: 2, '&:hover': {   color:'grey' } }} color="inherit">
            Skills
          </Button></Link>
          <Link to="/projects" >
          <Button startIcon={<WidgetsIcon sx={{ fontSize: '1.5rem' }} />}  sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', marginRight: 2, '&:hover': {  color:'grey' } }} color="inherit">
            Projects
          </Button></Link>
          <Link to="/contact" >
          <Button startIcon={<PhoneIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', '&:hover': {  color:'grey' } }} color="inherit">
            Contact
          </Button></Link>
        </Toolbar>
      </AppBar>

 
      <Box sx={{ marginTop: 10, padding: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} textAlign="center" marginTop="3%">
            <img src={me} alt="Profile" style={{ width: '70%', height: 'auto', borderRadius: 8 , animation: 'float 3s infinite'}} />
          </Grid>













          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ color :"grey", fontFamily: '"Poppins", sans-serif', textAlign: 'center' ,marginTop:'19%'}}>
              <h4><b color='grey'>Hello, I'm</b></h4> 
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: '"Poppins", sans-serif', textAlign: 'center' , marginTop: '-4%'}}>
              <h1><b color='grey'>Rathish</b></h1> 
            </Typography>
            <Typography variant="h5" sx={{ color:'grey',fontFamily: '"Poppins", sans-serif', textAlign: 'center', marginTop: '-4%' }}>
              <h2><b >MERN Stack Developer</b></h2> 
            </Typography>

{/* <a href='Skolar - Internship Completion Certificate _ RATHISH S.pdf'><Typography  textAlign="center"><Button color="secondary" variant='outlined' sx={{ border: '1px solid black' , color: 'black',borderRadius:'13px' }}>Download CV</Button></Typography></a> */}
<a href='https://drive.google.com/file/d/18e1lGIA2DN_sm6EkcatZpuGqS3If8I3u/view?usp=sharing'>
  <Typography textAlign="center">
    <Button color="secondary" variant='outlined' sx={{ border: '1px solid black', color: 'black', borderRadius: '13px' }}>
      VIEW CV
    </Button>
  </Typography>
</a>

<a href="https://www.linkedin.com/in/rathish-s-301b28269
" target="_blank" rel="noopener noreferrer">
  <LinkedInIcon sx={{ fontSize: '2.3rem', marginTop:'6.5%', marginLeft:"43%"}} />
</a>
<a href="https://github.com/rathishs17" target="_blank" rel="noopener noreferrer">
  <GitHubIcon sx={{ fontSize: '2.3rem', marginTop:'6.5%', marginLeft:"1.5%" }} />
</a>
   </Grid>

        </Grid>
        
      </Box>
    </Box>

       </>

  );
}


