// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import { Button, Typography } from '@mui/material';
// import Stack from '@mui/material/Stack';
// import StarIcon from '@mui/icons-material/Star'; 
// import EmailIcon from '@mui/icons-material/Email';
// import email from './images/email.jpg';
// import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
// import HomeIcon from '@mui/icons-material/Home';
// import PersonIcon from '@mui/icons-material/Person';
// import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
// import WidgetsIcon from '@mui/icons-material/Widgets';
// import PhoneIcon from '@mui/icons-material/Phone';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import { Link } from 'react-router-dom';
// import Grid from '@mui/material/Grid';
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';


// export default function SimplePaper1() {
//   const form =useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_sckwt1d', 'template_so0tvy8', form.current, 'EbVtOiJzgpt0jj69d')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset();
//   };
  
  
//   return (
//     <>
// <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'black', fontFamily: '"Poppins", sans-serif' ,display:"flex",justifyContent:"center",marginTop:"4%",marginBottom:"3%"}}>
//             <b>Take a Cappuccino & Chat with me </b>
            
//           </Typography>

//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         flexDirection: 'column',
//         alignItems: 'center',
//         '& > :not(style)': {
//           m: 2,
//           width: 324, 
//           height: 67, 
//           bgcolor: '#FFD6E5', 
//           borderRadius:'10px'

//         },
//       }}
//     >
//       <Paper elevation={0}>
//         <Stack direction="row" spacing={1} alignItems="center" marginTop="7%" marginLeft="8%">
//         <img src={email} alt="API Icon" style={{ width: '2rem', height: '2rem', borderRadius: '50%',marginRight:"2%" }} />
//           <Typography variant="body1">hii@rathish.com</Typography>
//         </Stack>
//       </Paper>
//       <Paper elevation={0}>
//       <Stack direction="row" spacing={1} alignItems="center" marginTop="7%" marginLeft="8%">
//           <MobileFriendlyIcon color="secondary" />
//           <Typography variant="body1" > 987654321</Typography>
//         </Stack>
//       </Paper>

      
     
//     </Box>




// <br/>

// <br/>

// <form ref={form} onSubmit={sendEmail}>


//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         flexDirection: 'column',
//         alignItems: 'center',
//         '& > :not(style)': {
//           m: 0,
//           width: 524, 
//           height: 53, 
//           bgcolor: '#ADD8E6', 
//           marginTop:"2%",
//           borderRadius:'10px',




//         },
//       }}
//     >
//       <Paper elevation={0}>
//         <Stack direction="row" spacing={1} alignItems="center" marginTop="2.5%" marginLeft="8%">
//         <input
//             type="text"
//             placeholder="your name"
//             name='user_name'

//             style={{
//               border: 'none',
//               outline: 'none',
//               fontSize: '1rem',
//               fontWeight: 'bold',
//               backgroundColor: 'transparent',
//             }}
//           />
//         </Stack>
//       </Paper> 
//       <Paper elevation={0}>
//         <Stack direction="row" spacing={1} alignItems="center" marginTop="2.5%" marginLeft="8%">
//         <input
//             type="text"
//           placeholder='your email'
//           name='user_email'
//             style={{
//               border: 'none',
//               outline: 'none',
//               fontSize: '1rem',
//               fontWeight: 'bold',
//               backgroundColor: 'transparent',
//             }}
//           />
//         </Stack>
//       </Paper> 
//     </Box>





//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         flexDirection: 'column',
//         alignItems: 'center',
//         '& > :not(style)': {
//           m: 0,
//           width: 524, 
//           height: 153, 
//           bgcolor: '#ADD8E6', 
//           marginTop:"2%",
//           borderRadius:'10px'


//         },
//       }}
//     >
      
//       <Paper elevation={0}>
//         <Stack direction="row" spacing={1} alignItems="center" marginTop="2.5%" marginLeft="8%">
//           <input
//             type="text"
//             placeholder="Type your message here..."
//             name='subject'

//             style={{
//               border: 'none',
//               outline: 'none',
//               fontSize: '1rem',
//               fontWeight: 'bold',
//               backgroundColor: 'transparent',
//             }}
//           />
//         </Stack>
//       </Paper>
      
//     </Box>
//     </form>

