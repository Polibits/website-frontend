import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the PoliBits navbar title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Polibits/i);
  expect(titleElement).toBeInTheDocument();
});
