import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



// Hailing from the small township of Motueka in Te Tau Ihu (The South Island) 
// these taonga are hand crafted from recycled tyre tubing.

const useStyles = makeStyles((theme) => ({
  gridRoot: {
    width: "100%",
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
    },
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textButton: {
    height: "50px",
    width: "150px",
    textAlign: "center",
    border: "3px solid white",
    fontFamily: "Permanent Marker",
    fontSize: "20px",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "50px"
    }
  },
  socialButton: {
    width: "50px",
    height: "50px",
    border: "3px solid white",
    overflow: "hidden",
    fontFamily: "Permanent Marker",
    fontSize: "20px",
    padding: "10px"
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const lessThanSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className={classes.gridRoot}>
      <Grid item >
        <ButtonGroup>
          <ButtonBase className={classes.socialButton}><PhotoCameraOutlinedIcon /></ButtonBase>
          <ButtonBase className={classes.socialButton}>F</ButtonBase>
          <ButtonBase className={classes.socialButton}><EmailOutlinedIcon /></ButtonBase>
        </ButtonGroup>
      </Grid>

      <Grid item >
        <ButtonGroup>
          <ButtonBase className={classes.textButton}>
            {lessThanSm ? <InfoOutlinedIcon /> : "About"}
          </ButtonBase>
          <ButtonBase className={classes.textButton}>
            {lessThanSm ? <StorefrontOutlinedIcon /> : "Shop"}
          </ButtonBase>
        </ButtonGroup>
      </Grid>

      <Grid item>
        <ButtonBase className={classes.textButton}>
          {lessThanSm ? "" : "$0.00"}
          <ShoppingCartIcon />
        </ButtonBase>
      </Grid>
    </Grid>
  );
}