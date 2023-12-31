import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ZodiacCalculator component', () => {
  render(<App />);
  const zodiacCalculatorElement = screen.getByTestId('zodiac-calculator');
  expect(zodiacCalculatorElement).toBeInTheDocument();
});

test('renders FacebookShareButton component', () => {
  render(<App />);
  const facebookShareButtonElement = screen.getByTestId('facebook-share-button');
  expect(facebookShareButtonElement).toBeInTheDocument();
});

test('renders LinkedinShareButton component', () => {
  render(<App />);
  const linkedinShareButtonElement = screen.getByTestId('linkedin-share-button');
  expect(linkedinShareButtonElement).toBeInTheDocument();
});

test('renders TwitterShareButton component', () => {
  render(<App />);
  const twitterShareButtonElement = screen.getByTestId('twitter-share-button');
  expect(twitterShareButtonElement).toBeInTheDocument();
});