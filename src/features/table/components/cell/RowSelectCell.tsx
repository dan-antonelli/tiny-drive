import { Row } from '@tanstack/react-table';

import { Checkbox } from '@/components/shadcn/ui/checkbox';
import { FileInfo } from '@/types/types';

interface RowSelectCellProps {
  row: Row<FileInfo>;
}

export default function RowSelectCell({ row }: RowSelectCellProps) {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label='Select row'
    />
  );
}
