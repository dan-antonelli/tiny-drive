import { flexRender } from '@tanstack/react-table';

import { TableProps } from '../types/types';

import { TableHead, TableHeader, TableRow } from '@/components/Table';

export default function DataTableHeader<TData>({ table }: TableProps<TData>) {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead
                key={header.id}
                className={header.id === 'type' ? 'w-px' : 'w-1/8'}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
}
