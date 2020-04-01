import * as types from '../actionTypes';

const initialState = {
  car: {
    brand: '',
    model: '',
    fuelType: ''
  },
  brands: [],
  models: [],
  fuelTypes: [],
  loading: false,
  error: null
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.HANDLE_BRAND:
      return {
        ...state,
        car: { brand: payload }
      };
    case types.HANDLE_MODEL:
      return {
        ...state,
        car: { brand: payload }
      };
    case types.HANDLE_FUEL_TYPE:
      return {
        ...state,
        car: { brand: payload }
      };
    case types.FETCH_BRANDS_BEGIN:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_BRANDS_SUCCEED:
      return {
        ...state,
        loading: false,
        brands: payload.brands
      };
    case types.FETCH_BRANDS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error,
        brands: []
      };
    case types.FETCH_MODELS_BEGIN:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_MODELS_SUCCEED:
      return {
        ...state,
        loading: false,
        carModelsTextFieldEnabled: true,
        models: payload.models
      };
    case types.FETCH_MODELS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error,
        models: []
      };
    case types.FETCH_FUEL_TYPE_BEGIN:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_FUEL_TYPE_SUCCEED:
      return {
        ...state,
        loading: false,
        carFuelTypeTextFieldEnabled: true,
        fuelType: payload.fuelType
      };
    case types.FETCH_FUEL_TYPE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error,
        fuelType: []
      };
    default:
      return state;
  }
};

export default reducers;
