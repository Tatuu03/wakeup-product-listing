import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('axios'); // <-- mock axios to avoid ESM issues

test('renders main title', () => {
  render(<App />);
  const titleElement = screen.getByText(/WakeUp Product Listing/i);
  expect(titleElement).toBeInTheDocument();
});
