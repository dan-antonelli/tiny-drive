import { TableProps } from '../types/types';

export default function SelectedRowInfo<TData>({ table }: TableProps<TData>) {
  return (
    <div className='text-sm pl-8 text-gray-500'>
      {table.getFilteredSelectedRowModel().rows.length} of{' '}
      {table.getFilteredRowModel().rows.length} row(s) selected.
    </div>
  );
}
