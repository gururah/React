import React from 'react';
import { Container, Typography, Box, Grid, TextField, Button } from '@mui/material';

const Footer = () => {
  return (
    <Box bgcolor="#263238" py={5}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} color="#FFFFFF">
            <Typography variant="h6" >Company</Typography>
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4} color="#FFFFFF">
            <Typography variant="h6">Support</Typography>
            <ul>
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Status</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4} color="#FFFFFF">
            <Typography variant="h6">Stay up to date</Typography>
            <TextField label="Your email address" variant="outlined" fullWidth />
            <Button variant="contained" color="primary" fullWidth>Subscribe</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
    