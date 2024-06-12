import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(0,0,0,0.3)',
    zIndex: 99999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="KenLoader">
      <CircularProgress />
    </div>
  );
}
