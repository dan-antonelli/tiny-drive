import { ColumnDef } from '@tanstack/react-table';
import { FileInfo } from '@/types/types';

export const columns: ColumnDef<FileInfo>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'lastModified',
    header: 'Last Modified',
  },
  {
    accessorKey: 'size',
    header: 'Size',
  },
];
