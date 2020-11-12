import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Kowhaiwhai from '../components/Kowhaiwhai'

const useStyles = makeStyles((theme) => ({
  page: {
    height: "60vh",
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
  },
  text: {
    padding: theme.spacing(1),
    overflow: "hidden",
    [theme.breakpoints.down("md")]: { fontSize: "24px" },
    fontSize: "32px"
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid container className={classes.page}>
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <Typography variant="h3">Kia Ora!</Typography>
          <Typography className={classes.text}>
            Weka Projects hail from the small township of Motueka in Te Tau Ihu (The South Island) New Zealand.<br />
            We create hand crafted gifts and unique items. Visit us on facebook or instagram to browse our selection of toanga and send us a message to place your order! <br />
            By Ordering from us, you're helping support a Maori business.
          </Typography>
        </Grid>
      </Grid>
      <Kowhaiwhai height="20vh" />
    </Grid>
  );
}