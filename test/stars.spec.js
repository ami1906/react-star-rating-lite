import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Stars from '../src/stars.js';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('Stars Test Cases', function() {
  it('Should render the component with stars', function() {
    let wrapper = shallow(<Stars {...{hoverIndex: 4, weight:30, color:'orange'}}/>);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').children().length).toBe(5);
  });
});
