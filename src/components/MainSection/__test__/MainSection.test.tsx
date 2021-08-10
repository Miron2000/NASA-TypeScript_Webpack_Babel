import React from 'react';
import { fireEvent, render } from '@testing-library/react';
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

  const selectEl = (getByTestId('selectMarsRover__MainSection') as HTMLInputElement).value;
  expect(selectEl).toBe('curiosity');
});

test('select SelectCamera contains initial value text', () => {
  const { getByTestId } = render(<SelectCamera />);

  const selectEl = (getByTestId('selectCamera__MainSection') as HTMLInputElement).value;
  expect(selectEl).toBe('');
});

test('button renders with GO!', () => {
  const component = render(<MainSection />);
  const btn = component.getByTestId('btn__MainSection');

  expect(btn.textContent).toBe('GO!');
});

test('change value of select works correctly', () => {
  const { getByTestId } = render(<SelectMarsRover />);
  const selectEl = getByTestId('selectMarsRover__MainSection');
  const selectElValue = (getByTestId('selectMarsRover__MainSection') as HTMLInputElement).value;
  fireEvent.change(selectEl, {
    target: {
      value: 'opportunity',
    },
  });

  expect(selectElValue).toBe('opportunity');
});
