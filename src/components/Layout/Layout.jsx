import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Navbar from './navbar/navbar';
export default function Layout(props) {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Grid container spacing={3} style={{ width: '100%' }}>
        {props.children}
      </Grid>
    </>
  );
}
