import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import ItemTypeCell from './ItemTypeCell';

describe('ItemTypeCell', () => {
  test('renders FileIcon when type is "file"', () => {
    const { container } = render(<ItemTypeCell type='file' />);
    const fileIcon = container.querySelector('.lucide-file');
    expect(fileIcon).toBeInTheDocument();
  });

  test('renders FolderIcon when type is not "file"', () => {
    const { container } = render(<ItemTypeCell type='folder' />);
    const folderIcon = container.querySelector('.lucide-folder');
    expect(folderIcon).toBeInTheDocument();
  });
});
