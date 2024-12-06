import './App.css';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import SimpleGrid from './components/simpleGrid';
import { User, Columns } from './interfaces/interfaces';
import api from './services/api';
import { useEffect, useState } from 'react';

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const columns: Columns[] = [
    {
      header: "Name",
      accessor: "name"
    },
    {
      header: "Username",
      accessor: "username"
    },
    {
      header: "Phone",
      accessor: "phone"
    },
    {
      header: "Email",
      accessor: "email"
    },
    {
      header: "Address",
      accessor: "address"
    },
    {
      header: "Company",
      accessor: "company"
    }
  ];

  return (
    <div className="App">
      <div style={{ width: '100%', height: '100%' }}>
        <SimpleGrid />
      </div>
    </div>
  );
}