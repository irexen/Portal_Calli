/* Librearias usadas en la aplicación */
import { render, screen } from '@testing-library/react';
import App from './App';

// Renderizado
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
