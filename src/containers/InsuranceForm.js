import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import ConfirmButton from '../components/ConfirmButton';
import { getBrandsAction, getFuelTypesAction, getModelsAction } from '../api/apiActions';
import { HANDLE_BRAND, HANDLE_FUEL_TYPE, HANDLE_MODEL } from '../store/actionTypes';
import FormInput from '../components/FormInput';
import { content } from '../data/styles';
import { URL_CTA } from '../API_DATA/api_data';

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
    if (brand) return getModels(brand);
  }, [brand]);
  useEffect(() => {
    if (brand && model) return getFuelTypes(brand, model);
  }, [model]);

  const handleBrandChange = e => handleBrand(e.target.value);
  const handleModelChange = e => handleModel(e.target.value);
  const handleFuelTypeChange = e => handleFuelType(e.target.value);

  return (
    <Grid className={classes.content}>
      <FormInput handleChange={handleBrandChange} label="Marka" options={brands} value={brand} name="make_name" />
      <FormInput
        handleChange={handleModelChange}
        label="Model"
        options={models}
        value={model}
        isDisabled={!models.length}
        name="model_name"
      />
      <FormInput
        handleChange={handleFuelTypeChange}
        label="Paliwo"
        options={fuelTypes}
        value={fuelType}
        isDisabled={!fuelTypes.length}
        name="fuel_name"
      />
      <ConfirmButton
        isOpen={model && fuelType}
        text="OBLICZ SKŁADKĘ"
        cta={`${URL_CTA}?make_name=${brand}&model_name=${model}&fuel_name=${fuelType}`}
      />
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

const mapDispatchToProps = dispatch => ({
  handleBrand: payload => dispatch({ type: HANDLE_BRAND, payload }),
  handleModel: payload => dispatch({ type: HANDLE_MODEL, payload }),
  handleFuelType: payload => dispatch({ type: HANDLE_FUEL_TYPE, payload }),
  getBrands: () => dispatch(getBrandsAction()),
  getModels: brand => dispatch(getModelsAction(brand)),
  getFuelTypes: (brand, model) => dispatch(getFuelTypesAction(brand, model))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsuranceForm);
