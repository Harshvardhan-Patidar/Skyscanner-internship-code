import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders input field and calendar', () => {
  render(<App />);

  // Check if the input field is present
  const inputElement = screen.getByPlaceholderText(/Select a date/i);
  expect(inputElement).toBeInTheDocument();

//   // Check if the calendar component renders when a date is selected
  fireEvent.click(inputElement);
  const calendarElement = screen.getByText(/Change month/i); // Checking the calendar UI text
  expect(calendarElement).toBeInTheDocument();
});

test('selects a date and updates the input field', () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText(/Select a date/i);
  expect(inputElement).toHaveValue('');

//   // Simulating a date selection
  fireEvent.click(screen.getByText(/10/i)); // Assume selecting the 10th of the month

//   // Ensure the input field updates
  expect(inputElement.value).not.toBe('');
});
