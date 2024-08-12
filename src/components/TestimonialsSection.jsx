import React from 'react';
import { Container, Typography, Box, Grid, Button, Paper } from '@mui/material';
import testimonialImage from '../assets/testimonialImage1.png'; 

const TestimonialsSection = () => {
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
                The unseen of spending three years at Pixelgrade
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: '#708090', mb: 2 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ispsum. Sed accumsan quarn vitae est varius fringila. Pellenteque  placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.Nullam pulvinar sit amer risus pretium auctor. Etiam quis massa pulvinar aliquam quam vitae, tempus sem. Donec elementum pulvier adio.
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#4caf50', color: 'white' }}
              >
                Learn More
              </Button>
            </Box>  </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TestimonialsSection;
