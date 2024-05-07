import { CheckedState } from '@radix-ui/react-checkbox';
import { Table } from '@tanstack/react-table';

import { Checkbox } from '@/components/shadcn/ui/checkbox';

interface HeaderSelectCellProps<TData> extends Partial<Table<TData>> {
  checked: CheckedState | undefined;
  onCheckedChange: (value?: CheckedState) => void;
}

export default function HeaderSelectCell<TData>({
  checked,
  onCheckedChange,
}: HeaderSelectCellProps<TData>) {
  return (
    <Checkbox
      checked={checked}
      onCheckedChange={onCheckedChange}
      aria-label='Select all'
      position='header'
    />
  );
}
