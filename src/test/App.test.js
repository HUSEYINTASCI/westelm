import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import data from './products.json'

Enzyme.configure({ adapter: new Adapter() })

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Creates item from data', () => {
  const wrapper = mount(<App />)
  expect(wrapper.exists('.product-container')).toEqual(true)
})

it('Creates item number from data', () => {
  const wrapper = mount(<App />)
  const numberOfProducts = data.groups.length
  expect(wrapper.find('.product-container').length).toEqual(numberOfProducts)
})
