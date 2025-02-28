import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the PoliBits navbar title', async () => {
  render(<App />);
  const titleElements = await screen.findAllByText(/Polibits/i);
  expect(titleElements.length).toBeGreaterThan(0);
});

