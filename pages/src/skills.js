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
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Acheivement = (
  <React.Fragment >
<CardContent sx={{ 
      background: 'linear-gradient(45deg, #e6f7ff 30%, #fcd7e1 90%)', 
     
}}>       
      <Typography variant="body2" marginTop="2%" sx={{
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '530', 
  fontSize: '1.3rem', 
}}>
<PlayArrowIcon/> Internshala Trainings-Web Development-jun 2023   
<a href="https://drive.google.com/file/d/1xwRQkCUgdlctFl7E0uuVifi4UvPnP1bd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <OpenInNewIcon  />
        </a>
        <br  />
        <br />
        <PlayArrowIcon/> Internshala Trainings-Core Java-july 2023   
        <a href="https://drive.google.com/file/d/1JQzUJR-eh5r9vK4hA7twQ1KQawELzKTv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <OpenInNewIcon  />
        </a>         
      </Typography>
    </CardContent>
    
  </React.Fragment>
);

const Acheivement1 = (
  <React.Fragment >
<CardContent sx={{ 
      background: 'linear-gradient(45deg, #e6f7ff 30%, #fcd7e1 90%)', 
     
}}>       
      <Typography variant="body2" marginTop="2%" sx={{
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '530', 
  fontSize: '1.3rem', 
}}>
<PlayArrowIcon/> SKOLAR-Full Stack Web Development   
<a href="https://drive.google.com/file/d/1pt_yq6SoO_cGwEk-8lpzRtNno3PGxa4I/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <OpenInNewIcon  />
        </a>
        <br  />
        <br />
        <PlayArrowIcon/> Udemy-React JS   
        <a href="https://drive.google.com/file/d/1O-cmjV_SzFvjfxaCUtTBe-Lf_t43irHc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <OpenInNewIcon  />
        </a>    
      </Typography>
    </CardContent>
  </React.Fragment>
);





const Experiences = (
  <React.Fragment >
<CardContent sx={{ 
      background: 'linear-gradient(45deg, #e6f7ff 30%, #fcd7e1 90%)',
     
}}>       
      <Typography variant="body2" marginTop="2%" sx={{
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '500', 
  fontSize: '1.3rem',
}}>
 <b><h3>Full Stack Web Development Intern</h3></b>
 <p>SKOLAR - Internship</p>
 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              fontSize: '1.1rem',
            }}>
October 2023 to 30 December 2023 - 3 months<br/>
Remote
            </Typography>
            <Typography>
            Completed a dynamic 3 months internship in SKOLAR, excelling in roles such as:
          <ul>
          <li>Collaborated with the development team to design and implement responsive user interfaces using HTML, CSS, and JavaScript.</li>
            <li>Assisted in the integration of back-end functionalities using Node.js, Express, and MongoDB.</li>
            <li>Conducted thorough testing, identified and fixed bugs, resulting in a 20% improvement in application performance.</li>          </ul>
          
          Developed strong skills in : <b>HTML, CSS, javaScript, MongoDB, React.js, Node.js, Express.js</b> 
          <ul>
          <li>Full-stack web development, including proficiency in MERN stack technologies.</li>
            <li>Problem-solving and debugging, ensuring smooth and error-free application functionality.</li>          </ul>
          Grateful for mentorship, excited to leverage gained experience in future endeavors.
          <br />
            
            <p> Skills : <b>Full Stack Web Development</b></p>
            <p> Final Project : <b>Login and signup page using React.js and Node.js</b></p>

            </Typography>

      </Typography>
    </CardContent>
  </React.Fragment>
);





export default function SimplePaper() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
    <div id='skill'>
     <Box sx={{ flexGrow: 3 ,id:"skillss" }}>
        {/* <AppBar position="fixed" sx={{ background: 'white', boxShadow: 'none' }}>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'black', fontFamily: '"Poppins", sans-serif' }}>
              <b>Rathish</b>
            </Typography>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                edge="start"
                color="black"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button startIcon={<PersonIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', marginRight: 2 }}>Home</Button>
              </Link>
              <Link to="/about" style={{ textDecoration: 'none' }}>
                <Button startIcon={<PersonIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', marginRight: 2 }}>About</Button>
              </Link>
              <Link to="/skills" style={{ textDecoration: 'none' }}>
                <Button startIcon={<TipsAndUpdatesIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', marginRight: 2 }}>Skills</Button>
              </Link>
              <Link to="/projects" style={{ textDecoration: 'none' }}>
                <Button startIcon={<WidgetsIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', marginRight: 2 }}>Projects</Button>
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button startIcon={<PhoneIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem' }}>Contact</Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={toggleDrawer}
        >
          <List>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button onClick={toggleDrawer}>
                <Typography variant="h6">Home</Typography>
              </ListItem>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button onClick={toggleDrawer}>
                <Typography variant="h6">About</Typography>
              </ListItem>
            </Link>
            <Link to="/skills" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button onClick={toggleDrawer}>
                <Typography variant="h6">Skills</Typography>
              </ListItem>
            </Link>
            <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button onClick={toggleDrawer}>
                <Typography variant="h6">Projects</Typography>
              </ListItem>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button onClick={toggleDrawer}>
                <Typography variant="h6">Contact</Typography>
              </ListItem>
            </Link>
          </List>
        </Drawer> */}


      <Typography variant="h3" sx={{ marginBottom: '1rem' ,display:'flex',justifyContent:'center',alignItems:"center",marginTop:'8%',marginBottom:'4%'}}><b>Technical Skills</b></Typography>

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


    <Typography variant="h3" sx={{ marginBottom: '1rem' ,display:'flex',justifyContent:'center',alignItems:"center",marginTop:'4%',marginBottom:'4%'}}><b>Certifications</b></Typography>
    

    <Box sx={{ marginTop: 5, padding: 4 }}>
        <Grid container spacing={3}>
          {/* Left Column (Image) */}
          <Grid item xs={12} md={6} textAlign="" marginTop="0%">
          <Box sx={{ minWidth: 275 ,marginLeft:"5%",paddingLeft:"7%"}}>
      <Card variant="outlined">{Acheivement}</Card>
    </Box>
</Grid>
          <Grid item xs={12} md={6}>
          
            <Box sx={{ minWidth: 275 ,marginLeft:"5%",paddingRight:"7%"}}>
      <Card variant="outlined">{Acheivement1}</Card>
    </Box> 
   </Grid>
        </Grid>
        
      </Box>

      <Typography variant="h3" sx={{ marginBottom: '1rem' ,display:'flex',justifyContent:'center',alignItems:"center",marginTop:'4%',marginBottom:'4%'}}><b>Experiences</b></Typography>
      <Box sx={{ minWidth: 275 ,marginLeft:"7%",marginRight:"7%"}}>
      <Card variant="outlined">{Experiences}</Card>
    </Box>
    </Box>

    </div>
    </>

  );
}
