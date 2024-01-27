import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, AppBar, Toolbar, Button as MuiButton, Tabs, Tab } from '@mui/material';
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
import { Link } from 'react-router-dom';
export default function MediaCard() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
<>

<AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'none' , backdropFilter: 'blur(7px)'}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'black', fontFamily: '"Poppins", sans-serif' }}>
            <b>Rathish</b>
          </Typography>
          <Link to="/" >
          {/* <Button startIcon={<HomeIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', marginRight: 2, '&:hover': {color:'grey' } }} color="inherit">
            Home
          </Button> */}
          <Button
  sx={{
    textTransform: 'none',
    color: 'black',
    fontSize: '1.5rem',
    marginRight: 2,
    transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out', // Add transition for scaling
    '&:hover': {
      color: 'grey',
         // Scale up on hover
    },
  }}
  color="inherit"
>
    {<HomeIcon sx={{ fontSize: '1.5rem' }} />}

  Home
</Button>

          </Link>
          <Link to="/about" >
          <Button startIcon={<PersonIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', marginRight: 2, '&:hover': { textDecorationThickness: '2px', textDecorationOffset: '4px' , color:'grey' ,          
} }} color="inherit">
            About
          </Button></Link>
          <Link to="/skills" >
          <Button  startIcon={<TipsAndUpdatesIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', marginRight: 2, '&:hover': {   color:'grey', } }} color="inherit">
            Skills
          </Button></Link>
          <Link to="/projects" >
          <Button startIcon={<WidgetsIcon sx={{ fontSize: '1.5rem' }} />}  sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', marginRight: 2, '&:hover': {  color:'grey' ,} }} color="inherit">
            Projects
          </Button></Link>
          <Link to="/contact" >
          <Button startIcon={<PhoneIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', '&:hover': {  color:'grey' } }} color="inherit">
            Contact
          </Button></Link>
        </Toolbar>
</AppBar>



     <Typography variant="h3" sx={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: '7%', marginBottom: '2%' }}><b>Projects</b></Typography>

     
      <Tabs value={tabValue} onChange={handleTabChange} centered  >
        <Tab label="ALL" />
        <Tab label="WEB" />
        <Tab label="CORE" />

      </Tabs>

     
      <Grid container spacing={5} display="flex" justifyContent="center" marginTop="4%">
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
    <Button size="small"><GitHubIcon/></Button>
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
    <Button size="small"><GitHubIcon/></Button>
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
    <Button size="small"><GitHubIcon/></Button>
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
    Driven by the power of React JS, my portfolio not only reflects my technical expertise but also offers a user-friendly experience, embodying innovation and proficiency in web development.  </Typography>
  </CardContent>
  <CardActions>
    <Button size="small"><OpenInBrowserIcon/></Button>
    <Button size="small"><GitHubIcon/></Button>
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
    <Button size="small"><OpenInBrowserIcon/></Button>
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
    <Button size="small"><OpenInBrowserIcon/></Button>
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
    <Button size="small"><GitHubIcon/></Button>
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
    <Button size="small"><OpenInBrowserIcon/></Button>
    <Button size="small"><GitHubIcon/></Button>
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
    <Button size="small"><OpenInBrowserIcon/></Button>
    <Button size="small"><GitHubIcon/></Button>
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
    Driven by the power of React JS, my portfolio not only reflects my technical expertise but also offers a user-friendly experience, embodying innovation and proficiency in web development. </Typography>
  </CardContent>
  <CardActions>
    <Button size="small"><OpenInBrowserIcon/></Button>
    <Button size="small"><GitHubIcon/></Button>
  </CardActions>
</Card>
</Grid>   
 </Grid>


            <Grid item>            </Grid>
          </>
        )}









{tabValue === 2 && (
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
    <Button size="small"><OpenInBrowserIcon/></Button>
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
    <Button size="small"><OpenInBrowserIcon/></Button>
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
    </>
  );
}
