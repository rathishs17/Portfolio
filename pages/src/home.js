// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import PersonIcon from '@mui/icons-material/Person';
// import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
// import WidgetsIcon from '@mui/icons-material/Widgets';
// import PhoneIcon from '@mui/icons-material/Phone';

// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <>
//     <Box sx={{ flexGrow: 3 } }>
//       <AppBar position="fixed" sx={{ background: 'white', boxShadow: 'none' }}>
//         <Toolbar>
//           <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white', fontFamily: '"Poppins", sans-serif' }}>
//             <b>Rathish</b>
//           </Typography>
//           <Link to="/" >
//           <Button startIcon={<PersonIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2, '&:hover': { textDecorationThickness: '2px', textDecorationOffset: '4px' , color:'grey' } }} color="inherit">
//             Home
//           </Button></Link>
//           <Link to="/about" >
//           <Button startIcon={<PersonIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2, '&:hover': { textDecorationThickness: '2px', textDecorationOffset: '4px' , color:'grey' } }} color="inherit">
//             About
//           </Button></Link>
//           <Link to="/skills" >
//           <Button  startIcon={<TipsAndUpdatesIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2, '&:hover': {   color:'grey' } }} color="inherit">
//             Skills
//           </Button></Link>
//           <Link to="/projects" >
//           <Button startIcon={<WidgetsIcon sx={{ fontSize: '1.5rem' }} />}  sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2, '&:hover': {  color:'grey' } }} color="inherit">
//             Projects
//           </Button></Link>
//           <Link to="/contact" >
//           <Button startIcon={<PhoneIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', '&:hover': {  color:'grey' } }} color="inherit">
//             Contact
//           </Button></Link>
//         </Toolbar>
//       </AppBar>

 
//       <Box sx={{ marginTop: 10, padding: 4 }}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={6} textAlign="center" marginTop="3%">
//             <img src={me} alt="Profile" style={{ width: '70%', height: 'auto', borderRadius: 8 , animation: 'float 3s infinite'}} />
//           </Grid>













//           <Grid item xs={12} md={6}>
//             <Typography variant="h6" sx={{ color :"grey", fontFamily: '"Poppins", sans-serif', textAlign: 'center' ,marginTop:'19%'}}>
//               <h4><b color='grey'>Hello, I'm</b></h4> 
//             </Typography>
//             <Typography variant="h5" sx={{ fontFamily: '"Poppins", sans-serif', textAlign: 'center' , marginTop: '-4%'}}>
//               <h1><b color='grey'>Rathish</b></h1> 
//             </Typography>
//             <Typography variant="h5" sx={{ color:'grey',fontFamily: '"Poppins", sans-serif', textAlign: 'center', marginTop: '-4%' }}>
//               <h2><b >MERN Stack Developer</b></h2> 
//             </Typography>

// <a href='https://drive.google.com/file/d/18e1lGIA2DN_sm6EkcatZpuGqS3If8I3u/view?usp=sharing'>
//   <Typography textAlign="center">
//     <Button color="secondary" variant='outlined' sx={{ border: '1px solid white', color: 'white', borderRadius: '13px' }}>
//       VIEW CV
//     </Button>
//   </Typography>
// </a>

// <a href="https://www.linkedin.com/in/rathish-s-301b28269
// " target="_blank" rel="noopener noreferrer">
//   <LinkedInIcon sx={{ fontSize: '2.3rem', marginTop:'6.5%', marginLeft:"43%"}} />
// </a>
// <a href="https://github.com/rathishs17" target="_blank" rel="noopener noreferrer">
//   <GitHubIcon sx={{ fontSize: '2.3rem', marginTop:'6.5%', marginLeft:"1.5%" }} />
// </a>
//    </Grid>

//         </Grid>
        
//       </Box>
//     </Box>

//        </>

//   );
// }


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PhoneIcon from '@mui/icons-material/Phone';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import profileImage from './images/mentor3.jpg';
import me from './images/rathishpic.png';
import HomeIcon from '@mui/icons-material/Home';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

