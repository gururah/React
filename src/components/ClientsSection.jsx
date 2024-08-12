import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientsSection = () => {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" py={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Clients
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ color: '#708090' }} 
        >
          We have been working with some Fortune 500+ clients
        </Typography>
        <br/>
        <br/>
        <>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          {logos.map((logo, index) => (
            <Grid item xs={12} sm={6} md={1} key={index}>
              <Box display="flex" justifyContent="center">
                <img src={logo} alt={`Client Logo ${index + 1}`} style={{ maxWidth: '100%', maxHeight: '100px', objectFit: 'contain' }} />
              </Box>
            </Grid>
          ))}
        </Grid>
        </>
      </Box>
    </Container>
  );
};

export default ClientsSection;
