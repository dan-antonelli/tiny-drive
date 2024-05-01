import { ColumnDef } from '@tanstack/react-table';

import formatDate from '../utils/formatDate';

import { FileInfo } from '@/types/types';

const columns: ColumnDef<FileInfo>[] = [
  {
    accessorKey: 'name',
    header: () => <div className='text-right'>Name</div>,
  },
  {
    accessorKey: 'lastModified',
    header: () => <div className='text-right'>Last Modified</div>,
    cell: ({ row }) => {
      const lastModified: string = row.getValue('lastModified');
      return (
        <div className='text-right font-medium'>{formatDate(lastModified)}</div>
      );
    },
  },
  {
    accessorKey: 'size',
    header: 'Size',
  },
];

export default columns;
