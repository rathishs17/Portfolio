import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

import Typography from '@mui/material/Typography';
import { Grid, AppBar, Toolbar, Link, Button as MuiButton, Tabs, Tab } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PhoneIcon from '@mui/icons-material/Phone';
import elearn from  './images/elearnpic.jpg';
import c4 from  './images/c4game.jpg';

import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function MediaCard() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>



<AppBar position="fixed" sx={{ background: 'white', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'black', fontFamily: '"Poppins", sans-serif' }}>
            <b>Rathish</b>
          </Typography>
          <Link to="/" >
          <Button startIcon={<HomeIcon sx={{ fontSize: '1.5rem' }} />} sx={{ textTransform: 'none', color: 'black', fontSize: '1.5rem', marginRight: 2, '&:hover': {color:'grey' } }} color="inherit">
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
    An Online E-learning platform includes study materials,quizzes,dynamically adds a course by admin.Implemented by <b>MERN</b> Stack.
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
</Grid>



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
    An Online E-learning platform includes study materials,quizzes,dynamically adds a course by admin.Implemented by <b>MERN</b> Stack.
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
    image={c4}
    title="E-learning platform"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    Connecting 4 game
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
 </Grid>


 <Grid item>
  {/* pro                     */}
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
    An Online E-learning platform includes study materials,quizzes,dynamically adds a course by admin.Implemented by <b>MERN</b> Stack.
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
    image={c4}
    title="E-learning platform"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    Connecting 4 game
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
 </Grid>


 <Grid item>
  {/* pro                     */}
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
</Grid>
            <Grid item>
  {/* pro                     */}
  <Grid item>
<Card sx={{ maxWidth: 300, backgroundColor: '#fafad2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <CardMedia
    sx={{ padding:3, height: 140 }}
    image={c4}
    title="E-learning platform"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    Connecting 4 game
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
 </Grid>


 <Grid item>
  {/* pro                     */}
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
 </Grid>
            <Grid item>            </Grid>
          </>
        )}




      </Grid>
    </>
  );
}
