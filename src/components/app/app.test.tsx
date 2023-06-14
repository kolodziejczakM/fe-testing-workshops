import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from '@components/app';

// no root describe - not able to run them all from editor UI

it('displays greeting', () => {
  render(<App />);

  // is possible thanks to data-testid="app-header" in src/components/app/app.tsx
  expect(screen.getByTestId('app-header')).toHaveTextContent(
    'Hello, this is App component'
  );
});

it('displays paragraph', () => {
  render(<App />);

  // https://stackoverflow.com/questions/65122974/getbyrole-query-for-paragraph-not-working-during-react-testing
  // expect(screen.getByRole('paragraph')).toHaveTextContent(
  //   'Mariuszku nie wezwałem Cię tu aby prosić Cię o wybaczenie. Chce Cię prosić o pożyczkę.'
  // );
  expect(
    screen.getByText(
      'Mariuszku nie wezwałem Cię tu aby prosić Cię o wybaczenie. Chce Cię prosić o pożyczkę.'
    )
  ).toBeInTheDocument();
});

it('displays correct image', () => {
  render(<App />);

  // getByRole - must be visible for user -> img with display:none will fail.
  expect(screen.getByRole('img')).toHaveAttribute('src', 'static-asset-stub'); // testing locally imported images src doesn't make sense - see "staticAssetMock.ts" and "jest.config.ts"
});
