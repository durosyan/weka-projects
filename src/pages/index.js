import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import FrontPageLogo from '../assets/logo-feathers.svg';
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
  },
  icon: {
    [theme.breakpoints.down("md")]: { maxWidth: "200px", maxHeight: "100px" },
    [theme.breakpoints.up("md")]: { maxWidth: "300px", maxHeight: "200px" },
    [theme.breakpoints.up("lg")]: { maxWidth: "300px", maxHeight: "200px" }
  },
  pageTitle: {
    fontFamily: "Amatic SC",
    [theme.breakpoints.down("md")]: { fontSize: "50px" },
    [theme.breakpoints.up("md")]: { fontSize: "120px" }
  },
  pageSubtitle: {
    fontFamily: "Roboto"
  },
  kowhaiwhai: {
    height: "20vh",
    width: "100vw",
    bottom: "0px",
    position: "absolute",
    backgroundImage: "url('Ngaru.svg')",
    overflow: "hidden",
    opacity: "0.4"
  }
}));

export default function FrontPage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.page}>
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <FrontPageLogo className={classes.icon} />
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.pageTitle}>WEKA PROJECTS</Typography>
          <Typography className={classes.pageSubtitle}>MOTUEKA NZ</Typography>
        </Grid>
      </Grid>
      <Kowhaiwhai height="20vh" />
    </Grid>
  );
}