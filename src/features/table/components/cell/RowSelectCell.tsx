import { CheckedState } from '@radix-ui/react-checkbox';

import { Checkbox } from '@/components/shadcn/ui/checkbox';

interface RowSelectCellProps {
  checked: boolean;
  onCheckedChange: (value: CheckedState) => void;
}

export default function RowSelectCell({
  checked,
  onCheckedChange,
}: RowSelectCellProps) {
  return (
    <Checkbox
      checked={checked}
      onCheckedChange={onCheckedChange}
      aria-label='Select row'
    />
  );
}
