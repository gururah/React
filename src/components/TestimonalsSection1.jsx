import React from 'react';
import { Container, Typography, Box, Grid, Button, Paper } from '@mui/material';
import testimonialImage from '../assets/testimonialImage2.png'; 

const TestimonialsSection1 = () => {
  return (
    <Container>
      <Box py={5}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <img
              src={testimonialImage}
              alt="Testimonial"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={3}>
              <Typography variant="h4" component="h2" gutterBottom>
                How to design your site footer like we did
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: '#708090', mb: 2 }}
              >
                Donec a eros justo. Fusce egestas tristiquees ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erar at libero ultrices mollis. In euismod augue vitae nisi ultricies, nonalquet urna tincidunt. Intege in nist eget nulla commodo faucibus efficitur quis massa. Prasent felis est, finibus et nisiac, hendreit venenatis libero. Donec consectetur faucibus ipsum id gravida
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#4caf50', color: 'white' }}
              >
                Learn More
              </Button>
            </Box>
            
            </Grid>
            
            
        </Grid>
      </Box>
      
 </Container>
  );
};

export default TestimonialsSection1;
