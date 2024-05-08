import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import formatDate from '../../utils/formatDate';

import DateCell from './DateCell';

jest.mock('../../utils/formatDate');

describe('DateCell', () => {
  it('renders the formatted date', () => {
    const expected = '1 June 2021';
    const mockDate = '2021-06-01T12:00:00';
    (formatDate as jest.Mock).mockReturnValue(expected);

    render(<DateCell date={mockDate} />);

    expect(screen.getByText(expected)).toBeInTheDocument();
    expect(formatDate).toHaveBeenCalledWith(mockDate);
  });

  it('renders "Invalid Date" when the date prop is not provided', () => {
    const mockDate = 'not a date';
    const expected = 'Invalid Date';
    (formatDate as jest.Mock).mockReturnValue('Invalid Date');

    render(<DateCell date={mockDate} />);

    expect(screen.getByText(expected)).toBeInTheDocument();
    expect(formatDate).toHaveBeenCalledWith(mockDate);
  });
});
