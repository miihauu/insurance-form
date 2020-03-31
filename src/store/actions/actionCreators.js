import { API_KEY, API_URL } from '../../API_DATA/api_data';
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
} from './actions';
import { useEffect } from 'react';

const getBrands = () => {
  getCarBrandsBegin();
  fetch(`https://cors-anywhere.herokuapp.com/${API_URL}`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Basic ${API_KEY}`
    })
  })
    .then(response => response.json())
    .then(data => getCarBrandsSucceed(data))
    .catch(error => getCarBrandsFailed(error));
};

const getModels = carBrand => {
  getCarModelsBegin();
  fetch(`https://cors-anywhere.herokuapp.com/${API_URL}/${brand}/models`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Basic ${API_KEY}`
    })
  })
    .then(response => response.json())
    .then(data => getCarModelsSucceed(data))
    .catch(error => getCarModelsFailed(error));
};

const getFuelTypes = (brand, model) => {
  getCarFuelTypeBegin();
  fetch(`https://cors-anywhere.herokuapp.com/${API_URL}/${brand}/models/${model}/fuels/`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Basic ${API_KEY}`
    })
  })
    .then(response => response.json())
    .then(data => getCarFuelTypeSucceed(data))
    .catch(error => getCarFuelTypeFailed(error));
};

useEffect(() => {
  if (brand) {
    getDataCarModels(brand);
  }
}, [values.carBrand]);

useEffect(() => {
  if (brand && model) {
    getDataFuelType(brand, model);
  }
}, [values.carModel]);
