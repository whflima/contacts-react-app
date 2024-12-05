import { SetStateAction, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import api from '../services/api';
import { User, UserRow } from '../interfaces/interfaces';
import { AutoResizeGrid } from './autoResizeGrid';

export default function SimpleGrid() {
  const [gridApi, setGridApi] = useState();
  const [users, setUsers] = useState<User[]>([]);

  const pagination = true;
  const paginationPageSize = 500;
  const paginationPageSizeSelector = [200, 500, 1000];

  useEffect(() => {
    api
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const [colDefs, setColDefs]: any[] = useState([
    { field: "Name", filter: true, floatingFilter: true },
    { field: "Username", filter: true },
    { field: "Phone", filter: true },
    { field: "Email", filter: true },
    { field: "Address", filter: true },
    { field: "Company", filter: true }
  ]);

  var [mobileColDefs, setMobileColDefs]: any[] = useState([
    { field: "Name", filter: true, floatingFilter: true },
    { field: "Company", filter: true }
  ]);

  /*window.addEventListener('resize', function () {
      setTimeout(function () {
          if (window.innerWidth <= 480) {
              gridOptions.setColumnDefs(mobileColumn);
              params.api.sizeColumnsToFit();
          }
      })
  });*/

  const rowData: UserRow[] = [];
  users.forEach((user: User) => {
    rowData.push({
      Name: user.name,
      Username: user.username,
      Phone: user.phone,
      Email: user.email,
      Address: user.address.city,
      Company: user.company.name
    })
  });

  const onGridReady = (params: any) => {
    setGridApi(params);
  }

  //return <AutoResizeGrid rowData={rowData} columnDefs={colDefs} />;

  return (
    <div className="App">
      <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          onGridReady={onGridReady}
        //pagination={pagination}
        //paginationPageSize={paginationPageSize}
        //paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>
    </div>
  );
}
