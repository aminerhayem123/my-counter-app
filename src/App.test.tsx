import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders counter and increments count', () => {
  render(<App />);
  
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();

  const incrementButton = screen.getByText('Increment');
  fireEvent.click(incrementButton);
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});