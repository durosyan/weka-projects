import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Kowhaiwhai from '../components/Kowhaiwhai'


const useStyles = makeStyles((theme) => ({
  page:{
    height: "72vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  grid: {
    textAlign: "center",
    flexWrap: "nowrap",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden"
  }
}));

export default function Shop() {
  const classes = useStyles();

  return (
    <Grid container className={classes.page}>
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <Typography variant="h4">This is a work in progress, come back soon!</Typography>
        </Grid>
      </Grid>
      <Kowhaiwhai height="20vh" />
    </Grid>
  );
}