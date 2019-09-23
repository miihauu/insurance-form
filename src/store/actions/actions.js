import {
  FETCH_BRANDS_BEGIN,
  FETCH_BRANDS_SUCCEED,
  FETCH_BRANDS_FAILED,
  FETCH_MODELS_BEGIN,
  FETCH_MODELS_SUCCEED,
  FETCH_MODELS_FAILED,
  FETCH_FUEL_TYPE_BEGIN,
  FETCH_FUEL_TYPE_SUCCEED,
  FETCH_FUEL_TYPE_FAILED,
} from '../actionTypes';

export const getCarBrandsBegin = () => {
  return {
    type: FETCH_BRANDS_BEGIN,
  };
};

export const getCarBrandsSucceed = carBrands => {
  return {
    type: FETCH_BRANDS_SUCCEED,
    payload: { carBrands },
  };
};

export const getCarBrandsFailed = err => {
  return {
    type: FETCH_BRANDS_FAILED,
    payload: { err },
  };
};

export const getCarModelsBegin = () => {
  return {
    type: FETCH_MODELS_BEGIN,
  };
};

export const getCarModelsSucceed = carModels => {
  return {
    type: FETCH_MODELS_SUCCEED,
    payload: { carModels },
  };
};

export const getCarModelsFailed = err => {
  return {
    type: FETCH_MODELS_FAILED,
    payload: { err },
  };
};

export const getCarFuelTypeBegin = () => {
  return {
    type: FETCH_FUEL_TYPE_BEGIN,
  };
};

export const getCarFuelTypeSucceed = fuelType => {
  return {
    type: FETCH_FUEL_TYPE_SUCCEED,
    payload: { fuelType },
  };
};

export const getCarFuelTypeFailed = err => {
  return {
    type: FETCH_FUEL_TYPE_FAILED,
    payload: { err },
  };
};
