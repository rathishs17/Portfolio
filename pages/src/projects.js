import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, AppBar, Toolbar, Button as MuiButton, Tabs, Tab, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PhoneIcon from '@mui/icons-material/Phone';
import elearn from  './images/elearnpic.jpg';
import p from  './images/portfolio.jpg';
import weather from  './images/weatherapp.jpg';
import c4 from  './images/c4game.jpg';
import water from  './images/water.jpg';
import lock from  './images/lock.jpg';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import GitHubIcon from '@mui/icons-material/GitHub';


import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { Link } from 'react-router-dom';
export default function MediaCard() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
<>
<Box sx={{ flexGrow: 3 }}>
        <AppBar position="fixed" sx={{ background: 'white', boxShadow: 'none' }}>
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
        </Drawer>



     <Typography variant="h3" sx={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: '7%', marginBottom: '2%' }}><b>Projects</b></Typography>

     
      <Tabs value={tabValue} onChange={handleTabChange} centered  >
        {/* <Tab label="WEB" /> */}
        <Tab label="WEB" />
        <Tab label="CORE" />

      </Tabs>

     
      <Grid container spacing={5} display="flex" justifyContent="center" marginTop="4%">
        {tabValue === 3 && (
          <>
            <Grid item>
<Grid item>
<Card sx={{ maxWidth: 300, backgroundColor: '#fafad2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <CardMedia
    sx={{ padding:3, height: 140 }}
    image={elearn}
    title="E-learning platform"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    E-learning platform
    </Typography>
    <Typography variant="body2" color="text.secondary">
    An online e-learning platform includes study materials, quizzes, and the ability to dynamically add courses by the administrator. It is implemented using the <b>MERN</b> stack.    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small"><OpenInBrowserIcon/></Button>
    <Button size="small"><a href=" https://github.com/rathishs17/E-learning-website
" target="_blank" rel="noopener noreferrer">
          <GitHubIcon  />
        </a></Button>
  </CardActions>
</Card>
</Grid>             
</Grid>




{/* <Grid item>
<Grid item>
<Card sx={{ maxWidth: 300, backgroundColor: '#fafad2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <CardMedia
    sx={{ padding:3, height: 140 }}
    image={elearn}
    title="E-learning platform"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    E-learning platform
    </Typography>
    <Typography variant="body2" color="text.secondary">
    An Online E-learning platform includes study materials,quizzes,dynamically adds a course by admin.Implemented by <b>MERN</b> Stack.
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small"><OpenInBrowserIcon/></Button>
    <Button size="small"><GitHubIcon/></Button>
  </CardActions>
</Card>
</Grid>             
</Grid> */}








            <Grid item>
  {/* pro                     */}
  <Grid item>
<Card sx={{ maxWidth: 300, backgroundColor: '#fafad2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <CardMedia
    sx={{ padding:3, height: 140 }}
    image={c4}
    title="Connecting 4 game"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    Connecting 4 game
    </Typography>
    <Typography variant="body2" color="text.secondary">
    A Connect Four game is implemented as a two-player game, where the objective is to connect four circles in a row. This functionality is implemented using <b>React JS</b>.    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small"><OpenInBrowserIcon/></Button>
    <Button size="small"><a href=" https://github.com/rathishs17/connectinggame4" target="_blank" rel="noopener noreferrer">
          <GitHubIcon  />
        </a> </Button>
  </CardActions>
</Card>
</Grid>   
 </Grid>



 <Grid item>
  {/* pro                     */}
  <Grid item>
<Card sx={{ maxWidth: 300, backgroundColor: '#fafad2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <CardMedia
    sx={{ padding:3, height: 140 }}
    image={weather}
    title="Weather App"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
Weather App
    </Typography>
    <Typography variant="body2" color="text.secondary">
    A weather app developed using <b>javaScript</b> to provide real-time weather information and forecasts. Users can check current conditions, and view extended forecasts for their location.    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small"><OpenInBrowserIcon/></Button>
    <Button size="small">
    <a href="https://github.com/rathishs17/weatherapp" target="_blank" rel="noopener noreferrer">
          <GitHubIcon  />
        </a>    </Button>
  </CardActions>
</Card>
</Grid>   
 </Grid>




 <Grid item>
  {/* pro                     */}
  <Grid item>
<Card sx={{ maxWidth: 300, backgroundColor: '#fafad2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <CardMedia
    sx={{ padding:3, height: 140 }}
    image={p}
    title="portfolio"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
Portfolio
    </Typography>
    <Typography variant="body2" color="text.secondary">
    Driven by the power of <b>ReactJS</b>, my portfolio not only reflects my technical expertise but also offers a user-friendly experience, embodying innovation and proficiency in web development.  </Typography>
  </CardContent>
  <CardActions>
    {/* <Button size="small"><OpenInBrowserIcon/></Button> */}
    <Button size="small"><a href=" https://github.com/rathishs17/portfolio" target="_blank" rel="noopener noreferrer">
          <GitHubIcon  />
        </a>  </Button>
  </CardActions>
</Card>
</Grid>   
 </Grid>


 <Grid item>
<Grid item>
<Card sx={{ maxWidth: 300, backgroundColor: '#fafad2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <CardMedia
    sx={{ padding:3, height: 140 }}
    image={water}
    title="Water Quality Monitoring System"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    Water Quality Monitoring System
    </Typography>
    <Typography variant="body2" color="text.secondary">
    Implemented with ESP32, incorporating temperature, turbidity, and ultrasonic sensors. The system utilizes the Blynk app for convenient monitoring and visualization of water quality reports.    </Typography>
  </CardContent>
  <CardActions>
    {/* <Button size="small"><OpenInBrowserIcon/></Button> */}
  </CardActions>
</Card>
</Grid>             
</Grid>
            <Grid item>
  {/* pro                     */}
  <Grid item>
<Card sx={{ maxWidth: 300, backgroundColor: '#fafad2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <CardMedia
    sx={{ padding:3, height: 140 }}
    image={lock}
    title="Digital Lock Door System"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    Digital Lock Door System
    </Typography>
    <Typography variant="body2" color="text.secondary">
    Designed for seamless integration, the digital lock door system using ESP32 offers convenience and heightened security, making it an ideal solution for modern smart homes and businesses.  </Typography>
  </CardContent>
  <CardActions>
    {/* <Button size="small"><OpenInBrowserIcon/></Button> */}
  </CardActions>
</Card>
</Grid>   
 </Grid>




 
            <Grid item>            </Grid>
          </>
        )}




{tabValue === 0 && (
          <>
            <Grid item>
<Grid item>
<Card sx={{ maxWidth: 300, backgroundColor: '#fafad2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <CardMedia
    sx={{ padding:3, height: 140 }}
    image={elearn}
    title="E-learning platform"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    E-learning platform
    </Typography>
    <Typography variant="body2" color="text.secondary">
    An online e-learning platform includes study materials, quizzes, and the ability to dynamically add courses by the administrator. It is implemented using the <b>MERN</b> stack.    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small"><OpenInBrowserIcon/></Button>
    <Button size="small">          <GitHubIcon  />
</Button>

    {/* <Button size="small"><a href=" " target="_blank" rel="noopener noreferrer">
      //https://github.com/rathishs17/E-learning-website
          <GitHubIcon  />
        </a> </Button> */}
  </CardActions>
</Card>
</Grid>             
</Grid>
            <Grid item>
  {/* pro                     */}
  <Grid item>
<Card sx={{ maxWidth: 300, backgroundColor: '#fafad2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <CardMedia
    sx={{ padding:3, height: 140 }}
    image={c4}
    title="Connecting 4 game"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    Connecting 4 game
    </Typography>
    <Typography variant="body2" color="text.secondary">
    A Connect Four game is implemented as a two-player game, where the objective is to connect four circles in a row. This functionality is implemented using <b>React JS</b>.    
    </Typography>
  </CardContent>
  <CardActions>

    <Button size="small"><a href=" https://connectingfourgame-rathish.netlify.app

" target="_blank" rel="noopener noreferrer">
          <OpenInBrowserIcon />
        </a> </Button>
    <Button size="small"><a href=" https://github.com/rathishs17/connectinggame4" target="_blank" rel="noopener noreferrer">
          <GitHubIcon  />
        </a> </Button>
  </CardActions>
</Card>
</Grid>   
 </Grid>


 <Grid item>
  {/* pro                     */}
  <Grid item>
<Card sx={{ maxWidth: 300, backgroundColor: '#fafad2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <CardMedia
    sx={{ padding:3, height: 140 }}
    image={weather}
    title="Weather App"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
Weather App
    </Typography>
    <Typography variant="body2" color="text.secondary">
    A weather app developed using <b>javascript</b> to provide real-time weather information and forecasts. Users can check current conditions, and view extended forecasts for their location.    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small"><a href=" https://weatherapp-rathish.netlify.app

" target="_blank" rel="noopener noreferrer">
          <OpenInBrowserIcon />
        </a> </Button>
    <Button size="small"><a href="https://github.com/rathishs17/weatherapp" target="_blank" rel="noopener noreferrer">
          <GitHubIcon  />
        </a></Button>
  </CardActions>
</Card>
</Grid>   
 </Grid>


 <Grid item>
  {/* pro                     */}
  <Grid item>
<Card sx={{ maxWidth: 300, backgroundColor: '#fafad2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <CardMedia
    sx={{ padding:3, height: 140 }}
    image={p}
    title="portfolio"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
Portfolio
    </Typography>
    <Typography variant="body2" color="text.secondary">
    Driven by the power of <b>ReactJS</b>, my portfolio not only reflects my technical expertise but also offers a user-friendly experience, embodying innovation and proficiency in web development. </Typography>
  </CardContent>
  <CardActions>
    {/* <Button size="small"><OpenInBrowserIcon/></Button> */}
    <Button size="small"><GitHubIcon/></Button>
  </CardActions>
</Card>
</Grid>   
 </Grid>


            <Grid item>            </Grid>
          </>
        )}









{tabValue === 1 && (
          <>
            <Grid item>
<Grid item>
<Card sx={{ maxWidth: 300, backgroundColor: '#fafad2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <CardMedia
    sx={{ padding:3, height: 140 }}
    image={water}
    title="Water Quality Monitoring System"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    Water Quality Monitoring System
    </Typography>
    <Typography variant="body2" color="text.secondary">
    Implemented with ESP32, incorporating temperature, turbidity, and ultrasonic sensors. The system utilizes the Blynk app for convenient monitoring and visualization of water quality reports.    </Typography>
  </CardContent>
  <CardActions>
    {/* <Button size="small"><OpenInBrowserIcon/></Button> */}
  </CardActions>
</Card>
</Grid>             
</Grid>
            <Grid item>
  {/* pro                     */}
  <Grid item>
<Card sx={{ maxWidth: 300, backgroundColor: '#fafad2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <CardMedia
    sx={{ padding:3, height: 140 }}
    image={lock}
    title="Digital Lock Door System"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    Digital Lock Door System
    </Typography>
    <Typography variant="body2" color="text.secondary">
    Designed for seamless integration, the digital lock door system using ESP32 offers convenience and heightened security, making it an ideal solution for modern smart homes and businesses.  </Typography>
  </CardContent>
  <CardActions>
    {/* <Button size="small"><OpenInBrowserIcon/></Button> */}
  </CardActions>
</Card>
</Grid>   
 </Grid>


 {/* <Grid item>
  <Grid item>
<Card sx={{ maxWidth: 300, backgroundColor: '#fafad2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <CardMedia
    sx={{ padding:3, height: 140 }}
    image={c4}
    title="Weather App"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
Weather App
    </Typography>
    <Typography variant="body2" color="text.secondary">
A connecting 4 game as a functionality of connecting the 4 circles at a same line, two player game, implemented by <b>React JS</b>.
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small"><OpenInBrowserIcon/></Button>
    <Button size="small"><GitHubIcon/></Button>
  </CardActions>
</Card>
</Grid>   
 </Grid> */}
            <Grid item>            </Grid>
          </>
        )}




      </Grid>
      </Box>
    </>
  );
}
