import { HeaderGroup, flexRender } from '@tanstack/react-table';

import { TableHead, TableHeader, TableRow } from '@/components/Table';

interface DataTableHeaderProps<TData> {
  headerGroups: HeaderGroup<TData>[];
}

export default function DataTableHeader<TData>({
  headerGroups,
}: DataTableHeaderProps<TData>) {
  return (
    <TableHeader>
      {headerGroups.map((headerGroup) => (
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
