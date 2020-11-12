import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  kowhaiwhai: {
    width: "100vw",
    bottom: "0px",
    position: "absolute",
    backgroundImage: "url('Ngaru.svg')",
    overflow: "hidden",
    opacity: "0.4"
  }
}));

export default function Kowhaiwhai({ height }) {
  const classes = useStyles();
  return <div className={classes.kowhaiwhai} style={{ height: height }} />;
}