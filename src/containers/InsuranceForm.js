import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import ConfirmButton from '../components/ConfirmButton';
import { getBrandsAction, getFuelTypesAction, getModelsAction } from '../api/apiActions';
import { HANDLE_BRAND, HANDLE_FUEL_TYPE, HANDLE_MODEL } from '../store/actionTypes';
import BrandInput from '../components/BrandInput';
import ModelInput from '../components/ModelInput';
import FuelInput from '../components/FuelInput';
import { content } from '../data/styles';

const useStyles = makeStyles(() => content);

const InsuranceForm = ({
  brands,
  models,
  fuelTypes,
  handleBrand,
  handleModel,
  handleFuelType,
  brand,
  model,
  fuelType,
  getBrands,
  getModels,
  getFuelTypes
}) => {
  const classes = useStyles();
  useEffect(() => getBrands(), []);
  useEffect(() => {
    if (brands.length && brand) return getModels();
  }, [brands.length]);
  useEffect(() => {
    if (brands.length && models.length && model) return getFuelTypes();
  }, [models.length]);

  return (
    <Grid className={classes.content}>
      <BrandInput handleChange={handleBrand} label="Marka" options={brands} value={brand} />
      <ModelInput handleChange={handleModel} label="Model" options={models} value={model} isDisabled={!brands.length} />
      <FuelInput
        handleChange={handleFuelType}
        label="Paliwo"
        options={fuelTypes}
        value={fuelType}
        isDisabled={!models.length}
      />
      <ConfirmButton isOpen={model && fuelType} carBrand={brand} carModel={model} buttonText="OBLICZ SKŁADKĘ" />
    </Grid>
  );
};

const mapStateToProps = ({ cars, cars: { car } }) => ({
  brand: car.brand,
  model: car.model,
  fuelType: car.fuelType,
  brands: cars.brands,
  models: cars.models,
  fuelTypes: cars.fuelTypes,
  loading: cars.loading
});

const mapDispatchToProps = (dispatch, { brand, model }) => ({
  handleBrand: payload => dispatch({ type: HANDLE_BRAND, payload }),
  handleModel: payload => dispatch({ type: HANDLE_MODEL, payload }),
  handleFuelType: payload => dispatch({ type: HANDLE_FUEL_TYPE, payload }),
  getBrands: () => dispatch(getBrandsAction()),
  getModels: () => dispatch(getModelsAction(brand)),
  getFuelTypes: () => dispatch(getFuelTypesAction(brand, model))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsuranceForm);
