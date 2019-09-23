import React from 'react';
import Header from '../components/Header';
import FormContent from './FormContent';

import Grid from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { API_KEY, API_URL, urlCTA } from '../API_DATA/api_data';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#fff',
    height: 'auto',
    border: '1px solid #eeeeee',
    padding: 0,
    paddingBottom: '20px',
    maxWidth: 370,
    fontFamily: 'Roboto',
  },

  content: {
    flexGrow: 1,
    height: '60%',
    width: '100%',
    marginTop: '20px',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container className={classes.root}>
        <Header headerStyle={classes.header} />
        <FormContent
          API_URL={API_URL}
          API_KEY={API_KEY}
          urlCTA={urlCTA}
        />
      </Grid>
    </React.Fragment>
  );
}

export default App;