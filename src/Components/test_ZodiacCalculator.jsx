import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ZodiacCalculator from './ZodiacCalculator';

describe('ZodiacCalculator', () => {
  test('renders without errors', () => {
    render(<ZodiacCalculator />);
    expect(screen.getByText('Enter Your Birthday')).toBeInTheDocument();
  });

  test('displays main image when showResult is false', () => {
    render(<ZodiacCalculator />);
    expect(screen.getByAltText('Main Image')).toBeInTheDocument();
  });

  test('updates birthday state when input value changes', () => {
    render(<ZodiacCalculator />);
    const input = screen.getByLabelText('Enter Your Birthday');
    fireEvent.change(input, { target: { value: '1990-01-01' } });
    expect(input.value).toBe('1990-01-01');
  });

  test('calls handleSubmit when form is submitted', () => {
    render(<ZodiacCalculator />);
    const handleSubmit = jest.fn();
    const form = screen.getByTestId('zodiac-form');
    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalled();
  });

  test('displays zodiac sign and image when showResult is true', () => {
    render(<ZodiacCalculator />);
    const input = screen.getByLabelText('Enter Your Birthday');
    fireEvent.change(input, { target: { value: '1990-01-01' } });
    const form = screen.getByTestId('zodiac-form');
    fireEvent.submit(form);
    expect(screen.getByText('Your Chinese Zodia Sign is:')).toBeInTheDocument();
    expect(screen.getByAltText('Rat')).toBeInTheDocument();
  });

  test('calls resetForm when Go Back button is clicked', () => {
    render(<ZodiacCalculator />);
    const input = screen.getByLabelText('Enter Your Birthday');
    fireEvent.change(input, { target: { value: '1990-01-01' } });
    const form = screen.getByTestId('zodiac-form');
    fireEvent.submit(form);
    const backButton = screen.getByText('Go Back');
    fireEvent.click(backButton);
    expect(screen.getByText('Enter Your Birthday')).toBeInTheDocument();
  });
});import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ZodiacCalculator from './ZodiacCalculator';

describe('ZodiacCalculator', () => {
  test('renders without errors', () => {
    render(<ZodiacCalculator />);
    expect(screen.getByText('Enter Your Birthday')).toBeInTheDocument();
  });

  test('displays main image when showResult is false', () => {
    render(<ZodiacCalculator />);
    expect(screen.getByAltText('Main Image')).toBeInTheDocument();
  });

  test('updates birthday state when input value changes', () => {
    render(<ZodiacCalculator />);
    const input = screen.getByLabelText('Enter Your Birthday');
    fireEvent.change(input, { target: { value: '1990-01-01' } });
    expect(input.value).toBe('1990-01-01');
  });

  test('calls handleSubmit when form is submitted', () => {
    render(<ZodiacCalculator />);
    const handleSubmit = jest.fn();
    const form = screen.getByTestId('zodiac-form');
    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalled();
  });

  test('displays zodiac sign and image when showResult is true', () => {
    render(<ZodiacCalculator />);
    const input = screen.getByLabelText('Enter Your Birthday');
    fireEvent.change(input, { target: { value: '1990-01-01' } });
    const form = screen.getByTestId('zodiac-form');
    fireEvent.submit(form);
    expect(screen.getByText('Your Chinese Zodia Sign is:')).toBeInTheDocument();
    expect(screen.getByAltText('Rat')).toBeInTheDocument();
  });

  test('calls resetForm when Go Back button is clicked', () => {
    render(<ZodiacCalculator />);
    const input = screen.getByLabelText('Enter Your Birthday');
    fireEvent.change(input, { target: { value: '1990-01-01' } });
    const form = screen.getByTestId('zodiac-form');
    fireEvent.submit(form);
    const backButton = screen.getByText('Go Back');
    fireEvent.click(backButton);
    expect(screen.getByText('Enter Your Birthday')).toBeInTheDocument();
  });

  test('CalculatorFunction returns correct image and animal', () => {
    const date = '1990-01-01';
    const { image, animal } = CalculatorFunction(date);
    expect(image).toBe('/images/Rat.png');
    expect(animal).toBe('Rat');
  });
});