import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Filter from './Filter';

describe('Filter', () => {
  const mockOnChange: jest.Mock<void, [React.ChangeEvent<HTMLInputElement>]> =
    jest.fn<void, [React.ChangeEvent<HTMLInputElement>]>();

  it('renders with the correct placeholder', () => {
    render(
      <Filter
        placeholder='Filter items by name...'
        value=''
        onChange={mockOnChange}
      />
    );

    const input = screen.getByPlaceholderText('Filter items by name...');
    expect(input).toBeInTheDocument();
  });

  it('renders with the correct value', () => {
    render(
      <Filter
        placeholder='Filter items by name...'
        value='Test value'
        onChange={mockOnChange}
      />
    );

    const input = screen.getByDisplayValue('Test value');
    expect(input).toBeInTheDocument();
  });

  // TODO: fix failing test
  it('calls onChange with the new value when the input is changed', async () => {
    render(
      <Filter
        placeholder='Filter items by name...'
        value=''
        onChange={mockOnChange}
      />
    );

    const input = screen.getByPlaceholderText('Filter items by name...');
    await userEvent.type(input, 'New value');

    expect(mockOnChange).toHaveBeenCalledTimes('New value'.length);
    const latestCall =
      mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1][0];
    expect(latestCall.target.value).toBe(
      'New value'.charAt('New value'.length - 1)
    );
  });
});
