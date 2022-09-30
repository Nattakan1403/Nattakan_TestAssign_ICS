import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListAltIcon from '@mui/icons-material/ListAlt';
import './sidebar.css';
import Button from '@mui/material/Button';

const drawerWidth = 60;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display:  { xs: 'none', md: 'flex' } }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRadius: '0px 40px 40px 0px',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <img className='Side-logo' src='https://icsco.ai/wp-content/uploads/2022/06/logo-no-textbg-svg.svg'/>
        <Divider />
        <Button>
          <ListAltIcon className='Side-placelist'/>
          <p className='Side-text'><strong>place</strong></p>
        </Button>
        <Divider />
      </Drawer>
    </Box>
  );
}
