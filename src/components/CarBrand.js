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

const CarBrand = ({
  handleChangeBrand,
  carBrands,
  selectedCarBrand,
  isLoading,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TextField
        select
        label="Marka"
        margin="normal"
        variant="filled"
        className={classes.textfield}
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
