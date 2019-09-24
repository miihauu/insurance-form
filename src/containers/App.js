import React from 'react';
import Header from '../components/Header';
import FormContent from './FormContent';

import Grid from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

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
  const textFieldColor = {
    mainColor: '#eeeeee',
    disabledColor: '#fafafa',
  };
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container className={classes.root}>
        <Header headerStyle={classes.header} />
        <FormContent textFieldColor={textFieldColor} />
      </Grid>
    </React.Fragment>
  );
}

export default App;
