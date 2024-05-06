import DropdownItem from '../dropdown/DropdownItem';
import DropdownTrigger from '../dropdown/DropdownTrigger';

import {
  DropdownMenu,
  DropdownMenuContent,
} from '@/components/shadcn/ui/dropdown-menu';

interface MenuCellProps {
  triggerName: string;
  items: string[];
}

export default function MenuCell({ triggerName, items }: MenuCellProps) {
  return (
    <DropdownMenu>
      <DropdownTrigger>{triggerName}</DropdownTrigger>
      <DropdownMenuContent align='end' className='bg-white'>
        {items.map((item) => (
          <DropdownItem key={item}>{item}</DropdownItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
