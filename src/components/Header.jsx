import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { detectionData } from '../data/detections';

export const Header = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography variant="h6">
            Patient ID:{detectionData.id}
          </Typography>
          <Typography variant="h6">
            {currentDate}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};