import { Link as ScrollLink } from 'react-scroll';


export default function Home() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <Box sx={{ flexGrow: 3 ,backgroundColor:''}}>
        <AppBar position="fixed" sx={{ background: '#101629',             boxShadow: '0 8px 16px rgba(255, 255, 255, 0.13)',color:'white' ,maxWidth:'98.87%',marginRight:'0.575%'}}>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white', fontFamily: '"Poppins", sans-serif' }}>
              <b>Rathish</b>
            </Typography>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                edge="start"
                color="white"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {/* <Link to="homee" style={{ textDecoration: 'none' }}>
                <Button startIcon={<HomeIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2 }}></Button>
              </Link> */}

              
<ScrollLink
  to="homee"
  smooth={true}
  duration={500} // Adjust the duration as needed
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <Button startIcon={<HomeIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2 }}>
  Home  </Button>
</ScrollLink>
              {/* <a href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button startIcon={<PersonIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2 }}>
    About
  </Button>
</a> */}
<ScrollLink
  to="about"
  smooth={true}
  duration={500} // Adjust the duration as needed
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <Button startIcon={<PersonIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2 }}>
    About
  </Button>
</ScrollLink>



              {/* <Link to="/skills" style={{ textDecoration: 'none' }}>
                <Button startIcon={<TipsAndUpdatesIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2 }}>Skills</Button>
              </Link> */}
              <ScrollLink
  to="skill"
  smooth={true}
  duration={500} // Adjust the duration as needed
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <Button startIcon={<TipsAndUpdatesIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2 }}>
    Skills
  </Button>
</ScrollLink>
              <ScrollLink
  to="project"
  smooth={true}
  duration={500} // Adjust the duration as needed
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <Button startIcon={<WidgetsIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2 }}>
    Projects
  </Button>
</ScrollLink>
<ScrollLink
  to="contact"
  smooth={true}
  duration={500} // Adjust the duration as needed
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <Button startIcon={<PhoneIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2 }}>
    Contact
  </Button>
</ScrollLink>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={toggleDrawer}
        >
  <List style={{ display: 'flex', flexDirection: 'column' }}>
            {/* <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button onClick={toggleDrawer}>
                <Typography variant="h6">Home</Typography>
              </ListItem>
            </Link> */}
            <ScrollLink
  to="homee"
  smooth={true}
  duration={500} // Adjust the duration as needed
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <Button  sx={{ textTransform: 'none', color: 'black', fontSize: '1.3rem', marginRight: 0 }}>
    Home
  </Button>
</ScrollLink>

<ScrollLink
  to="about"
  smooth={true}
  duration={500} // Adjust the duration as needed
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <Button  sx={{ textTransform: 'none', color: 'black', fontSize: '1.3rem', marginRight: 0 }}>
    About
  </Button>
</ScrollLink>
<ScrollLink
  to="skill"
  smooth={true}
  duration={500} // Adjust the duration as needed
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <Button  sx={{ textTransform: 'none', color: 'black', fontSize: '1.3rem', marginRight: 0 }}>
    Skills
  </Button>
</ScrollLink>
<ScrollLink
  to="project"
  smooth={true}
  duration={500} // Adjust the duration as needed
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <Button  sx={{ textTransform: 'none', color: 'black', fontSize: '1.3rem', marginRight: 0 }}>
   Projects
  </Button>
</ScrollLink>
<ScrollLink
  to="contact"
  smooth={true}
  duration={500} // Adjust the duration as needed
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <Button  sx={{ textTransform: 'none', color: 'black', fontSize: '1.3rem', marginRight: 0 }}>
    Contact
  </Button>
