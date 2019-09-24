import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import CarBrand from '../components/CarBrand';
import CarModel from '../components/CarModel';
import CarFuelType from '../components/CarFuelType';
import ConfirmButton from '../components/ConfirmButton';
import { API_KEY, API_URL, urlCTA } from '../API_DATA/api_data';

import {
  getCarBrandsBegin,
  getCarBrandsSucceed,
  getCarBrandsFailed,
  getCarModelsBegin,
  getCarModelsSucceed,
  getCarModelsFailed,
  getCarFuelTypeBegin,
  getCarFuelTypeSucceed,
  getCarFuelTypeFailed,
} from '../store/actions/actions';
import SummaryForm from '../components/SummaryForm';

const useStyles = makeStyles(() => ({
  content: {
    flexGrow: 1,
    height: '60%',
    width: '100%',
    marginTop: '20px',
  },
}));

const FormContent = ({
  getCarBrandsBegin,
  getCarBrandsSucceed,
  getCarBrandsFailed,
  getCarModelsBegin,
  getCarModelsSucceed,
  getCarModelsFailed,
  getCarFuelTypeBegin,
  getCarFuelTypeSucceed,
  getCarFuelTypeFailed,
  carBrands,
  carModels,
  fuelTypes,
  textFieldCarModelsOpen,
  textFieldFuelTypeOpen,
  loadingBrands,
  loadingModels,
  loadingCarFuelType,
  textFieldColor,
}) => {
  const classes = useStyles();
  useEffect(() => {
    getCarBrandsBegin();
    fetch(`https://cors-anywhere.herokuapp.com/${API_URL}`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Basic ${API_KEY}`,
      }),
    })
      .then(response => response.json())
      .then(data => {
        getCarBrandsSucceed(data);
      })
      .catch(error => {
        getCarBrandsFailed(error);
      });
  }, []);

  const getDataCarModels = carBrand => {
    getCarModelsBegin();
    fetch(
      `https://cors-anywhere.herokuapp.com/${API_URL}/${carBrand}/models`,
      {
        method: 'GET',
        headers: new Headers({
          Authorization: `Basic ${API_KEY}`,
        }),
      },
    )
      .then(response => response.json())
      .then(data => {
        getCarModelsSucceed(data);
      })
      .catch(error => {
        getCarModelsFailed(error);
      });
  };

  const getDataFuelType = (carBrand, carModel) => {
    getCarFuelTypeBegin();
    fetch(
      `https://cors-anywhere.herokuapp.com/${API_URL}/${carBrand}/models/${carModel}/fuels/`,
      {
        method: 'GET',
        headers: new Headers({
          Authorization: `Basic ${API_KEY}`,
        }),
      },
    )
      .then(response => response.json())
      .then(data => {
        getCarFuelTypeSucceed(data);
      })
      .catch(error => {
        getCarFuelTypeFailed(error);
      });
  };

  const [values, setValues] = useState({
    carBrand: null,
    carModel: null,
    fuelType: null,
  });

  useEffect(() => {
    if (values.carBrand) {
      getDataCarModels(values.carBrand);
    }
  }, [values.carBrand]);

  useEffect(() => {
    if (values.carBrand && values.carModel) {
      getDataFuelType(values.carBrand, values.carModel);
    }
  }, [values.carModel]);

  useEffect(() => {
    if (values.carBrand) {
      localStorage.setItem('carBrand', values.carBrand);
    }
  }, [values.carBrand]);

  useEffect(() => {
    if (localStorage) {
      setValues({
        carBrand: localStorage.getItem('carBrand'),
      });
    }
  }, [localStorage]);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <React.Fragment>
      <Grid className={classes.content}>
        <CarBrand
          handleChangeBrand={handleChange}
          carBrands={carBrands}
          selectedCarBrand={values.carBrand}
          isLoading={loadingBrands}
          color={textFieldColor}
        />
        <CarModel
          handleChangeModel={handleChange}
          carModels={carModels}
          selectedCarModel={values.carModel}
          isOpen={textFieldCarModelsOpen}
          isLoading={loadingModels}
          color={textFieldColor}
        />
        <CarFuelType
          handleChangeFuelType={handleChange}
          fuelTypes={fuelTypes}
          selectedFuelType={values.fuelType}
          isOpen={textFieldFuelTypeOpen}
          isLoading={loadingCarFuelType}
          color={textFieldColor}
        />
        <SummaryForm
          carBrand={values.carBrand}
          carModel={values.carModel}
          fuelType={values.fuelType}
          isOpen={
            values.carBrand && values.carModel && values.fuelType
          }
        />
        <ConfirmButton
          isOpen={values.carModel && values.fuelType}
          carBrand={values.carBrand}
          carModel={values.carModel}
          URL={urlCTA}
          buttonText={'OBLICZ SKŁADKĘ'}
        />
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    carBrands: state.cars.carBrands,
    carModels: state.cars.carModels,
    fuelTypes: state.cars.carFuelType,
    textFieldCarModelsOpen: state.cars.carModelsTextFieldEnabled,
    textFieldFuelTypeOpen: state.cars.carFuelTypeTextFieldEnabled,
    loadingBrands: state.cars.loadingBrands,
    loadingModels: state.cars.loadingModels,
    loadingCarFuelType: state.cars.loadingCarFuelType,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCarBrandsBegin: () => {
      dispatch(getCarBrandsBegin());
    },
    getCarBrandsSucceed: carBrands => {
      dispatch(getCarBrandsSucceed(carBrands));
    },
    getCarBrandsFailed: err => {
      dispatch(getCarBrandsFailed(err));
    },
    getCarModelsBegin: () => {
      dispatch(getCarModelsBegin());
    },
    getCarModelsSucceed: carBrand => {
      dispatch(getCarModelsSucceed(carBrand));
    },
    getCarModelsFailed: err => {
      dispatch(getCarModelsFailed(err));
    },
    getCarFuelTypeBegin: () => {
      dispatch(getCarFuelTypeBegin());
    },
    getCarFuelTypeSucceed: fuelType => {
      dispatch(getCarFuelTypeSucceed(fuelType));
    },
    getCarFuelTypeFailed: err => {
      dispatch(getCarFuelTypeFailed(err));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormContent);
