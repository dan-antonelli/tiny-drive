import { Table } from '@tanstack/react-table';

import { Input } from '@/components/shadcn/ui/input';

interface SearchInputProps<TData> {
  table: Table<TData>;
}

export default function Filter<TData>({ table }: SearchInputProps<TData>) {
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
