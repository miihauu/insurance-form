import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  textfield: {
    width: '100%',
  },
  input: color => ({
    backgroundColor: color.mainColor,
    '&.Mui-disabled': {
      backgroundColor: color.disabledColor,
    },
  }),
}));

const FormInput = ({
  handleChange,
  inputType,
  inputLabel,
  listOfElements,
  selectedValue,
  isDisabled,
  color,
}) => {
  const classes = useStyles(color);

  const formOutput = () => {
    if (inputType === 'carBrand') {
      return listOfElements.map(brand => (
        <MenuItem
          key={brand.make_name}
          value={brand.make_name}
          className={classes.menuItem}
        >
          {brand.make_name}
        </MenuItem>
      ));
    } else if (inputType === 'carModel') {
      return (
        listOfElements &&
        listOfElements.map(car => (
          <MenuItem
            key={car.model_name}
            value={car.model_name}
            className={classes.menuItem}
          >
            {car.model_name}
          </MenuItem>
        ))
      );
    } else {
      return (
        listOfElements &&
        listOfElements.map(car => (
          <MenuItem
            key={car.fuel_name}
            value={car.fuel_name}
            className={classes.menuItem}
          >
            {car.fuel_name}
          </MenuItem>
        ))
      );
    }
  };

  return (
    <React.Fragment>
      <TextField
        select
        label={
          selectedValue && inputType === 'carBrand'
            ? null
            : inputLabel
        }
        margin="normal"
        variant="filled"
        disabled={isDisabled}
        className={`${classes.textfield} ${color}`}
        onChange={handleChange(inputType)}
        value={selectedValue}
        InputProps={{
          className: classes.input,
        }}
      >
        {formOutput()}
        {console.log(inputType)}
      </TextField>
    </React.Fragment>
  );
};

export default FormInput;
