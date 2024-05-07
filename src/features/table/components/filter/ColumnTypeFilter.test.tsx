import '@testing-library/jest-dom';

import { Column } from '@tanstack/react-table';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ColumnTypeFilter from './ColumnTypeFilter';

describe('ColumnTypeFilter', () => {
  const mockColumns = [
    {
      id: 'testColumn1',
      getCanHide: () => true,
      getIsVisible: () => true,
      toggleVisibility: jest.fn(),
    },
    {
      id: 'testColumn2',
      getCanHide: () => false,
      getIsVisible: () => true,
      toggleVisibility: jest.fn(),
    },
  ] as unknown as Column<unknown, unknown>[];

  it('renders correctly', () => {
    const { getByText } = render(<ColumnTypeFilter columns={mockColumns} />);

    expect(getByText('Columns')).toBeInTheDocument();
  });

  it('responds to user interaction', async () => {
    render(<ColumnTypeFilter columns={mockColumns} />);

    const trigger = screen.getByRole('button', { name: /Columns/i });
    await userEvent.click(trigger);
    const testColumn = await screen.findByRole('menuitemcheckbox', {
      name: /testColumn1/i,
    });

    expect(testColumn).toBeInTheDocument();

    await userEvent.click(testColumn);

    expect(mockColumns[0].toggleVisibility).toHaveBeenCalled();
  });

  it('does not display columns that cannot be hidden', async () => {
    render(<ColumnTypeFilter columns={mockColumns} />);

    const trigger = screen.getByRole('button', { name: /Columns/i });
    await userEvent.click(trigger);

    const testColumn2 = screen.queryByRole('menuitemcheckbox', {
      name: /testColumn2/i,
    });
    expect(testColumn2).not.toBeInTheDocument();
  });

  it('does not call toggleVisibility when a column that cannot be hidden is clicked', async () => {
    render(<ColumnTypeFilter columns={mockColumns} />);

    const trigger = screen.getByRole('button', { name: /Columns/i });
    await userEvent.click(trigger);

    const testColumn2 = screen.queryByRole('menuitemcheckbox', {
      name: /testColumn2/i,
    });
    if (testColumn2) {
      await userEvent.click(testColumn2);
    }

    expect(mockColumns[1].toggleVisibility).not.toHaveBeenCalled();
  });

  it('does not display the dropdown menu when the Columns button is not clicked', () => {
    render(<ColumnTypeFilter columns={mockColumns} />);

    const dropdownMenu = screen.queryByRole('menu');
    expect(dropdownMenu).not.toBeInTheDocument();
  });
});
