import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import ItemSizeCell from './ItemSizeCell';

describe('ItemSizeCell', () => {
  test('renders without crashing', () => {
    const { container } = render(<ItemSizeCell />);
    expect(container).toBeInTheDocument();
  });

  test('displays size when size is provided', () => {
    const { getByText } = render(<ItemSizeCell size='M' />);
    expect(getByText('M')).toBeInTheDocument();
  });

  test('displays — when size is not provided', () => {
    const { getByText } = render(<ItemSizeCell />);
    expect(getByText('—')).toBeInTheDocument();
  });

  test('displays — when size is an empty string', () => {
    const { getByText } = render(<ItemSizeCell size='' />);
    expect(getByText('—')).toBeInTheDocument();
  });
});
