import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';

import Jaden from './jaden';
Enzyme.configure({ adapter: new Adapter() });

describe('Jaden', () => {
  it('should render the jaden', () => {
  const tree = shallow(
     <Jaden text="Jaden" warning="" />
   );
   expect(tree).toMatchSnapshot();
 });
});
