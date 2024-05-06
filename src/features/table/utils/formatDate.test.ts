import formatDate from './formatDate';

describe('formatDate', () => {
  it('formats a date string correctly', () => {
    const formattedDate = formatDate('2021-06-01T12:00:00');
    expect(formattedDate).toBe('Jun 1, 2021');
  });

  it('returns "Invalid Date" for an invalid date string', () => {
    const formattedDate = formatDate('not a date');
    expect(formattedDate).toBe('Invalid Date');
  });
});
