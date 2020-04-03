import React from 'react';
import Grid from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { header } from '../data/styles';

const useStyles = makeStyles(() => header);

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
