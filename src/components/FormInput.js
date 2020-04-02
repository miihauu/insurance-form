import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import { input } from '../data/styles';

const useStyles = makeStyles(() => input);

const FormInput = ({ handleChange, label, options, value, isDisabled, name }) => {
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
      {options.map(option => (
        <MenuItem key={option[name]} value={option[name]}>
          {option[name]}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default FormInput;
