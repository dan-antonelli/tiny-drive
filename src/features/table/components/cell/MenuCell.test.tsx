import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MenuCell from './MenuCell';

describe('MenuCell', () => {
  test('renders DropdownTrigger with correct text', () => {
    render(
      <MenuCell
        triggerName='Menu'
        items={['Download', 'Rename', 'separator', 'Move to trash']}
      />
    );
    const trigger = screen.getByRole('button', { name: /Menu/i });
    expect(trigger).toBeInTheDocument();
  });

  test('renders DropdownItems when trigger is clicked', async () => {
    render(
      <MenuCell
        triggerName='Menu'
        items={['Download', 'Rename', 'separator', 'Move to trash']}
      />
    );
    const trigger = screen.getByRole('button', { name: /Menu/i });

    await userEvent.click(trigger);

    const downloadItem = await screen.findByRole('menuitem', {
      name: /Download/i,
    });
    const renameItem = await screen.findByRole('menuitem', { name: /Rename/i });
    const moveToTrashItem = await screen.findByRole('menuitem', {
      name: /Move to trash/i,
    });

    expect(downloadItem).toBeInTheDocument();
    expect(renameItem).toBeInTheDocument();
    expect(moveToTrashItem).toBeInTheDocument();
  });

  test('renders separator when items include "separator"', async () => {
    render(
      <MenuCell
        triggerName='Menu'
        items={['Download', 'Rename', 'separator', 'Move to trash']}
      />
    );
    const trigger = screen.getByRole('button', { name: /Menu/i });

    await userEvent.click(trigger);

    const separator = screen.getByRole('separator');
    expect(separator).toBeInTheDocument();
  });
});
