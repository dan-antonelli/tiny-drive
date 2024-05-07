import { Column, Table } from '@tanstack/react-table';
import { ChevronDown } from 'lucide-react';

import Button from '@/components/shadcn/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/shadcn/ui/dropdown-menu';

interface ColumnTypeFilterProps<TData> extends Partial<Table<TData>> {
  getAllColumns: () => Column<TData, unknown>[];
}

export default function ColumnTypeFilter<TData>({
  getAllColumns,
}: ColumnTypeFilterProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='defaultOutline'
          className='ml-auto rounded text-defaultButtonForeground flex justify-between items-center'
        >
          Columns
          <ChevronDown className='ml-2' size={18} strokeWidth={2} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='bg-white'>
        {getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className='capitalize cursor-pointer dropdown-menu-item'
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
