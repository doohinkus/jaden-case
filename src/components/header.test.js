import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';

import Header from './header';
Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  it('should render the header', () => {
    expect(shallow(<Header text="test" />).exists(
      <header>
          <h1 className="text-center">test</h1>
      </header>)).toBe(true)
  });
});
