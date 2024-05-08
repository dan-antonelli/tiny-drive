import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RowSelectCell from './RowSelectCell';

describe('RowSelectCell', () => {
  const mockRow = {
    getIsSelected: jest.fn() as jest.MockedFunction<() => boolean>,
    toggleSelected: jest.fn() as jest.MockedFunction<(value: boolean) => void>,
  };

  it('renders a checked checkbox when the row is selected', () => {
    mockRow.getIsSelected.mockReturnValue(true);

    render(
      <RowSelectCell
        checked={mockRow.getIsSelected()}
        onCheckedChange={(value) => mockRow.toggleSelected(!!value)}
      />
    );

    const checkbox = screen.getByRole('checkbox', { name: /Select row/i });
    expect(checkbox).toBeChecked();
  });

  it('renders an unchecked checkbox when the row is not selected', () => {
    mockRow.getIsSelected.mockReturnValue(false);

    render(
      <RowSelectCell
        checked={mockRow.getIsSelected()}
        onCheckedChange={(value) => mockRow.toggleSelected(!!value)}
      />
    );

    const checkbox = screen.getByRole('checkbox', { name: /Select row/i });
    expect(checkbox).not.toBeChecked();
  });

  it('calls toggleSelected with the new checked state when the checkbox is clicked', async () => {
    mockRow.getIsSelected.mockReturnValue(false);

    render(
      <RowSelectCell
        checked={mockRow.getIsSelected()}
        onCheckedChange={(value) => mockRow.toggleSelected(!!value)}
      />
    );

    const checkbox = screen.getByRole('checkbox', { name: /Select row/i });
    await userEvent.click(checkbox);

    expect(mockRow.toggleSelected).toHaveBeenCalledWith(true);
  });
});
