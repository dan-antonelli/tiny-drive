import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/shadcn/ui/dropdown-menu';

interface DropdownItemProps {
  children: React.ReactNode;
}

export default function DropdownItem({ children }: DropdownItemProps) {
  return children === 'separator' ? (
    <DropdownMenuSeparator />
  ) : (
    <DropdownMenuItem className='dropdown-menu-item'>
      {children}
    </DropdownMenuItem>
  );
}
