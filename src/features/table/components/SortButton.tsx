import { Column } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

import Button from '@/components/shadcn/ui/button';
import { FileInfo } from '@/types/types';

interface SortButtonProps {
  column: Column<FileInfo>;
  children: React.ReactNode;
}

const SortButton = ({ column, children }: SortButtonProps) => {
  return (
    <Button
      className='text-center text-gray-500'
      variant='secondary'
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {children}
      <ArrowUpDown className='ml-2 h-4 w-4' />
    </Button>
  );
};

export default SortButton;
