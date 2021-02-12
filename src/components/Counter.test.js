import { shallow } from 'enzyme';
import logo from '../logo.svg';

import Counter from './Counter';

describe('Counter', () => {
  const wrapper = shallow(<Counter />);

  test('renders react logo', () => {
    expect(wrapper.find('img').prop('src')).toEqual(logo);
  });

  test('renders learn react link', () => {
    expect(wrapper.find('a.App-link').text()).toEqual('Learn React');
  });
});
