import React from 'react';
import { Link } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => {
  const customButton = {
    height: "50px",
    borderRadius: "5px",
    fontFamily: "Permanent Marker",
    fontSize: "20px",
    padding: "10px",
    transition: "background-color 0.3s ease",
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    }
  }

  return ({
    gridRoot: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("md")]: { padding: theme.spacing(0) },
      width: "100%",
      flexDirection: "row",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "space-between"
    },
    link: {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
    linkActive: {
      color: theme.palette.action.selected,
    },
    textButton: {
      ...customButton,
      minWidth: "150px",
      width: "150px",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        width: "50px",
        minWidth: "50px",
      },
    },
    iconButton: {
      ...customButton,
      minWidth: "50px",
      width: "50px",
      overflow: "hidden",
    },
  });
});

/** button with text & icon */
function DynamicIconButton({ children, text, Icon, ...props }) {
  const theme = useTheme();
  const classes = useStyles();
  const lessThanSm = useMediaQuery(theme.breakpoints.down("sm"));

  if (Icon && text) {
    return (
      <ButtonBase {...props} className={lessThanSm ? classes.iconButton : classes.textButton} >
        {lessThanSm ? <Icon /> : text}
      </ButtonBase>
    )
  } else {
    return (
      <ButtonBase {...props} className={classes.textButton} >
        {children}
      </ButtonBase>
    )
  }
}

/** Social Media Buttons */
export function SocialButtonGroup() {
  const classes = useStyles();

  return (
    <ButtonGroup>
      <a href="https://www.instagram.com/wekaearrings" className={classes.link}>
        <ButtonBase className={classes.iconButton}>
          <InstagramIcon />
        </ButtonBase>
      </a>
      <a href="https://www.facebook.com/WekaEarrings" className={classes.link}>
        <ButtonBase className={classes.iconButton}>
          <FacebookIcon />
        </ButtonBase>
      </a>
      <a href="mailto:wekaearrings@gmail.com" className={classes.link}>
        <ButtonBase className={classes.iconButton}>
          <EmailOutlinedIcon />
        </ButtonBase>
      </a>
    </ButtonGroup>
  )
}

/** Page navigation */
export function PageNavigation() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <Link to="/about" className={classes.link} activeClassName={classes.linkActive}>
          <DynamicIconButton Icon={InfoOutlinedIcon} text="About" />
        </Link>
      </Grid>
      <Grid item>
        <Link to="/shop" className={classes.link} activeClassName={classes.linkActive}>
          <DynamicIconButton Icon={StorefrontOutlinedIcon} text="Shop" />
        </Link>
      </Grid>
    </Grid>
  )
}

/** Navigation Layout */
export default function Navigation() {
  const classes = useStyles();
  const theme = useTheme();
  const lessThanSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className={classes.gridRoot}>
      <Grid container spacing={lessThanSm ? 0 : 5}>
        <Grid item>
          <SocialButtonGroup />
        </Grid>

        <Grid item>
          <PageNavigation />
        </Grid>
      </Grid>

      <Grid item>
        <DynamicIconButton Icon={ShoppingCartIcon} text="checkout" />
      </Grid>
    </Grid >
  );
}