export interface FileInfo {
  id: string;
  type: 'file' | 'folder';
  name: string;
  lastModified: string;
  size?: string;
}
