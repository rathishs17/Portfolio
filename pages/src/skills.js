import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import html from  './images/htmllog.jpg';
import { Typography } from '@mui/material';
import css from  './images/csslog.jpg';
import java from  './images/javalog.jpg';
import c from  './images/clog.jpg';
import react from  './images/rlog.jpg';
import node from  './images/nodjs.jpg';
import git from  './images/gitlog.jpg';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CardContent from '@mui/material/CardContent';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import profileImage from './images/mentor3.jpg';

const Acheivement = (
  <React.Fragment >
<CardContent sx={{ 
      background: 'linear-gradient(45deg, #e6f7ff 30%, #fcd7e1 90%)', // Adjust the slightly lighter pink color code
     
}}>       
      <Typography variant="body2" marginTop="2%" sx={{
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '530', // 'semibold' is often equivalent to '600'
  fontSize: '1.3rem', // Adjust the font size as needed (x1)
}}>
<PlayArrowIcon/> Internshala Trainings-Web Development-jun 2023   <OpenInNewIcon/>
        <br  />
        <br />
        <PlayArrowIcon/> Internshala Trainings-Web Development-jun 2023    <OpenInNewIcon/>           
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </React.Fragment>
);


const Experiences = (
  <React.Fragment >
<CardContent sx={{ 
      background: 'linear-gradient(45deg, #e6f7ff 30%, #fcd7e1 90%)', // Adjust the slightly lighter pink color code
     
}}>       
      <Typography variant="body2" marginTop="2%" sx={{
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '500', // 'semibold' is often equivalent to '600'
  fontSize: '1.3rem', // Adjust the font size as needed (x1)
}}>
 <b><h3>Web Development Intern</h3></b>
 <p>TechnoHacks EduTech Official - Internship</p>
 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              fontSize: '1.1rem',
            }}>
Dec 2023 - 1 mon
<br/>
Remote
            </Typography>
            <Typography>
            Completed a dynamic [duration] internship in [industry], excelling in roles such as [specific responsibilities]. Achieved notable milestones, including [mention achievements], and developed strong skills in [list key skills]. Grateful for mentorship, excited to leverage gained experience in future endeavors.
            <br/>
            <p> <b>Skills : </b>Front-End Development</p>
            </Typography>

      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </React.Fragment>
);

export default function SimplePaper() {
  return (
    <>

      <AppBar position="fixed" sx={{background: 'transparent', boxShadow: 'none', backdropFilter: 'blur(7px)' }}>
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


      <Typography variant="h3" sx={{ marginBottom: '1rem' ,display:'flex',justifyContent:'center',alignItems:"center",marginTop:'7%',marginBottom:'4%'}}><b>Technical Skills</b></Typography>

    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 5,
          width: 100,
          height: 106,
        },
      }}
    >

     <Paper elevation={3} sx={{ display: '', alignItems: 'center', justifyContent: 'center',paddingLeft:'0%' }}>
        <Avatar src={java} alt="Skills Icon" sx={{ width: 100, height: 80 }} />
        <Typography sx={{paddingLeft:'38%',marginTop:'1%'}} ><b>Java</b></Typography>
      </Paper>
      <Paper elevation={3} sx={{ display: '', alignItems: 'center', justifyContent: 'center',paddingLeft:'0%' }}>
        <Avatar src={c} alt="Skills Icon" sx={{ width: 100, height: 80 }} />
        <Typography sx={{paddingLeft:'42%',marginTop:'1%'}} ><b>C</b></Typography>
      </Paper>
      <Paper elevation={3} sx={{ display: '', alignItems: 'center', justifyContent: 'center',paddingLeft:'0%' }}>
        <Avatar src={html} alt="Skills Icon" sx={{ width: 100, height: 80 }} />
        <Typography sx={{paddingLeft:'30%',marginTop:'1%'}} ><b>HTML</b></Typography>
      </Paper>
      <Paper elevation={3} sx={{ display: '', alignItems: 'center', justifyContent: 'center',paddingLeft:'0%' }}>
        <Avatar src={css} alt="Skills Icon" sx={{ width: 100, height: 80 }} />
        <Typography sx={{paddingLeft:'38%',marginTop:'1%'}} ><b>CSS</b></Typography>
      </Paper>
      <Paper elevation={3} sx={{ display: '', alignItems: 'center', justifyContent: 'center',paddingLeft:'0%' }}>
        <Avatar src="https://static.vecteezy.com/system/resources/previews/027/127/560/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="Skills Icon" sx={{ width: 100, height: 80 }} />
        <Typography sx={{paddingLeft:'38%',marginTop:'1%'}} ><b>JS</b></Typography>
      </Paper>
      <Paper elevation={3} sx={{ display: '', alignItems: 'center', justifyContent: 'center',paddingLeft:'0%' }}>
        <Avatar src={react} alt="Skills Icon" sx={{ width: 100, height: 80 }} />
        <Typography sx={{paddingLeft:'16%',marginTop:'1%'}} ><b>React JS</b></Typography>
      </Paper>
      <Paper elevation={3} sx={{ display: '', alignItems: 'center', justifyContent: 'center',paddingLeft:'0%' }}>
        <Avatar src={node} alt="Skills Icon" sx={{ width: 100, height: 80 }} />
        <Typography sx={{paddingLeft:'18%',marginTop:'1%'}} ><b>Node JS</b></Typography>
      </Paper>
      <Paper elevation={3} sx={{ display: '', alignItems: 'center', justifyContent: 'center',paddingLeft:'0%' }}>
        <Avatar src={git} alt="Skills Icon" sx={{ width: 100, height: 80 }} />
        <Typography sx={{paddingLeft:'18%',marginTop:'1%'}} ><b>Git hub</b></Typography>
      </Paper>
      
    </Box>


    <Typography variant="h3" sx={{ marginBottom: '1rem' ,display:'flex',justifyContent:'center',alignItems:"center",marginTop:'5%',marginBottom:'4%'}}><b>Certifications</b></Typography>
    

    <Box sx={{ marginTop: 5, padding: 4 }}>
        <Grid container spacing={3}>
          {/* Left Column (Image) */}
          <Grid item xs={12} md={6} textAlign="center" marginTop="0%">
          <Box sx={{ minWidth: 275 ,marginLeft:"5%",paddingLeft:"7%"}}>
      <Card variant="outlined">{Acheivement}</Card>
    </Box>
</Grid>
          {/* Right Column (Text) */}
          <Grid item xs={12} md={6}>
          
            <Box sx={{ minWidth: 275 ,marginLeft:"5%",paddingRight:"7%"}}>
      <Card variant="outlined">{Acheivement}</Card>
    </Box> 
   </Grid>
        </Grid>
        
      </Box>

      <Typography variant="h3" sx={{ marginBottom: '1rem' ,display:'flex',justifyContent:'center',alignItems:"center",marginTop:'5%',marginBottom:'4%'}}><b>Experiences</b></Typography>
      <Box sx={{ minWidth: 275 ,marginLeft:"7%",marginRight:"7%"}}>
      <Card variant="outlined">{Experiences}</Card>
    </Box>
    </>

  );
}


{/* <Grid item>
<Card sx={{ maxWidth: 300 }}>
  <CardMedia
    sx={{ height: 140 }}
    image="/static/images/cards/contemplative-reptile.jpg"
    title="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Lizard
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>
</Grid> */}