//     <Button
//         sx={{
//           width: '80px', 
//           height: '30px', 
//           marginTop: '2%',
//           marginLeft:'46%' ,
//           color:"white",
//           backgroundColor:"purple"
//         }}
//       >
//         Submit
//       </Button>
//       <Grid marginLeft="46.3%" marginTop="7%">
// <Typography >copyright </Typography>
// <Grid  marginTop="4%" marginLeft="-1%">
// <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
//       <HomeIcon style={{ fontSize: '1.7rem' }} />
//     </Link>
// {<LinkedInIcon sx={{ fontSize: '1.7rem'}} />}       
// {<GitHubIcon sx={{ fontSize: '1.7rem'}} />}    
// </Grid>

//       </Grid>
      
//     </>

//   );
// }

// import SimplePaper from './skills';

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import { Button, Typography } from '@mui/material';
// import Stack from '@mui/material/Stack';
// import EmailIcon from '@mui/icons-material/Email';
// import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
// import HomeIcon from '@mui/icons-material/Home';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import { Link } from 'react-router-dom';
// import Grid from '@mui/material/Grid';
// import email from './images/email.jpg';

// export default function SimplePaper1() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//      emailjs.sendForm('service_sckwt1d', 'template_so0tvy8', form.current, 'EbVtOiJzgpt0jj69d')
// .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset();
//   };



//   return (
// <>
//     <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'black', fontFamily: '"Poppins", sans-serif' ,display:"flex",justifyContent:"center",marginTop:"4%",marginBottom:"3%"}}>
//              <b>Take a Cappuccino & Chat with me </b>
            
//            </Typography>



//            <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         flexDirection: 'column',
//         alignItems: 'center',
//         '& > :not(style)': {
//           m: 2,
//           width: 324, 
//           height: 67, 
//           bgcolor: '#FFD6E5', 
//           borderRadius:'10px'

//         },
//       }}
//     >
//       <Paper elevation={0}>
//         <Stack direction="row" spacing={1} alignItems="center" marginTop="7%" marginLeft="8%">
//         <img src={email} alt="API Icon" style={{ width: '2rem', height: '2rem', borderRadius: '50%',marginRight:"2%" }} />
//           <Typography variant="body1">imrathishai@gmail.com</Typography>
//         </Stack>
//       </Paper>
//       <Paper elevation={0}>
//       <Stack direction="row" spacing={1} alignItems="center" marginTop="7%" marginLeft="8%" >
//           <MobileFriendlyIcon color="secondary" />
//           <Typography variant="body1" > 9342825949</Typography>
//         </Stack>
//       </Paper>

      
     
//     </Box>




// <br/>

// <br/>

           

//     <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column' ,maxWidth:'100%',justifyContent:'center',alignItems:'center',}}>
//       <input type="text" name="user_name"placeholder='your name' style={{ marginTop: '1%', paddingLeft:'9%',paddingRight:'9%',paddingTop:'1%',paddingBottom:'1%', border:'2px solid grey', borderRadius:'8px' ,backgroundColor:'#ADD8E6',}}/>
//       <input type="email" name="user_email" placeholder='your email' style={{ marginTop: '1%', paddingLeft:'9%',paddingRight:'9%',paddingTop:'1%',paddingBottom:'1%' ,borderRadius:'8px',border:'2px solid grey',backgroundColor:'#ADD8E6'}}/>
//       <textarea name="message" placeholder='Type your message here ..' style={{ marginTop: '2%', paddingLeft:'9%',paddingRight:'9%',paddingTop:'1%',paddingBottom:'8%',border:'2px solid grey', borderRadius:'8px',backgroundColor:'#ADD8E6'}} />
//       <input type="submit" value="Send Message" style={{ marginTop: '1.5%' ,paddingLeft:'0.8%',paddingRight:'0.8%',paddingTop:'0.3%',paddingBottom:'0.3%',
//       backgroundColor: '#000080',
//       color: 'white',
//       borderRadius:'6px'
//     }}/>
//     </form>
//     <Grid marginLeft="47.6%" marginTop="7%">
//       <Grid marginLeft="-6%"><Typography >  &copy; 2023-2024 Rathish
//  </Typography></Grid>

// <Grid  marginTop="4%" marginLeft="-1%">
// <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
//       <HomeIcon style={{ fontSize: '1.7rem' }} />
//     </Link>
// <a href="https://www.linkedin.com/in/rathish-s-301b28269
// " target="_blank" rel="noopener noreferrer">
//   <LinkedInIcon sx={{ fontSize: '1.7rem', }} />
// </a>
// <a href="https://github.com/rathishs17" target="_blank" rel="noopener noreferrer">
//   <GitHubIcon sx={{ fontSize: '1.7rem',  }} />
// </a>   
// </Grid>

