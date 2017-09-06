import React from 'react';
import { shallow } from 'enzyme';
import Project from '../src/components/Project';

test('Should Display repo name ', () => {
   const wrapper = shallow(<Project />);
   expect(wrapper).toMatchSnapshot();
})
