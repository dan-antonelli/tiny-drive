interface ItemSizeCellProps {
  size?: string;
}

export default function ItemSizeCell({ size }: ItemSizeCellProps) {
  return <div className='text-center font-medium'>{size ? size : '—'}</div>;
}
