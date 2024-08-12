import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const FeaturesSection = () => {
  return (
    <Container>
      <Box py={5}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center" 
          sx={{ color: '#000000' }}  
        >
          Manage your entire community 
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center" 
          sx={{ color: '#000000' }}  
        >
           in a single system
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          align="center"
          sx={{ color: '#708090' }} 
        >
          Who is Nextcent suitable for?
        </Typography>
        <br/>
        <br/>
        <br/>
<Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3}>
              <Box p={3} textAlign="center">
                <img src={image1} alt="Membership Organisations" style={{ width: '100%', height: 'auto', maxWidth: '100px', marginBottom: '16px' }} />
                <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center" 
          sx={{ color: '#000000' }}  
        >Membership
        
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center" 
          sx={{ color: '#000000' }}  
        > Organisations
        
        </Typography>
                
                <Typography variant="body1">
                  Our membership management software provides full automation of membership renewals and payments.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3}>
              <Box p={3} textAlign="center">
                <img src={image2} alt="National Associations" style={{ width: '100%', height: 'auto', maxWidth: '100px', marginBottom: '16px' }} />
                <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center" 
          sx={{ color: '#000000' }}  
        >National
        
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center" 
          sx={{ color: '#000000' }}  
        > Association
        
        </Typography>
                <Typography variant="body1">
                  Our membership management software provides full automation of membership renewals and payments.
                </Typography>


              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3}>
              <Box p={3} textAlign="center">
                <img src={image3} alt="Clubs And Groups" style={{ width: '100%', height: 'auto', maxWidth: '100px', marginBottom: '16px' }} />
                <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center" 
          sx={{ color: '#000000' }}  
        >Clubs And
        
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center" 
          sx={{ color: '#000000' }}  
        > Groups
        
        </Typography>
                <Typography variant="body1">
                  Our membership management software provides full automation of membership renewals and payments.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FeaturesSection;
