import React from 'react';
import { mount } from 'enzyme';
import FormInput from '../FormInput';
import InsuranceForm from '../../containers/InsuranceForm';
import Root from '../../Root';
import carReducer from '../../store/reducers/carReducer';

let wrapped;

const carBrands = [{ brand: 'bmw' }];
const error = { err: true };

beforeEach(() => {
  wrapped = mount(
    <Root>
      <InsuranceForm />
    </Root>,
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('InsuranceForm', () => {
  it('has a 3 form input components', () => {
    expect(wrapped.find(FormInput).length).toEqual(3);
  });
});

describe('Reducer', () => {
  it('reducer should render list of brands', () => {
    const state = {
      carBrands: [],
      error: null,
      loadingBrands: false,
    };
    const newState = carReducer(state, {
      type: 'FETCH_BRANDS_SUCCEED',
      payload: { carBrands },
    });
    expect(newState).toEqual({
      carBrands,
      error: null,
      loadingBrands: false,
    });
  });
  it('should set the error', () => {
    const state = { carBrands: [], error: null };
    const newState = carReducer(state, {
      type: 'FETCH_BRANDS_FAILED',
      carBrands: [],
      payload: { error },
    });
    expect(newState.error).toBeTruthy();
  });
});
