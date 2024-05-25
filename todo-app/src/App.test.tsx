import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * @description Renders the `App` component, then searches for an HTML element with
 * text containing the phrase `"learn react"`. The element is expected to be in the
 * document.
 */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
