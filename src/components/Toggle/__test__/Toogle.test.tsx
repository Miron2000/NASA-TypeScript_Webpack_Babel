import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import App from '../../../App';
import Toogle from '../Toggle';

test('Toogle snapshot', async () => {
  const darkMode = false;
  const component = render(<Toogle darkMode={darkMode} setDarkMode={() => !darkMode} />);
  expect(component).toMatchSnapshot();
});

test('renders with light mode default', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('toggle-theme-input')).toBeInTheDocument();
  expect(getByTestId('darkModeApp')).toHaveClass('light-mode');
});

test('toggles the theme', () => {
  const { getByTestId } = render(<App />);
  const toggleBtn = getByTestId('toggle-theme-input');
  fireEvent.click(toggleBtn);
  expect(getByTestId('darkModeApp')).toHaveClass('dark-mode');
  fireEvent.click(toggleBtn);
  expect(getByTestId('darkModeApp')).toHaveClass('light-mode');
});
