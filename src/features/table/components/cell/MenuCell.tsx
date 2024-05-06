import DropdownTrigger from '../dropdown/DropdownTrigger';

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from '@/components/shadcn/ui/dropdown-menu';

interface MenuCellProps {
  triggerName: string;
  items: string[];
}

export default function MenuCell({ items, triggerName }: MenuCellProps) {
  return (
    <DropdownMenu>
      <DropdownTrigger>{triggerName}</DropdownTrigger>
      <DropdownMenuContent align='end' className='bg-white'>
        {items.map((item) =>
          item === 'separator' ? (
            <DropdownMenuSeparator key={item} />
          ) : (
            <DropdownMenuItem key={item} className='dropdown-menu-item'>
              {item}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
