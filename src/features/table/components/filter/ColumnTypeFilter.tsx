import { ChevronDown } from 'lucide-react';

import { TableProps } from '../../types/types';

import Button from '@/components/shadcn/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/shadcn/ui/dropdown-menu';

export default function ColumnTypeFilter<TData>({ table }: TableProps<TData>) {
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
        {table
          .getAllColumns()
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
