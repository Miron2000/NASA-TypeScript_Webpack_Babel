import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import App from '../../../App';

// По дефолту какой стиль стоит
test('renders with light mode default', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('toggle-theme')).toBeInTheDocument();
  expect(getByTestId('darkModeApp')).toHaveStyle('background-color: rgb(98, 99, 99); color: rgb(255, 255, 255)');
});

// При клике на тогл меняет стили
test('toggles the theme', () => {
  const { getByTestId } = render(<App />);
  const toggleBtn = getByTestId('toggle-theme');
  fireEvent.click(toggleBtn);
  expect(getByTestId('darkModeApp')).toHaveStyle('background-color: rgb(255, 255, 255); color: rgb(51, 51, 51)');
  fireEvent.click(toggleBtn);
  expect(getByTestId('darkModeApp')).toHaveStyle('background-color: rgb(98, 99, 99); color: rgb(255, 255, 255)');
});
