import { Input } from '@/components/shadcn/ui/input';

interface FilterProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Filter({ placeholder, value, onChange }: FilterProps) {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className='max-w-sm rounded text-gray-500 border-defaultOutlineColor'
    />
  );
}
