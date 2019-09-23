import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  summaryForm: {
    flexGrow: 1,
    padding: 10,
    margin: '20px 0',
    backgroundColor: '#ffecb3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: '#0a2c48',
  },
}));

const SummaryForm = ({ carBrand, carModel, fuelType, isOpen }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {isOpen && (
        <Paper className={classes.summaryForm}>
          <Typography variant="subtitle2">
            Wybrana marka: {carBrand}
          </Typography>
          <Typography variant="subtitle2">
            Wybrany model: {carModel}
          </Typography>
          <Typography variant="subtitle2">
            Typ paliwa: {fuelType}
          </Typography>
        </Paper>
      )}
    </React.Fragment>
  );
};

export default SummaryForm;
