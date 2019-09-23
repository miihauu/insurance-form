const initialState = {
  carBrands: [],
  loadingBrands: false,
  carModels: [],
  loadingModels: false,
  carModelsTextFieldEnabled: false,
  carFuelType: [],
  loadingCarFuelType: false,
  carFuelTypeTextFieldEnabled: false,
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BRANDS_BEGIN':
      return {
        ...state,
        loadingBrands: true,
        error: null,
      };
    case 'FETCH_BRANDS_SUCCEED':
      return {
        ...state,
        loadingBrands: false,
        carBrands: action.payload.carBrands,
      };
    case 'FETCH_BRANDS_FAILED':
      return {
        ...state,
        loadingBrands: false,
        error: action.payload.error,
        carBrands: [],
      };
    case 'FETCH_MODELS_BEGIN':
      return {
        ...state,
        loadingModels: true,
        error: null,
      };
    case 'FETCH_MODELS_SUCCEED':
      return {
        ...state,
        loadingModels: false,
        carModelsTextFieldEnabled: true,
        carModels: action.payload.carModels,
      };
    case 'FETCH_MODELS_FAILED':
      return {
        ...state,
        loadingModels: false,
        error: action.payload.error,
        carModels: [],
      };
    case 'FETCH_FUEL_TYPE_BEGIN':
      return {
        ...state,
        loadingCarFuelType: true,
        error: null,
      };
    case 'FETCH_FUEL_TYPE_SUCCEED':
      return {
        ...state,
        loadingCarFuelType: false,
        carFuelTypeTextFieldEnabled: true,
        carFuelType: action.payload.fuelType,
      };
    case 'FETCH_FUEL_TYPE_FAILED':
      return {
        ...state,
        loadingCarFuelType: false,
        error: action.payload.error,
        carFuelType: [],
      };
    default:
      return state;
  }
};

export default carReducer;
