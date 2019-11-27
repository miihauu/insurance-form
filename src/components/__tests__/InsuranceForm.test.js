import React from 'react';
import { mount } from 'enzyme';
import FormInput from '../FormInput';
import InsuranceForm from '../../containers/InsuranceForm';
import Root from '../../Root';
let wrapped;
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
