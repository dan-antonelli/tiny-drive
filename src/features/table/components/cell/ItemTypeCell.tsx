import { File as FileIcon, Folder as FolderIcon } from 'lucide-react';

interface ItemTypeCellProps {
  type: string;
}

export default function ItemTypeCell({ type }: ItemTypeCellProps) {
  return type === 'file' ? <FileIcon /> : <FolderIcon />;
}
