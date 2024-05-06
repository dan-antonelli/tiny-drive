import { TableProps } from '../../types/types';

import { Checkbox } from '@/components/shadcn/ui/checkbox';

export default function HeaderSelectCell<TData>({ table }: TableProps<TData>) {
  return (
    <Checkbox
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && 'indeterminate')
      }
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label='Select all'
      position='header'
    />
  );
}
