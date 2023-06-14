import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import identity from 'lodash/identity';
import { Button } from '@components/button';

// Because this component has different component inside - it can be verified via unit test or integration test
// *** as unit test *** //
describe('Button', () => {
  // GOOD ENOUGH
  it('has "button" attribute', async () => {
    render(<Button onClick={identity} text="Button text" />);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  // BETTER - SHOW THE ROOT CAUSE OF THAT TEST && TEST VIA USER INTERACTIONS
  it('has "button" attribute - BETTER', async () => {
    const user = userEvent.setup(); // https://testing-library.com/docs/user-event/intro/
    const onSubmit = jest.fn();

    //? Why not jest.fn() within Button's onClick? - because I'm neither testing number of calls here nor mocking implementation - see: https://jestjs.io/docs/mock-function-api/#jestfnimplementation
    render(
      <form onSubmit={onSubmit}>
        <Button onClick={identity} text="Button text" />
      </form>
    );

    //? Why not e.g.screen.getByText()? or screen.getByTestId('')? - because thanks to that we do two things at once: get the element and verify that it has the right role
    //? what about paragraph text role?
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');

    await user.click(screen.getByRole('button'));

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('calls `onClick` callback once on user click', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(<Button onClick={onClick} text="Button text" />);

    await user.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1); //? Why not .toHaveBeenCalled()? - It's better to check how many calls were made instead of checking if it was called at all. Similarly to using getByRole - we checking two things at once.
  });
});

// *** hybrid - using custom assertions *** //

// *** as integration test *** //
