import { ColumnDef, flexRender } from '@tanstack/react-table';

import { TableProps } from '../types/types';

import { TableBody, TableCell, TableRow } from '@/components/Table';

interface DataTableBodyProps<TData, TValue> extends TableProps<TData> {
  columns: ColumnDef<TData, TValue>[];
}

export default function DataTableBody<TData, TValue>({
  table,
  columns,
}: DataTableBodyProps<TData, TValue>) {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
            {row.getVisibleCells().map((cell) => (
              <TableCell
                key={cell.id}
                className={row.getIsSelected() ? 'bg-gray-200' : ''}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className='h-24'>
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
