import './App.css';
import { DataTable, columns } from '@/features/table';
import data from '@/mock-data/data';
import { FileInfo } from '@/types/types';
import formatDate from './features/table/utils/formatDate';

function App() {
  const formatData = (data: FileInfo[]) => {
    return data.map((item: FileInfo) => {
      return {
        ...item,
        lastModified: formatDate(item.lastModified),
      };
    });
  };

  return (
    <div className='w-full'>
      <div className='container mx-auto py-10'>
        <DataTable columns={columns} data={formatData(data)} />
      </div>
    </div>
  );
}

export default App;
