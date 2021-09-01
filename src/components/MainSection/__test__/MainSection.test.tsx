import React from 'react';
import {
  fireEvent, render, screen, act,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainSection from '../MainSection';
import SelectCamera from '../SelectCamera/SelectCamera';
import SelectMarsRover from '../SelectMarsRover/SelectMarsRover';

// Тест на проверку ренедринга MainSection без ошибок
test('Renders without crashing', async () => {
  const component = render(<MainSection />);
  expect(component).toMatchSnapshot();
  component.unmount();
});

// Тест на проверку текста в начале в MainSection
test('Header renders with correct text', () => {
  const component = render(<MainSection />);
  const headerElMainSection = component.getByTestId('header__MainSection');

  expect(headerElMainSection.textContent).toBe('Mars Rover Photos');
});

// Тест на проверку текста кнопки
test('Button renders with GO!', () => {
  const component = render(<MainSection />);
  const btn = component.getByTestId('btn__MainSection');

  expect(btn.textContent).toBe('GO!');
});

// Тест на проверку value селекта с SelectMarsRover
test('Select SelectMarsRover contains initial value text', () => {
  const { getByTestId } = render(<SelectMarsRover />);

  const selectEl = (getByTestId('selectMarsRover__MainSection') as HTMLInputElement).value;
  expect(selectEl).toBe('curiosity');
});

// Тест на проверку value селекта с SelectCamera
test('select SelectCamera contains initial value text', () => {
  const { getByTestId } = render(<SelectCamera roverChosen="curiosity" />);

  const selectEl = (getByTestId('selectCamera__MainSection') as HTMLInputElement).value;
  expect(selectEl).toBe('FHAZ');
});

// Тест на проверку селекта с SelectMarsRover
test('Simulates selection component SelectMarsRover', () => {
  render(<SelectMarsRover />);

  expect((screen.getByText('Curiosity') as HTMLOptionElement).selected).toBeTruthy();
  expect((screen.getByText('Opportunity') as HTMLOptionElement).selected).toBeFalsy();
  expect((screen.getByText('Spirit') as HTMLOptionElement).selected).toBeFalsy();
});

// global.fetch = jest.fn(() => Promise.resolve({
//   json: () => Promise.resolve({
//     data: {
//       id: 102693,
//       sol: 1000,
//       camera: {
//         id: 20,
//         name: 'FHA',
//         rover_id: 5,
//         full_name: 'Front Hazard Avoidance Camera',
//       },
//       img_src: 'https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
//       earth_date: '2015-05-30',
//       rover: {
//         id: 5,
//         name: 'Curiosity',
//         landing_date: '2012-08-06',
//         launch_date: '2011-11-26',
//         status: 'active',
//       },
//     },
//   }),
// }));

// Тест на проверку Запроса АПИ (fetch)
test('Fetches and displays data', async () => {
  render(<MainSection />);
  expect(screen.getByText('Front Hazard Avoidance Camera')).toBeInTheDocument();
});

// Тест на проверку меняется value у select c SelectMarsRover
test('Change on select', async () => {
  await act(async () => {
    const { getByTestId } = render(<SelectMarsRover />);
    const select = getByTestId('selectMarsRover__MainSection');
    const selectElValue = (getByTestId('selectMarsRover__MainSection') as HTMLInputElement).value;
    const selectWord = 'curiosity';
    fireEvent.change(select, { target: { value: 'selectWord' } });
    expect(selectElValue).toBe(selectWord);
  });
});
