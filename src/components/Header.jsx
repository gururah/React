import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Grid, Drawer, IconButton, List, ListItem, ListItemText, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../public/logo.png';

const CustomAppBar = styled(AppBar)({
  backgroundColor: '#fff',
  color: '#333',
});

const CustomButton = styled(Button)(({ theme }) => ({
  marginLeft: '10px',
  color: 'green',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: 'green',
    color: '#fff',
  },
}));

const SignupButton = styled(Button)(({ theme }) => ({
  marginLeft: '10px',
  backgroundColor: 'green',
  color: '#fff',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: 'darkgreen',
  },
}));

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <ListItem button>
          <CustomButton color="inherit">Login</CustomButton>
        </ListItem>
        <ListItem button>
          <SignupButton variant="contained">Sign up</SignupButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <CustomAppBar position="static">
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            {/* Menu Icon for Mobile */}
            <Grid item xs={2} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-start' }}>
              <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Grid>

            {/* Logo for Mobile */}
            <Grid item xs={8} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
              <img src={logo} alt="Nexcent Logo" style={{ height: '30px' }} />
            </Grid>

            {/* Login Button for Mobile */}
            <Grid item xs={2} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
              <CustomButton color="inherit">Login</CustomButton>
            </Grid>

            {/* Logo for Large Screens */}
            <Grid item xs={3} md={3} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start',marginLeft:'50px' }}>
              <img src={logo} alt="Nexcent Logo" style={{ height: '30px' }} />
              </Grid>
        
            {/* Menu Items for Large Screens */}
            <Grid item xs={5} md={5} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              <Grid container spacing={2}>
                {['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ'].map((text) => (
                  <Grid item key={text}>
                    <Button color="inherit" style={{ textTransform: 'capitalize' }}>
                      {text}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Auth Buttons for Large Screens */}
            <Grid item xs={3} md={3} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', marginright:'50%' }}>
              <CustomButton color="inherit">Login</CustomButton>
              <SignupButton variant="contained">Sign up</SignupButton>
            </Grid>
          </Grid>
        </Toolbar>
      </CustomAppBar>

      {/* Drawer for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Better open performance on mobile.
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
