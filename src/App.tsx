import './App.css';

import { DataTable, columns } from '@/features/table';
import data from '@/mock-data/data';

function App() {
  return (
    <div className='w-90vw h-screen'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default App;
