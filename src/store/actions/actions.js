import {
  FETCH_BRANDS_BEGIN,
  FETCH_BRANDS_SUCCEED,
  FETCH_BRANDS_FAILED,
  FETCH_MODELS_BEGIN,
  FETCH_MODELS_SUCCEED,
  FETCH_MODELS_FAILED,
  FETCH_FUEL_TYPE_BEGIN,
  FETCH_FUEL_TYPE_SUCCEED,
  FETCH_FUEL_TYPE_FAILED
} from '../actionTypes';

export const getCarBrandsBegin = () => {
  return {
    type: FETCH_BRANDS_BEGIN
  };
};

export const getCarBrandsSucceed = brands => {
  return {
    type: FETCH_BRANDS_SUCCEED,
    payload: { brands }
  };
};

export const getCarBrandsFailed = error => {
  return {
    type: FETCH_BRANDS_FAILED,
    payload: { error }
  };
};

export const getCarModelsBegin = () => {
  return {
    type: FETCH_MODELS_BEGIN
  };
};

export const getCarModelsSucceed = models => {
  console.log(models);
  return {
    type: FETCH_MODELS_SUCCEED,
    payload: { models }
  };
};

export const getCarModelsFailed = error => {
  return {
    type: FETCH_MODELS_FAILED,
    payload: { error }
  };
};

export const getCarFuelTypeBegin = () => {
  return {
    type: FETCH_FUEL_TYPE_BEGIN
  };
};

export const getCarFuelTypeSucceed = fuelTypes => {
  return {
    type: FETCH_FUEL_TYPE_SUCCEED,
    payload: { fuelTypes }
  };
};

export const getCarFuelTypeFailed = error => {
  return {
    type: FETCH_FUEL_TYPE_FAILED,
    payload: { error }
  };
};
