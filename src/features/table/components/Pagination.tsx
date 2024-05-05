import { TableProps } from '../types/types';

import Button from '@/components/shadcn/ui/button';

export default function Pagination<TData>({ table }: TableProps<TData>) {
  return (
    <div className='space-x-2'>
      <Button
        className='cursor-pointer rounded text-defaultButtonForeground'
        variant='defaultOutline'
        size='sm'
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </Button>
      <Button
        className='cursor-pointer rounded text-defaultButtonForeground'
        variant='defaultOutline'
        size='sm'
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </Button>
    </div>
  );
}
