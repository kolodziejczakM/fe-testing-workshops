import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from '@components/app';

it('displays greeting', () => {
  render(<App />);

  expect(screen.getByTestId('app-header')).toHaveTextContent(
    'Hello, this is App component'
  );
});
