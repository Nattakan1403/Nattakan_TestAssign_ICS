import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import "./Navbar.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='Nav-bar'>
        <Toolbar>
          {<img className='Nav-logo'src='https://icsco.ai/wp-content/uploads/2022/06/logo-no-textbg-svg.svg'/>}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> </Typography>
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ display:  { xs: 'none', md: 'flex' } }}
              className='Nav-noti'
          >
            <NotificationsIcon />
          </IconButton>
          <Button color="inherit" className='Nav-btnname' >
            <Avatar/>
            <Typography 
              className='Nav-name' 
              sx={[{ display:  { xs: 'none', md: 'flex' } },{textTransform: 'capitalize'}]}
            >
              Nattakan
            </Typography>
            <ExpandMoreIcon 
              sx={{ display:  { xs: 'none', md: 'flex' } }}
            />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

