/**
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native';
import React from 'react';
import App from '../App';
import {act} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-geolocation-service', () => {
  return {
    getCurrentPosition: jest.fn(),
    requestAuthorization: jest.fn(),
  };
});

it('renders correctly', () => {
  jest.useFakeTimers();
  act(() => {
    jest.advanceTimersByTime(2000);
  });

  renderer.create(<App />);
});
