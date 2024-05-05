import { MoreHorizontal } from 'lucide-react';

import Button from '@/components/shadcn/ui/button';
import { DropdownMenuTrigger } from '@/components/shadcn/ui/dropdown-menu';

interface DropdownTriggerProps {
  children: React.ReactNode;
}

export default function DropdownTrigger({ children }: DropdownTriggerProps) {
  return (
    <DropdownMenuTrigger asChild>
      <Button variant='default' className='h-8 w-8 p-0'>
        <span className='sr-only'>{children}</span>
        <MoreHorizontal className='h-4 w-4' />
      </Button>
    </DropdownMenuTrigger>
  );
}
