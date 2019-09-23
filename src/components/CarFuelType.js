import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  textfield: {
    width: '100%',
  },
  input: {
    backgroundColor: '#eeeeee',
    '&.Mui-disabled': {
      backgroundColor: '#fafafa',
    },
  },
}));

const CarFuelType = ({
  handleChangeFuelType,
  fuelTypes,
  selectedFuelType,
  isOpen,
  isLoading,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TextField
        select
        disabled={isOpen ? false : true}
        label="Typ paliwa"
        margin="normal"
        variant="filled"
        onChange={handleChangeFuelType('fuelType')}
        value={selectedFuelType}
        className={classes.textfield}
        InputProps={{
          className: classes.input,
        }}
      >
        {fuelTypes &&
          fuelTypes.map(car => (
            <MenuItem
              key={car.fuel_name}
              value={car.fuel_name}
              className={classes.menuItem}
            >
              {car.fuel_name}
            </MenuItem>
          ))}
      </TextField>
    </React.Fragment>
  );
};

export default CarFuelType;
