import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainSection from '../MainSection';
import SelectCamera from '../SelectCamera/SelectCamera';
import SelectMarsRover from '../SelectMarsRover/SelectMarsRover';

test('renders without crashing', async () => {
  const component = render(<MainSection />);
  expect(component).toMatchSnapshot();
  component.unmount();
});

test('header renders with correct text', () => {
  const component = render(<MainSection />);
  const headerElMainSection = component.getByTestId('header__MainSection');

  expect(headerElMainSection.textContent).toBe('Mars Rover Photos');
});

test('select SelectMarsRover contains initial value text', () => {
  const { getByTestId } = render(<SelectMarsRover />);

  const selectEl = (document.getElementById('selectMarsRover__MainSection') as HTMLInputElement).value;
  expect(selectEl).toBe('curiosity');
});

test('button renders with GO!', () => {
  const component = render(<MainSection />);
  const btn = component.getByTestId('btn__MainSection');

  expect(btn.textContent).toBe('GO!');
});
