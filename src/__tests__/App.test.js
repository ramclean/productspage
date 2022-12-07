import { render, screen } from '@testing-library/react';
import App from '../App';
import Products from '../Components/Products';
import Search from '../Components/Search'
import SortButtons from '../Components/SortButtons'

test('renders app without crashing', () => {
  render(<App />);

});

test('renders products heading h1', () => {
  render(<Products />);
  const header = screen.getByRole("heading", {
    level: 1
  });;
  expect(header).toBeInTheDocument();

});

test('renders sort by button dropdown', () => {
  render(<Products />);
  const button = screen.getByRole("button",  { name: 'Sort by:' });;
  expect(button).toBeInTheDocument();

});


test('renders search input', () => {
  render(<Search />);
  const input = screen.getByRole("textbox");;
  expect(input).toBeInTheDocument();

});



