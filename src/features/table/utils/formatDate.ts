// for example, '2021-06-01T12:00:00' -> 'Jun 1, 2021'
export default function formatDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(undefined, options);
}
