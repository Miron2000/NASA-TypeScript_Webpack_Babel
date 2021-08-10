import React from 'react';
import {
  fireEvent, render, screen, findAllByRole, cleanup, act,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import MainSection from '../MainSection';
import SelectCamera from '../SelectCamera/SelectCamera';
import SelectMarsRover from '../SelectMarsRover/SelectMarsRover';
import { PhotosArray } from '../../../types';

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
  const { getByTestId } = render(<SelectCamera />);

  const selectEl = (getByTestId('selectCamera__MainSection') as HTMLInputElement).value;
  expect(selectEl).toBe('');
});

// Тест на проверку селекта с SelectMarsRover
test('Simulates selection component SelectMarsRover', () => {
  render(<SelectMarsRover />);

  expect((screen.getByText('Curiosity') as HTMLOptionElement).selected).toBeTruthy();
  expect((screen.getByText('Opportunity') as HTMLOptionElement).selected).toBeFalsy();
  expect((screen.getByText('Spirit') as HTMLOptionElement).selected).toBeFalsy();
});

const hits: PhotosArray[] = [
  {
    id: 102693,
    sol: 1000,
    camera: {
      id: 20,
      name: 'FHA',
      rover_id: 5,
      full_name: 'Front Hazard Avoidance Camera',
    },
    img_src: 'https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
    earth_date: '2015-05-30',
    rover: {
      id: 5,
      name: 'Curiosity',
      landing_date: '2012-08-06',
      launch_date: '2011-11-26',
      status: 'active',
    },
  },
  {
    id: 102694,
    sol: 1000,
    camera: {
      id: 20,
      name: 'FHAZ',
      rover_id: 5,
      full_name: 'Front Hazard Avoidance Camera',
    },
    img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG',
    earth_date: '2015-05-30',
    rover: {
      id: 5,
      name: 'Curiosity',
      landing_date: '2012-08-06',
      launch_date: '2011-11-26',
      status: 'active',
    },
  },
];
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Тест на проверку Запроса АПИ (fetch)
// test('Fetches and displays data', async () => {
//   mockedAxios.get.mockResolvedValue({ data: { hits } });
//   const { getByRole, findAllByRole } = render(<MainSection />);
//   userEvent.click(getByRole('button'));
//   const items = await findAllByRole('listitem');
//   expect(items).toHaveLength(2);
//
//   expect(axios.get).toHaveBeenCalled('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&camera=RHAZ&api_key=AAQyOYypfA9qSs5C8aRlXI8u2tEXiJCtiGTUfdKR');
// });

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    data: {
      id: 102693,
      sol: 1000,
      camera: {
        id: 20,
        name: 'FHA',
        rover_id: 5,
        full_name: 'Front Hazard Avoidance Camera',
      },
      img_src: 'https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
      earth_date: '2015-05-30',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
  }),
}));

// Тест на проверку Запроса АПИ (fetch)
test('Fetches and displays data', async () => {
  await act(async () => render(<MainSection />));
  expect(screen.getByText('Front Hazard Avoidance Camera')).toBeInTheDocument();
});

// Тест на проверку меняется ли value у select c SelectMarsRover
test('Change on select', async () => {
  act(async () => {
    const { getByTestId } = render(<SelectMarsRover />);
    const select = getByTestId('selectMarsRover__MainSection');
    const selectElValue = (getByTestId('selectMarsRover__MainSection') as HTMLInputElement).value;
    const selectWord = 'Opportunity';
    fireEvent.change(select, { target: { value: 'selectWord' } });
    expect(selectElValue).toBe(selectWord);
  });
});