</ScrollLink>
          </List>
        </Drawer>

        {/* Rest of your content */}
        <div id="homee">


        <Box sx={{ marginTop: 3, padding: 4 }}>
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

 <a href='https://drive.google.com/file/d/18e1lGIA2DN_sm6EkcatZpuGqS3If8I3u/view?usp=sharing'>
   <Typography textAlign="center">
     <Button color="secondary" variant='outlined' sx={{ border: '1px solid white', color: 'white', borderRadius: '13px' }}>
       VIEW CV
     </Button>
   </Typography>
 </a>

 <a href="https://www.linkedin.com/in/rathish-s-301b28269
 " target="_blank" rel="noopener noreferrer">
   <LinkedInIcon sx={{ fontSize: '2.3rem', marginTop:'6.5%', marginLeft:"43%"}} />
 </a>
 <a href="https://github.com/rathishs17" target="_blank" rel="noopener noreferrer">
   <GitHubIcon sx={{ fontSize: '2.3rem', marginTop:'6.5%', marginLeft:"1.5%" ,color:"wite"}} />
 </a>
    </Grid>

         </Grid>
        
      </Box>        </div>

      </Box>
    </>
  );
}


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
// import PersonIcon from '@mui/icons-material/Person';
// import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
// import WidgetsIcon from '@mui/icons-material/Widgets';
// import PhoneIcon from '@mui/icons-material/Phone';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import Grid from '@mui/material/Grid';
// import me from './images/rathishpic.png';

// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import { Link as ScrollLink } from 'react-scroll';

// export default function Home() {
//   const [openDrawer, setOpenDrawer] = React.useState(false);

//   const toggleDrawer = () => {
//     setOpenDrawer(!openDrawer);
//   };

//   return (
//     <>
//       <Box sx={{ flexGrow: 3 }}>
//         <AppBar position="static" sx={{ background: '#101629', boxShadow: '5px 5x 5px white', color: 'white' }}>
//           <Toolbar>
//             <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white', fontFamily: '"Poppins", sans-serif' }}>
//               <b>Rathish</b>
//             </Typography>
//             <Box sx={{ display: { xs: 'block', md: 'none' } }}>
//               <IconButton
//                 edge="start"
//                 color="white"
//                 aria-label="menu"
//                 onClick={toggleDrawer}
//               >
//                 <MenuIcon />
//               </IconButton>
//             </Box>
//             <Box sx={{ display: { xs: 'none', md: 'block' } }}>
//               <ScrollLink to="home" smooth={true} duration={500}>
//                 <Button startIcon={<PersonIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2 }}>Home</Button>
//               </ScrollLink>
//               <ScrollLink to="about" smooth={true} duration={500}>
//                 <Button startIcon={<PersonIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2 }}>About</Button>
//               </ScrollLink>
//               <ScrollLink to="skillss" smooth={true} duration={500}>
//                 <Button startIcon={<TipsAndUpdatesIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2 }}>Skills</Button>
//               </ScrollLink>
//               <ScrollLink to="projects" smooth={true} duration={500}>
//                 <Button startIcon={<WidgetsIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem', marginRight: 2 }}>Projects</Button>
//               </ScrollLink>
//               <ScrollLink to="contact" smooth={true} duration={500}>
//                 <Button startIcon={<PhoneIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'white', fontSize: '1.5rem' }}>Contact</Button>
//               </ScrollLink>
//             </Box>
//           </Toolbar>
//         </AppBar>

//         {/* Rest of your content */}

//         <Box id="home" sx={{ marginTop: 3, padding: 4 }}>
//           <Grid container spacing={3}>
//             {/* ... */}
//           </Grid>
//         </Box>

//         <Box id="about" sx={{ marginTop: 3, padding: 4 }}>
//           <Grid container spacing={3}>
//             {/* ... */}
//           </Grid>
//         </Box>

//         <Box id="skills" sx={{ marginTop: 3, padding: 4 }}>
//           <Grid container spacing={3}>
//             {/* ... */}
//           </Grid>
//         </Box>

//         <Box id="projects" sx={{ marginTop: 3, padding: 4 }}>
//           <Grid container spacing={3}>
//             {/* ... */}
//           </Grid>
//         </Box>

//         <Box id="contact" sx={{ marginTop: 3, padding: 4 }}>
//           <Grid container spacing={3}>
//             {/* ... */}
//           </Grid>
//         </Box>

//       </Box>
//     </>
//   );
// }
