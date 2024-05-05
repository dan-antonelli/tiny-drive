import { TableProps } from '../types/types';

import { Input } from '@/components/shadcn/ui/input';

export default function Filter<TData>({ table }: TableProps<TData>) {
  return (
    <Input
      placeholder='Filter items by name...'
      value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        table.getColumn('name')?.setFilterValue(event.target.value)
      }
      className='max-w-sm rounded text-gray-500 border-defaultOutlineColor'
    />
  );
}
