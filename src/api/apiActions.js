import { API_KEY, API_URL } from '../API_DATA/api_data';
import {
  getCarBrandsBegin,
  getCarBrandsSucceed,
  getCarBrandsFailed,
  getCarModelsBegin,
  getCarModelsSucceed,
  getCarModelsFailed,
  getCarFuelTypeBegin,
  getCarFuelTypeSucceed,
  getCarFuelTypeFailed
} from '../store/actions/actions';

export const getBrandsAction = () => dispatch => {
  dispatch(getCarBrandsBegin());
  fetch(`https://cors-anywhere.herokuapp.com/${API_URL}`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Basic ${API_KEY}`
    })
  })
    .then(response => response.json())
    .then(data => dispatch(getCarBrandsSucceed(data)))
    .catch(error => dispatch(getCarBrandsFailed(error)));
};

export const getModelsAction = brand => dispatch => {
  dispatch(getCarModelsBegin());
  fetch(`https://cors-anywhere.herokuapp.com/${API_URL}/${brand}/models`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Basic ${API_KEY}`
    })
  })
    .then(response => response.json())
    .then(data => dispatch(getCarModelsSucceed(data)))
    .catch(error => dispatch(getCarModelsFailed(error)));
};

export const getFuelTypesAction = (brand, model) => dispatch => {
  dispatch(getCarFuelTypeBegin());
  fetch(`https://cors-anywhere.herokuapp.com/${API_URL}/${brand}/models/${model}/fuels/`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Basic ${API_KEY}`
    })
  })
    .then(response => response.json())
    .then(data => dispatch(getCarFuelTypeSucceed(data)))
    .catch(error => dispatch(getCarFuelTypeFailed(error)));
};
