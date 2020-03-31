import * as types from '../actionTypes';

const initialState = {
  car: {
    brand: null,
    model: null,
    fuelType: null
  },
  brands: [],
  models: [],
  fuelType: [],
  loading: false,
  error: null
};

const handleInputsState = (state, { field, value }) => ({ ...state, [field]: value });

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.HANDLE_INPUT:
      return {
        ...state,
        ...{ car: handleInputsState(state, payload) }
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
