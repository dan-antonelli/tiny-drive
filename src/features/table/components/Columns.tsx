import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

import formatDate from '../utils/formatDate';

import Button from '@/components/shadcn/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/shadcn/ui/dropdown-menu';
import { FileInfo } from '@/types/types';

const columns: ColumnDef<FileInfo>[] = [
  {
    accessorKey: 'name',
    header: () => <div className='text-center'>Name</div>,
  },
  {
    accessorKey: 'lastModified',
    header: () => <div className='text-center'>Last Modified</div>,
    cell: ({ row }) => {
      const lastModified: string = row.getValue('lastModified');
      return (
        <div className='text-center font-medium'>
          {formatDate(lastModified)}
        </div>
      );
    },
  },
  {
    accessorKey: 'size',
    header: 'Size',
  },
  {
    id: 'actions',
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='default' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='bg-white'>
            <DropdownMenuItem className='cursor-pointer'>
              Download
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='cursor-pointer'>
              Rename
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'>
              Move to trash
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default columns;
