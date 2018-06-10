import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';

import Form from './form';

Enzyme.configure({ adapter: new Adapter() });

describe('Form', () => {
  it('should have a working change method', () => {
    const changeFunc = jest.fn();
    const submitFunc = jest.fn();
    const c = "change called";
    const output = shallow(
      <Form change={changeFunc} submit={submitFunc} />
    );
    output.find('input').simulate('change', c);
    expect(changeFunc).toBeCalledWith("change called");
  });

})
