import { Row } from '@tanstack/react-table';

interface SelectedRowInfoProps<TData> {
  filteredSelectedRows: Row<TData>[];
  filteredRowModelRows: Row<TData>[];
}

export default function SelectedRowInfo<TData>({
  filteredSelectedRows,
  filteredRowModelRows,
}: SelectedRowInfoProps<TData>) {
  return (
    <div className='text-sm pl-8 text-gray-500'>
      {filteredSelectedRows.length} of {filteredRowModelRows.length} row(s)
      selected.
    </div>
  );
}
