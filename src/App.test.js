import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
Enzyme.configure({ adapter: new Adapter() });


test('App renders', () => {
  const component = shallow(<App />);
  expect(component).toHaveLength(1);
});
test('jadencase',()=>{
  const component = shallow(<App />);
  const sentence = "i am a boy";
  console.log(<App />)
  expect(toJadenCase(sentence)).toEqual("I Am A Boy")
})
