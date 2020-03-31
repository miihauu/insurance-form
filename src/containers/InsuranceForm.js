import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import FormInput from '../components/FormInput';

import Grid from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import ConfirmButton from '../components/ConfirmButton';
import { API_KEY, API_URL, urlCTA } from '../API_DATA/api_data';

const useStyles = makeStyles(() => ({
  content: {
    flexGrow: 1,
    height: '60%',
    width: '100%',
    marginTop: '20px'
  }
}));

const InsuranceForm = ({ brands, models, fuelTypes }) => {
  const classes = useStyles();
  useEffect(() => {}, []);

  const [values, setValues] = useState({
    brand: null,
    model: null,
    fuelType: null
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const { brand, model, fuelType } = values;

  return (
    <>
      <Grid className={classes.content}>
        <FormInput
          handleChange={handleChange}
          inputType="carBrand"
          inputLabel="Marka"
          listOfElements={brands}
          carBrands={brands}
          selectedValue={brand}
        />
        <FormInput
          handleChange={handleChange}
          inputType="carModel"
          inputLabel="Model"
          listOfElements={models}
          selectedValue={model}
          isDisabled={!brands.length}
        />
        <FormInput
          handleChange={handleChange}
          inputType="fuelType"
          inputLabel="Paliwo"
          listOfElements={fuelTypes}
          selectedValue={fuelType}
          isDisabled={!models.length}
        />
        <ConfirmButton
          isOpen={model && fuelType}
          carBrand={brand}
          carModel={model}
          URL={urlCTA}
          buttonText="OBLICZ SKŁADKĘ"
        />
      </Grid>
    </>
  );
};

const mapStateToProps = ({ cars }) => {
  return {
    brands: cars.brands,
    models: cars.models,
    fuelTypes: cars.fuelType,
    loading: cars.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCarBrandsBegin: () => dispatch(getCarBrandsBegin()),
    getCarBrandsSucceed: brands => dispatch(getCarBrandsSucceed(brands)),
    getCarBrandsFailed: error => dispatch(getCarBrandsFailed(error)),
    getCarModelsBegin: () => dispatch(getCarModelsBegin()),
    getCarModelsSucceed: carBrand => dispatch(getCarModelsSucceed(carBrand)),
    getCarModelsFailed: error => dispatch(getCarModelsFailed(error)),
    getCarFuelTypeBegin: () => dispatch(getCarFuelTypeBegin()),
    getCarFuelTypeSucceed: fuelType => dispatch(getCarFuelTypeSucceed(fuelType)),
    getCarFuelTypeFailed: err => dispatch(getCarFuelTypeFailed(err))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsuranceForm);
