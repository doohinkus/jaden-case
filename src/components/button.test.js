import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';

import Button from './button';
Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  it('should render button', () => {
    const action = jest.fn();
    const text = "text";
    const output = shallow(
      <Button action={action} text={text} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
})
