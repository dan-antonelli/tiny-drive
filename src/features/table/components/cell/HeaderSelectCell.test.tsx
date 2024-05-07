import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import HeaderSelectCell from './HeaderSelectCell';

describe('HeaderSelectCell', () => {
  const mockTable = {
    getIsAllPageRowsSelected: jest.fn() as jest.MockedFunction<() => boolean>,
    getIsSomePageRowsSelected: jest.fn() as jest.MockedFunction<() => boolean>,
    toggleAllPageRowsSelected: jest.fn() as jest.MockedFunction<
      (value: boolean) => void
    >,
  };

  it('renders correctly', () => {
    render(
      <HeaderSelectCell
        checked={
          mockTable.getIsAllPageRowsSelected() ||
          (mockTable.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) =>
          mockTable.toggleAllPageRowsSelected(!!value)
        }
      />
    );

    const checkbox = screen.getByRole('checkbox', { name: /Select all/i });
    expect(checkbox).toBeInTheDocument();
  });

  it('checks the checkbox when all rows are selected', () => {
    mockTable.getIsAllPageRowsSelected.mockReturnValue(true);

    render(
      <HeaderSelectCell
        checked={
          mockTable.getIsAllPageRowsSelected() ||
          (mockTable.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) =>
          mockTable.toggleAllPageRowsSelected(!!value)
        }
      />
    );

    const checkbox = screen.getByRole('checkbox', { name: /Select all/i });
    expect(checkbox).toBeChecked();
  });

  it('sets the checkbox to indeterminate when some rows are selected', () => {
    mockTable.getIsAllPageRowsSelected.mockReturnValue(false);
    mockTable.getIsSomePageRowsSelected.mockReturnValue(true);

    render(
      <HeaderSelectCell
        checked={
          mockTable.getIsAllPageRowsSelected() ||
          (mockTable.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) =>
          mockTable.toggleAllPageRowsSelected(!!value)
        }
      />
    );

    const checkbox = screen.getByRole('checkbox', { name: /Select all/i });
    expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
  });

  it('unchecks the checkbox when no rows are selected', () => {
    mockTable.getIsAllPageRowsSelected.mockReturnValue(false);
    mockTable.getIsSomePageRowsSelected.mockReturnValue(false);

    render(
      <HeaderSelectCell
        checked={
          mockTable.getIsAllPageRowsSelected() ||
          (mockTable.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) =>
          mockTable.toggleAllPageRowsSelected(!!value)
        }
      />
    );

    const checkbox = screen.getByRole('checkbox', { name: /Select all/i });
    expect(checkbox).not.toBeChecked();
  });
});