//       </Grid>
//     </>
//   );
// };
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

import SimplePaper from './skills';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import email from './images/email.jpg';
import profileImage from './images/rathishai.jpg';
import RoomIcon from '@mui/icons-material/Room';


export default function SimplePaper1() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sckwt1d', 'template_so0tvy8', form.current, 'EbVtOiJzgpt0jj69d')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
    <div id='contact'>
      <Typography
        variant="h4"
        component="div"
        sx={{
          flexGrow: 1,
          color: 'white',
          fontFamily: '"Poppins", sans-serif',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '4%',
          marginBottom: '3%',
        }}
      >
        <b>Let's Connect Over Coffee </b>
      </Typography>













      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': {
            m: 2,
            width: 324,
            height: 67,
            bgcolor: '#FFD6E5',
            borderRadius: '10px',
          },
        }}
      >
        <Paper elevation={0}>
          <Stack direction="row" spacing={1} alignItems="center" marginTop="7%" marginLeft="8%">
            <img src={email} alt="API Icon" style={{ width: '2rem', height: '2rem', borderRadius: '50%', marginRight: '2%' }} />
            <Typography variant="body1">rathish2793@gmail.com</Typography>
          </Stack>
        </Paper>
        <Paper elevation={0}>
          <Stack direction="row" spacing={1} alignItems="center" marginTop="7%" marginLeft="8%">
            <MobileFriendlyIcon color="secondary" />
            <Typography variant="body1"> 9342825949</Typography>
          </Stack>
        </Paper>
      </Box>   important*/}

<Box sx={{ border:"2px solid white", borderRadius:"30px",width:"70%" ,marginLeft:"16%" ,marginBottom:"0%"}}>



<Box sx={{ marginTop: 6, padding: 2,marginLeft:10 }}>
        <Grid container spacing={7}>
          {/* Left Column (Image) */}

         {
                   <Grid item xs={12} md={6} textAlign="" marginTop="0%">

         <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginLeft: '22%',
          '& > :not(style)': {
            m: 2,
            width: 324,
            height: 37,
            // bgcolor: '#FFD6E5',
            borderRadius: '10px',
          },
        }}
      >
        {}
        {/* sx={{ fontSize: '0.7rem' }} */}
        <Typography  marginBottom="7%"><h1>Contact Info</h1></Typography>
        <br/>
        <body variant="">
        <Stack direction="row" spacing={1} alignItems="center">
          {<EmailIcon/>}
         <Typography>rathish2793@gmail.com</Typography>
        </Stack>        
         <br/>
         <Stack direction="row" spacing={1} alignItems="center">
          {<MobileFriendlyIcon/>}
         <Typography>9342825949</Typography>
        </Stack>           
        <br/>
        <Stack direction="row" spacing={1} alignItems="center">
          {<RoomIcon/>}
         <Typography>Coimbatore</Typography>
        </Stack> 
        <Stack direction="row" spacing={2} alignItems="center" marginTop="10%" marginLeft="0.5%" fontSize="9rem">
           <GitHubIcon sx={{ fontSize: '2.5rem' , }}/>
        <LinkedInIcon sx={{ fontSize: '2.5rem' }}/> 
        </Stack>       
         
        </body>

        {/* <Paper elevation={0}>
          <Stack direction="row" spacing={1} alignItems="center" marginTop="7%" marginLeft="8%">
            <img src={email} alt="API Icon" style={{ width: '2rem', height: '2rem', borderRadius: '50%', marginRight: '2%' }} />
          </Stack>
        </Paper>
        <Paper elevation={0}>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" marginTop="7%" marginLeft="8%">
          <MobileFriendlyIcon color="secondary" />
          </Paper> */}
      </Box>   
      </Grid>
      }

          {/* Right Column (Text) */}
          <Grid item xs={12} md={6} textAlign="center" paddingBottom="8%">

      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '80%',
          justifyContent: 'center',
          marginRight: '10%',
        }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="your name"
          style={{
            marginTop: '1%',
            paddingLeft: '5%',
            paddingRight: '9%',
            paddingTop: '3%',
            paddingBottom: '3%',
            boxShadow: '0px 0px 1px 1px rgba(0, 2z5, 255, 0.2), 0 1px 1px 0 rgba(0, 255, 255, 0.19)',

            border: '2px solid grey',
            borderRadius: '8px',
            backgroundColor: '#F0FFFF	',
          }}
        />
        <input
          type="email"
          name="user_email"
          placeholder="your email"
          style={{
            marginTop: '3%',
            paddingLeft: '5%',
            paddingRight: '9%',
            paddingTop: '3%',
            paddingBottom: '3%',
            boxShadow: '0px 0px 0.1px 0.1px rgba(0, 2z5, 255, 0.2), 0 0.1px 0.1px 0 rgba(0, 255, 255, 0.19)',

            borderRadius: '8px',
            border: '2px solid grey',
            backgroundColor: '#F0FFFF	',
          }}
        />
        <textarea
          name="message"
          placeholder="Type your message here .."
          style={{
            marginTop: '3%',
            paddingLeft: '5%',
            paddingRight: '9%',
            paddingTop: '3%',
            paddingBottom: '10%',
            boxShadow: '0px 0px 0.1px 0.1px rgba(0, 2z5, 255, 0.2), 0 0.1px 0.1px 0 rgba(0, 255, 255, 0.19)',

            border: '2px solid grey',
            borderRadius: '8px',
            backgroundColor: '#F0FFFF	',
          }}
        />
        <input
          type="submit"
          value="Send Message"
          style={{
            marginTop: '6.5%',
            paddingLeft: '5%',
            paddingRight: '8%',
            paddingTop: '3%',
            paddingBottom: '3%',
            backgroundColor: '#000080',
            color: 'white',
            boxShadow: '0px 0px 2px 1px rgba(0, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 255, 255, 0.19)',
borderColor:"blue",
            width: '150px',  
            marginLeft:'500x',
            borderRadius: '11px',
            fontSize:'15px',
            cursor: 'pointer' // Adding cursor style when hovering

          }}
        />
      </form>
      </Grid>
     
        </Grid>
        
      </Box>

