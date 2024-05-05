import formatDate from '../../utils/formatDate';

interface DateCellProps {
  date: string;
}

export default function DateCell({ date }: DateCellProps) {
  return <div className='text-center font-medium'>{formatDate(date)}</div>;
}
