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

const CarBrand = ({
  handleChangeBrand,
  carBrands,
  selectedCarBrand,
  isLoading,
  color,
}) => {
  const classes = useStyles(color);

  return (
    <React.Fragment>
      <TextField
        select
        label="Marka"
        margin="normal"
        variant="filled"
        className={`${classes.textfield} ${color}`}
        onChange={handleChangeBrand('carBrand')}
        value={selectedCarBrand}
        InputProps={{
          className: classes.input,
        }}
      >
        {carBrands.map(brand => (
          <MenuItem
            key={brand.make_name}
            value={brand.make_name}
            className={classes.menuItem}
          >
            {brand.make_name}
          </MenuItem>
        ))}
      </TextField>
    </React.Fragment>
  );
};

export default CarBrand;
