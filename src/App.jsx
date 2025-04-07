import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Header } from './components/Header';
import { LeftPanel } from './components/LeftPanel';
import { WSIViewer } from './components/WSIViewer';
import './App.css';

const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <Box sx={{ display: 'flex', flex: 1, gap: 2, p: 2, overflow: 'hidden' }}>
          <Box sx={{ width: 300 }}>
            <LeftPanel />
          </Box>
          <Box sx={{ flex: 1, bgcolor: 'white', borderRadius: 1, overflow: 'hidden' }}>
            <WSIViewer />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;