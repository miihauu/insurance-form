import React from 'react';
import Grid from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  header: {
    flexGrow: 1,
    height: '230px',
    padding: 0,
    backgroundColor: '#f5f5f5',
    borderRadius: '0 0 50% 50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#0a2c48',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid className={classes.header}>
        <Typography variant="h6">Zadanie rekrutacyjne</Typography>
      </Grid>
    </React.Fragment>
  );
};

export default Header;
