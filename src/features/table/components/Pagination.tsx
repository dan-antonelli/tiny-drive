import Button from '@/components/shadcn/ui/button';

interface PaginationProps {
  previousPage: () => void;
  nextPage: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}

export default function Pagination({
  previousPage,
  nextPage,
  isPreviousDisabled,
  isNextDisabled,
}: PaginationProps) {
  return (
    <div className='space-x-2'>
      <Button
        className='cursor-pointer rounded text-defaultButtonForeground'
        variant='defaultOutline'
        size='sm'
        onClick={previousPage}
        disabled={isPreviousDisabled}
      >
        Previous
      </Button>
      <Button
        className='cursor-pointer rounded text-defaultButtonForeground'
        variant='defaultOutline'
        size='sm'
        onClick={nextPage}
        disabled={isNextDisabled}
      >
        Next
      </Button>
    </div>
  );
}
