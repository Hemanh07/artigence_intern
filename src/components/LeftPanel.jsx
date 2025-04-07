import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const bloodData = {
  rbc: 4.5,
  wbc: 7.2,
  platelets: 250
};

export const LeftPanel = () => {
  return (
    <Paper elevation={3} sx={{ height: '100%', p: 2 }}>
      <Typography variant="h6" gutterBottom>Blood Cell Counts</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="right">Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>RBC</TableCell>
              <TableCell align="right">{bloodData.rbc} M/µL</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>WBC</TableCell>
              <TableCell align="right">{bloodData.wbc} K/µL</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Platelets</TableCell>
              <TableCell align="right">{bloodData.platelets} K/µL</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};