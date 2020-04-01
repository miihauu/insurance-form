import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import { input } from '../data/styles';

const useStyles = makeStyles(() => input);

const ModelInput = ({ handleChange, label, options, value, isDisabled }) => {
  const classes = useStyles();

  return (
    <TextField
      select
      label={label}
      margin="normal"
      variant="filled"
      disabled={isDisabled}
      className={classes.textField}
      onChange={handleChange}
      value={value}
      InputProps={{
        className: classes.input
      }}
    >
      {options &&
        options.map(car => (
          <MenuItem key={car.model_name} value={car.model_name}>
            {car.model_name}
          </MenuItem>
        ))}
    </TextField>
  );
};

export default ModelInput;
