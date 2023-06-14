import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import identity from 'lodash/identity';
import { Button } from '@components/button';
import { IconName } from '@components/icon';
import { customScreen } from '@utils/testing/customScreen';

// Because this component has different component inside - it can be verified via unit test or integration test
// *** as unit test *** //
describe('Button - UNIT', () => {
  // GOOD ENOUGH
  it('has "button" attribute', () => {
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
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-called-with.md
  });
});

// *** hybrid - using custom assertions *** //

describe('Button - HYBRID', () => {
  // the same as in UNIT and:

  const props = {
    onClick: identity,
    text: 'Button text',
  };

  it('has "button" attribute', () => {
    render(<Button {...props} />);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  describe('when iconName prop is provided', () => {
    const withIconProps = {
      ...props,
      iconName: 'alert-fill' as IconName,
    };

    // NOTE: we didn't check if the icon is not rendered by default - focusing only on success (on render) scenario is a popular mistake
    it('renders proper icon', async () => {
      render(<Button {...withIconProps} />);

      expect(
        customScreen.getAllIconsByName(withIconProps.iconName)
      ).toHaveLength(1);
    });
  });
});

// *** as integration test *** //
