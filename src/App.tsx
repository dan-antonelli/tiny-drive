import './App.css';

import { DataTable, columns } from '@/features/table';
import data from '@/mock-data/data';

function App() {
  return (
    <div className='w-full'>
      <div className='container mx-auto py-10'>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default App;
