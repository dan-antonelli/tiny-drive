import { ColumnDef } from '@tanstack/react-table';

import DateCell from './cell/DateCell';
import HeaderSelectCell from './cell/HeaderSelectCell';
import ItemSizeCell from './cell/ItemSizeCell';
import ItemTypeCell from './cell/ItemTypeCell';
import RowSelectCell from './cell/RowSelectCell';
import DropdownItem from './dropdown/DropdownItem';
import DropdownTrigger from './dropdown/DropdownTrigger';
import SortButton from './SortButton';

import {
  DropdownMenu,
  DropdownMenuContent,
} from '@/components/shadcn/ui/dropdown-menu';
import { FileInfo } from '@/types/types';

const columns: ColumnDef<FileInfo>[] = [
  {
    id: 'select',
    header: ({ table }) => <HeaderSelectCell table={table} />,
    cell: ({ row }) => <RowSelectCell row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'type',
    header: ({ column }) => <SortButton column={column}>Type</SortButton>,
    cell: ({ row }) => <ItemTypeCell type={row.original.type} />,
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
    cell: ({ row }) => <DateCell date={row.getValue('lastModified')} />,
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
