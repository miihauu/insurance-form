import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import { input } from '../data/styles';

const useStyles = makeStyles(() => input);

const BrandInput = ({ handleChange, label, options, value, isDisabled }) => {
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
      {options.map(brand => (
        <MenuItem key={brand.make_name} value={brand.make_name}>
          {brand.make_name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default BrandInput;
