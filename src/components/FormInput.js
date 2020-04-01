import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  textfield: {
    width: '100%'
  },
  input: color => ({
    backgroundColor: color.mainColor,
    '&.Mui-disabled': {
      backgroundColor: color.disabledColor
    }
  })
}));

const FormInput = ({ handleChange, inputType, inputLabel, listOfElements, selectedValue, isDisabled, color }) => {
  const classes = useStyles(color);
  {
    console.log(listOfElements);
  }

  const formOutput = () => {
    if (inputType === 'brand') {
      return listOfElements.map(brand => (
        <MenuItem key={brand.make_name} value={brand.make_name}>
          {brand.make_name}
        </MenuItem>
      ));
    } else if (inputType === 'model') {
      return (
        listOfElements &&
        listOfElements.map(car => (
          <MenuItem key={car.model_name} value={car.model_name}>
            {car.model_name}
          </MenuItem>
        ))
      );
    } else {
      return (
        listOfElements &&
        listOfElements.map(car => (
          <MenuItem key={car.fuel_name} value={car.fuel_name}>
            {car.fuel_name}
          </MenuItem>
        ))
      );
    }
  };

  return (
    <>
      <TextField
        select
        label={selectedValue && inputType === 'brand' ? null : inputLabel}
        margin="normal"
        variant="filled"
        disabled={isDisabled}
        className={`${classes.textfield} ${color}`}
        onChange={handleChange}
        value={selectedValue}
        InputProps={{
          className: classes.input
        }}
      >
        {listOfElements.map(brand => (
          <MenuItem key={brand.make_name} value={brand.make_name}>
            {brand.make_name}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default FormInput;
