import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

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
});
