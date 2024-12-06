import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import api from '../services/api';
import { User, UserRow } from '../interfaces/interfaces';

export default function SimpleGrid() {
  const [gridApi, setGridApi] = useState<any>();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  const rowData: UserRow[] = [];
  users.forEach((user: User) => {
    rowData.push({
      name: user.name,
      username: user.username,
      phone: user.phone,
      email: user.email,
      address: user.address.city,
      company: user.company.name
    })
  });

  const [colDefs, setColDefs]: any[] = useState([
    { headerName: "Name", field: "name", filter: true, floatingFilter: true },
    { headerName: "Username", field: "username", filter: true },
    { headerName: "Phone", field: "phone", filter: true },
    { headerName: "Email", field: "email", filter: true },
    { headerName: "Address", field: "address", filter: true },
    { headerName: "Company", field: "company", filter: true }
  ]);

  const handleResize = (gridApi: any) => {

    if (gridApi && gridApi.api) {
      const sizeScreen = window.innerWidth;
      let columnSuported = Math.floor(sizeScreen / 230);
      const currentState = gridApi.api.getColumnState();

      currentState.forEach((colState: any) => {
        if (columnSuported > 0) {
          gridApi.api.setColumnVisible(colState.colId, true);
          columnSuported -= 1;
        } else {
          gridApi.api.setColumnVisible(colState.colId, false);
        }
      });
    }
  };

  const onGridReady = (params: any) => {
    setGridApi(params.api);

    params.api.addGlobalListener((type: string, e: any) => {
      if (type === "gridSizeChanged" || type === "columnResized") {
        handleResize(e);
      }
    });
  }

  return (
    <div className="App">
      <div className="ag-theme-alpine" style={{ height: 500 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          onGridReady={onGridReady}
          defaultColDef={{
            flex: 1,
            resizable: true,
            sortable: true,
            filter: true,
          }}
        />
      </div>
    </div>
  );
}
