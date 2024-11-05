// Login.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function Login({ onClose, onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(email, password); // استدعاء دالة onSubmit
    } else {
      console.error("onSubmit is not a function");
    }
  };

  return (
    <Box sx={{ /* التنسيق */ }}>
      <Typography variant="h5" component="h1" gutterBottom align="center">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          label="Email" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField 
          label="Password" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Login
        </Button>
        <Button onClick={onClose}>Close</Button>
      </form>
    </Box>
  );
}

export default Login;