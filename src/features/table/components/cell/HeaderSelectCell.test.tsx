import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/react';

import HeaderSelectCell from './HeaderSelectCell';

describe('HeaderSelectCell', () => {
  let mockToggleAllPageRowsSelected: jest.Mock;

  beforeEach(() => {
    mockToggleAllPageRowsSelected = jest.fn();
  });

  test('renders without crashing', () => {
    const { getByLabelText } = render(
      <HeaderSelectCell
        getIsAllPageRowsSelected={() => false}
        getIsSomePageRowsSelected={() => false}
        toggleAllPageRowsSelected={mockToggleAllPageRowsSelected}
      />
    );

    expect(getByLabelText('Select all')).toBeInTheDocument();
  });

  test('calls toggleAllPageRowsSelected on checkbox click', () => {
    const { getByLabelText } = render(
      <HeaderSelectCell
        getIsAllPageRowsSelected={() => false}
        getIsSomePageRowsSelected={() => false}
        toggleAllPageRowsSelected={mockToggleAllPageRowsSelected}
      />
    );

    fireEvent.click(getByLabelText('Select all'));

    expect(mockToggleAllPageRowsSelected).toHaveBeenCalled();
  });

  test('checkbox is checked when all rows are selected', () => {
    const { getByLabelText } = render(
      <HeaderSelectCell
        getIsAllPageRowsSelected={() => true}
        getIsSomePageRowsSelected={() => false}
        toggleAllPageRowsSelected={mockToggleAllPageRowsSelected}
      />
    );

    expect(getByLabelText('Select all')).toBeChecked();
  });

  test('checkbox is unchecked when no rows are selected', () => {
    const { getByLabelText } = render(
      <HeaderSelectCell
        getIsAllPageRowsSelected={() => false}
        getIsSomePageRowsSelected={() => false}
        toggleAllPageRowsSelected={mockToggleAllPageRowsSelected}
      />
    );

    expect(getByLabelText('Select all')).not.toBeChecked();
  });

  test('checkbox is indeterminate when some rows are selected', () => {
    const { getByLabelText } = render(
      <HeaderSelectCell
        getIsAllPageRowsSelected={() => false}
        getIsSomePageRowsSelected={() => true}
        toggleAllPageRowsSelected={mockToggleAllPageRowsSelected}
      />
    );

    const checkbox = getByLabelText('Select all');
    expect(checkbox.getAttribute('data-state')).toBe('indeterminate');
  });
});
