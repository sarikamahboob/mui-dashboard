import { Box } from '@mui/material';
import React from 'react';
import Axios from '../../components/Axios';
import Header from './../../components/Header';

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to yur dashboard"/>
      </Box>
      <Axios/>
    </Box> 
  )
}

export default Dashboard