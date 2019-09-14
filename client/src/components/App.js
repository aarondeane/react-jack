import React from 'react';
import { Container, Typography, Box, Link } from '@material-ui/core';
import Navbar from './Navbar';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Container>
        <Box my={3}>
          <Typography variant="h4" component="h1" gutterBottom align="center">Game</Typography>
        </Box>
      </Container>
    </div>
  );
}
