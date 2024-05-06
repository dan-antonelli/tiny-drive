import { Table } from '@tanstack/react-table';

import { Checkbox } from '@/components/shadcn/ui/checkbox';

interface HeaderSelectCellProps<TData> extends Partial<Table<TData>> {
  getIsAllPageRowsSelected: () => boolean;
  getIsSomePageRowsSelected: () => boolean;
  toggleAllPageRowsSelected: (value?: boolean) => void;
}

export default function HeaderSelectCell<TData>({
  getIsAllPageRowsSelected,
  getIsSomePageRowsSelected,
  toggleAllPageRowsSelected,
}: HeaderSelectCellProps<TData>) {
  return (
    <Checkbox
      checked={
        getIsAllPageRowsSelected() ||
        (getIsSomePageRowsSelected() && 'indeterminate')
      }
      onCheckedChange={(value) => toggleAllPageRowsSelected(!!value)}
      aria-label='Select all'
      position='header'
    />
  );
}
