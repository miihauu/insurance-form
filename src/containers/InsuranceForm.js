import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import FormInput from '../components/FormInput';

import Grid from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import ConfirmButton from '../components/ConfirmButton';
import { API_KEY, API_URL, urlCTA } from '../API_DATA/api_data';
import { handleInput } from '../store/actions/actions';

const useStyles = makeStyles(() => ({
  content: {
    flexGrow: 1,
    height: '60%',
    width: '100%',
    marginTop: '20px'
  }
}));

const InsuranceForm = ({ brands, models, fuelTypes, handleInputs, brand, model, fuelType }) => {
  const classes = useStyles();
  useEffect(() => {}, []);

  const handleChange = name => event => handleInputs(name, event.target.value);

  return (
    <>
      <Grid className={classes.content}>
        <FormInput
          handleChange={handleChange}
          inputType="brand"
          inputLabel="Marka"
          listOfElements={brands}
          carBrands={brands}
          selectedValue={brand}
        />
        <FormInput
          handleChange={handleChange}
          inputType="model"
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
        <ConfirmButton isOpen={model && fuelType} carBrand={brand} carModel={model} buttonText="OBLICZ SKŁADKĘ" />
      </Grid>
    </>
  );
};

const mapStateToProps = ({ cars, cars: { car } }) => ({
  brand: car.brand,
  model: car.model,
  fuelType: car.fuelType,
  brands: cars.brands,
  models: cars.models,
  fuelTypes: cars.fuelType,
  loading: cars.loading
});

const mapDispatchToProps = dispatch => ({
  handleInputs: payload => dispatch(handleInput(payload))
  /*
    getCarBrandsBegin: () => dispatch(getCarBrandsBegin()),
    getCarBrandsSucceed: brands => dispatch(getCarBrandsSucceed(brands)),
    getCarBrandsFailed: error => dispatch(getCarBrandsFailed(error)),
    getCarModelsBegin: () => dispatch(getCarModelsBegin()),
    getCarModelsSucceed: carBrand => dispatch(getCarModelsSucceed(carBrand)),
    getCarModelsFailed: error => dispatch(getCarModelsFailed(error)),
    getCarFuelTypeBegin: () => dispatch(getCarFuelTypeBegin()),
    getCarFuelTypeSucceed: fuelType => dispatch(getCarFuelTypeSucceed(fuelType)),
    getCarFuelTypeFailed: err => dispatch(getCarFuelTypeFailed(err))
    */
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsuranceForm);
