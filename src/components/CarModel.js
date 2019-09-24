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

const CarModel = ({
  handleChangeModel,
  carModels,
  selectedCarModel,
  isOpen,
  isLoading,
  color,
}) => {
  const classes = useStyles(color);
  return (
    <React.Fragment>
      <TextField
        select
        disabled={isOpen ? false : true}
        label={'Model'}
        margin="normal"
        variant="filled"
        className={classes.textfield}
        onChange={handleChangeModel('carModel')}
        value={selectedCarModel}
        InputProps={{
          className: classes.input,
        }}
      >
        {carModels &&
          carModels.map(car => (
            <MenuItem
              key={car.model_name}
              value={car.model_name}
              className={classes.menuItem}
            >
              {car.model_name}
            </MenuItem>
          ))}
      </TextField>
    </React.Fragment>
  );
};

export default CarModel;
