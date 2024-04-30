import './App.css';
import { DataTable, files, columns } from '@/features';

function App() {
  return (
    <div className='w-full'>
      <div className='container mx-auto py-10'>
        <DataTable columns={columns} data={files} />
      </div>
    </div>
  );
}

export default App;
