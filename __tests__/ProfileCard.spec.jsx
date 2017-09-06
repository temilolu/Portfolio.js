import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ProfileCard from '../src/components/ProfileCard';

test('Should Display User name and job ', () => {
    const output = shallow(<ProfileCard name={profile.name} />);
    expect(output).toMatchSnapshot();
})