</Box>
<Grid container justifyContent="center" marginTop="3.3%" paddingBottom="2%" spacing={2} bgcolor="lack">
      <Grid item>
        <Typography>Developed by Rathish 💜</Typography>
      </Grid>
    </Grid> 
</div>
  </>
);
}














{/* 
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="your name"
          style={{
            marginTop: '1%',
            paddingLeft: '9%',
            paddingRight: '9%',
            paddingTop: '1%',
            paddingBottom: '1%',
            border: '2px solid grey',
            borderRadius: '8px',
            backgroundColor: '#ADD8E6',
          }}
        />
        <input
          type="email"
          name="user_email"
          placeholder="your email"
          style={{
            marginTop: '1%',
            paddingLeft: '9%',
            paddingRight: '9%',
            paddingTop: '1%',
            paddingBottom: '1%',
            borderRadius: '8px',
            border: '2px solid grey',
            backgroundColor: '#ADD8E6',
          }}
        />
        <textarea
          name="message"
          placeholder="Type your message here .."
          style={{
            marginTop: '2%',
            paddingLeft: '9%',
            paddingRight: '9%',
            paddingTop: '1%',
            paddingBottom: '8%',
            border: '2px solid grey',
            borderRadius: '8px',
            backgroundColor: '#ADD8E6',
          }}
        />
        <input
          type="submit"
          value="Send Message"
          style={{
            marginTop: '1.5%',
            paddingLeft: '0.8%',
            paddingRight: '0.8%',
            paddingTop: '0.3%',
            paddingBottom: '0.3%',
            backgroundColor: '#000080',
            color: 'white',
            borderRadius: '6px',
          }}
        />
      </form>
      <Grid container justifyContent="center" marginTop="3.3%" spacing={2}>
        <Grid item>
          <Typography>&copy; 2023-2024 Rathish</Typography>
        </Grid>
      </Grid> imporant */}

























      {/* <Grid container justifyContent="center" marginTop="0.8%" spacing={2}>

      <Grid item>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <HomeIcon style={{ fontSize: '1.7rem' }} />
          </Link>
          <a href="https://www.linkedin.com/in/rathish-s-301b28269" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ fontSize: '1.7rem' }} />
          </a>
          <a href="https://github.com/rathishs17" target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{ fontSize: '1.7rem' }} />
          </a>
        </Grid>      </Grid> */}
