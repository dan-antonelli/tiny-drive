import { ColumnDef } from '@tanstack/react-table';
import { File as FileIcon, Folder as FolderIcon } from 'lucide-react';

import formatDate from '../utils/formatDate';

import DropdownItem from './dropdown/DropdownItem';
import DropdownTrigger from './dropdown/DropdownTrigger';
import ItemSizeCell from './ItemSizeCell';
import SortButton from './SortButton';

import { Checkbox } from '@/components/shadcn/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
} from '@/components/shadcn/ui/dropdown-menu';
import { FileInfo } from '@/types/types';

const columns: ColumnDef<FileInfo>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        position='header'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'type',
    header: ({ column }) => <SortButton column={column}>Type</SortButton>,
    cell: ({ row }) => {
      return row.original.type === 'file' ? <FileIcon /> : <FolderIcon />;
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <SortButton column={column}>Name</SortButton>,
  },
  {
    accessorKey: 'lastModified',
    header: ({ column }) => (
      <SortButton column={column}>Last modified</SortButton>
    ),
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
    header: ({ column }) => <SortButton column={column}>Size</SortButton>,
    cell: ({ row }) => <ItemSizeCell size={row.getValue('size')} />,
  },
  {
    id: 'actions',
    cell: () => {
      const items = ['Download', 'Rename', 'separator', 'Move to trash'];
      return (
        <DropdownMenu>
          <DropdownTrigger>Columns</DropdownTrigger>
          <DropdownMenuContent align='end' className='bg-white'>
            {items.map((item) => (
              <DropdownItem key={item}>{item}</DropdownItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default columns;
