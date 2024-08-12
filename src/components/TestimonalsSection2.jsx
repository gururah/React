import React from 'react';
import { Container, Typography, Box, Grid, Button, Paper } from '@mui/material';
import testimonialImage from '../assets/testimonialImage3.png'; 

const TestimonialsSection = () => {
  return (
    
    <Container>
      <Box py={5}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={4}>
            <img
              src={testimonialImage}
              alt="Testimonial"
              style={{ width: '326px', height: '326px', borderRadius: '8px' }} 
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box p={3}>
            <Typography
                variant="subtitle1"
                sx={{ color: '#708090', mb: 2 }}
              >Macenas dignissim justo eget nulla rutrum molestie. Meacenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed liboritis seem dui, velrutrum risus tinccidunt ullamcorper. Proin eu enium metus.Vivamus sed libero ornare, tristique quam in, gravida enim. nullam ut molesstie arcu at hendrerit elit. Morbi laoreet elit at ligula moslestie, nec molestie mi balandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim spadien, vitae placcetrt ante feugiat eget.Quisque malesuada enim sapien,vitae placerat ante feugiat eget.Quisque vulputate odio neque, eget efficitur libero condimentum id. curabitur id nibh id sem dignissim finibus ac sit amet magna.
            
              </Typography>
            
            </Box>
            </Grid>
            
            
        </Grid>
      </Box>
      
    </Container>
  );
};

export default TestimonialsSection;
