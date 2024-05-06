import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ItemTypeCell from './ItemTypeCell';

describe('ItemTypeCell', () => {
  test('renders FileIcon when type is "file"', () => {
    const { asFragment } = render(<ItemTypeCell type='file' />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders FolderIcon when type is not "file"', () => {
    const { asFragment } = render(<ItemTypeCell type='folder' />);
    expect(asFragment()).toMatchSnapshot();
  });
});
