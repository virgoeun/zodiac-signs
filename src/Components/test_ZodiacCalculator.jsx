import { render, screen } from '@testing-library/react';
import ZodiacCalculator from './ZodiacCalculator';

describe('ZodiacCalculator', () => {
  test('should calculate the correct zodiac animal', () => {
    const date = '1990-01-01';
    render(<ZodiacCalculator />);
    const zodiacAnimal = screen.getByText(/Zodiac Animal:/i);
    expect(zodiacAnimal).toHaveTextContent('Horse');
  });

  test('should handle negative index correctly', () => {
    const date = '1890-01-01';
    render(<ZodiacCalculator />);
    const zodiacAnimal = screen.getByText(/Zodiac Animal:/i);
    expect(zodiacAnimal).toHaveTextContent('Pig');
  });
});