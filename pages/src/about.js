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
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import profileImage1 from './images/mentor3.jpg';
import profileImage from './images/rathishai.jpg';
import achieves from './images/acheive.jpg';

import redu from './images/rathishedu.jpg';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SchoolIcon from '@mui/icons-material/School';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


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
<PlayArrowIcon/> 2nd prize in Circuit Debugging at Akshaya College of Engineering   
{/* <OpenInNewIcon/> */}
          <br  />
          <br />
          <PlayArrowIcon/> Participated in Accenture Innovation Challenge 2023   
          <br  />
          <br />       
          <PlayArrowIcon/> Participated in SOCIO-TECH HACKATHON-2024  organized by   KPRCAS           
  
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </React.Fragment>
  );



  const card = (
    <React.Fragment>
      <Card>
      <CardContent sx={{ 
        background: 'linear-gradient(45deg, #e6f7ff 30%, #fcd7e1 90%)', // Adjust the slightly lighter pink color code
        display: 'flex', 
  alignItems: 'center' 
}}>          {<SchoolIcon sx={{ fontSize: '2.3rem',marginRight:"3.5%", marginBottom:"13.5%" }} />}       
          <div>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              fontSize: '1.2rem',
            }}>
BACHELOR OF ENGINEERING            </Typography>
            <Typography variant="h5" component="div" marginTop="2%" sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              fontSize: '1.2rem',
            }}>
KARPAGAM COLLEGE OF ENGINEERING            </Typography>
            <Typography variant="body2" marginTop="1.5%" sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              fontSize: '1.2rem',
            }}>
              2021 - present
              <br />
CGPA - 8.04
            </Typography>
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
  
  const card2 = (
    <React.Fragment>
      <Card>
      <CardContent sx={{ 
        background: 'linear-gradient(45deg, #e6f7ff 30%, #fcd7e1 90%)', // Adjust the slightly lighter pink color code
        display: 'flex', 
  alignItems: 'center' 
}}>
          {<SchoolIcon sx={{ fontSize: '2.3rem',marginRight:"3.5%", marginBottom:"13.5%" }} />}       
          <div>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              fontSize: '1.2rem',
            }}>
              HIGHER EDUCATION
            </Typography>
            <Typography variant="h5" component="div" marginTop="2%" sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              fontSize: '1.2rem',
            }}>
              RN MATRIC HR SEC SCHOOL
            </Typography>
            <Typography variant="body2" marginTop="1.5%" sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              fontSize: '1.2rem',
            }}>
              2019-2020
              <br />
              percentage - 89.4%
            </Typography>
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
  

  const card3 = (
    <React.Fragment>
      <Card>
      <CardContent sx={{ 
        background: 'linear-gradient(45deg, #e6f7ff 30%, #fcd7e1 90%)', // Adjust the slightly lighter pink color code
        display: 'flex', 
  alignItems: 'center' 
}}>          {<SchoolIcon sx={{ fontSize: '2.3rem',marginRight:"3.5%", marginBottom:"13.5%" }} />}       
          <div>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              fontSize: '1.2rem',
            }}>
              HIGHER SECONDARY EDUCATION
            </Typography>
            <Typography variant="h5" component="div" marginTop="2%" sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              fontSize: '1.2rem',
            }}>
              BHARANI PARK MATRIC HR SEC SCHOOL
            </Typography>
            <Typography variant="body2" marginTop="1.5%" sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              fontSize: '1.2rem',
            }}>
              2020-2021
              <br />
              percentage - 92%
            </Typography>
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
  

export default function About() {

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
    <div id='about'>

    <Box sx={{ flexGrow: 3 }}>
      {/*   <AppBar position="fixed" sx={{ background: 'white', boxShadow: 'none' }}>
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

 
      <Box sx={{ marginTop: 10, padding: 4 }}>
        <Grid container spacing={3}>
          {/* Left Column (Image) */}
          <Grid item xs={12} md={6} textAlign="center" marginTop="2.3%">
            <img src={profileImage} alt="Profile" style={{ width: '50%', height: 'auto', borderRadius: 8 , animation: 'float 3s infinite'}} />
          </Grid>

          {/* Right Column (Text) */}
          <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontFamily: '"Poppins", sans-serif', textAlign: 'center' , marginTop: '-4%'}}>
              <h1><b color='grey'>About me</b></h1> {/* Replace with your actual text */}
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins, sans-serif', textAlign: 'center', marginTop: '0%', letterSpacing: '0.5px', fontSize: '1.2rem' }}>
            <Typography
  variant="body1" // or "body2" depending on your design
  sx={{
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'justify',
    fontSize: '1.25rem', // Adjust the font size as needed
    lineHeight: '1.6',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>
  {/* Your text content goes here */}
  Hello! I'm Rathish, a dedicated developer with expertise in the MERN stack. My web development journey has honed my skills in MongoDB, Express.js, React.js, and Node.js, allowing me to create dynamic and scalable applications. Beyond coding, my strong foundation in mathematics enhances my problem-solving approach. Committed to continuous learning, I merge technical proficiency with a creative mindset to deliver high-quality solutions. Outside of coding, you'll find me exploring mathematical concepts and transforming ideas into reality.





</Typography>
</Typography>


           
               </Grid>

        </Grid>
        
      </Box>
    </Box>








    <Box sx={{ flexGrow: 3 } }>
    
 
      <Box sx={{ marginTop: 5, padding: 4 }}>
        <Grid container spacing={3}>
          {/* Left Column (Image) */}
         

          {/* Right Column (Text) */}
          <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontFamily: '"Poppins", sans-serif', textAlign: 'center' , marginTop: '-12%'}}>
              <h1><b color='grey'>Education</b></h1> {/* Replace with your actual text */}
            </Typography>
            <Box sx={{ minWidth: 275 ,marginLeft:"5%"}}>
      <Card variant="outlined">{card}</Card>
    </Box>

    <Box sx={{ minWidth: 275 ,marginLeft:"5%",marginTop:"3%"}}>
      <Card variant="outlined">{card3}</Card>
    </Box>

    <Box sx={{ minWidth: 275 ,marginLeft:"5%",marginTop:"3%"}}>
      <Card variant="outlined">{card2}</Card>
    </Box>


           
               </Grid>

               <Grid item xs={12} md={6} textAlign="center" marginTop="8%">
            <img src={redu} alt="Profile" style={{ width: '50%', height: 'auto', borderRadius: 8 , animation: 'float 3s infinite'}} />
          </Grid>

        </Grid>
        
      </Box>
    </Box>






    <Box sx={{ marginTop: 5, padding: 4 }}>
        <Grid container spacing={3}>
          {/* Left Column (Image) */}
          <Grid item xs={12} md={6} textAlign="center" marginTop="8%">
            <img src={achieves} alt="Profile" style={{ width: '50%', height: 'auto', borderRadius: 8 , animation: 'float 3s infinite'}} />
          </Grid>

          {/* Right Column (Text) */}
          <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontFamily: '"Poppins", sans-serif', textAlign: 'center' , marginTop: '-6%'}}>
              <h1><b color='grey'>Acheivements</b></h1> {/* Replace with your actual text */}
            </Typography>
            <Box sx={{ minWidth: 275 ,marginLeft:"5%"}}>
      <Card variant="outlined">{Acheivement}</Card>
    </Box>


           
               </Grid>

        </Grid>
        
      </Box>
      </div>

       </>

  );
}
