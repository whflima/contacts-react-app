import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-enterprise";
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import api from '../services/api';
import { User } from '../interfaces/interfaces';
import Map from './Map';

export default function SimpleGrid() {
  const [gridApi, setGridApi] = useState<any>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState<User>();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const defaultColDef = {
    flex: 1,
    resizable: true,
    sortable: true,
    filter: true
  }

  const colDefs: any[] = [
    { headerName: "Name", field: "name", filter: true },
    { headerName: "Username", field: "username", filter: true },
    { headerName: "Phone", field: "phone", filter: true },
    { headerName: "Email", field: "email", filter: true },
    { headerName: "Website", field: "website", filter: true },
  ];

  const handleResize = (gridApi: any) => {

    if (gridApi && gridApi.api) {
      const sizeScreen = window.innerWidth;
      const currentState = gridApi.api.getColumnState();
      let columnSuported = Math.floor(sizeScreen / 280);

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

  const onRowClicked = (event: any) => {
    setSelectedRowData(event.data);
    setModalIsOpen(true);
  };

  return (
    <div className="App">
      <div className="ag-theme-alpine" style={{ height: 550 }}>
        <AgGridReact
          rowData={users}
          columnDefs={colDefs}
          onGridReady={onGridReady}
          defaultColDef={defaultColDef}
          onRowClicked={onRowClicked}
        />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Detalhes da Linha"
        ariaHideApp={false}
      >
        <h2>Detalhes da Linha Selecionada</h2>
        {selectedRowData && (
          <div>
            <p><strong>Name:</strong> {selectedRowData.name}</p>
            <p><strong>Username:</strong> {selectedRowData.username}</p>
            <p><strong>Email:</strong> {selectedRowData.email}</p>
            <p><strong>Phone:</strong> {selectedRowData.phone}</p>
            <p><strong>Website:</strong> {selectedRowData.website}</p>

            <h2>Address</h2>
            <p><strong>Street:</strong> {selectedRowData.address.street}</p>
            <p><strong>Suite:</strong> {selectedRowData.address.suite}</p>
            <p><strong>City:</strong> {selectedRowData.address.city}</p>
            <p><strong>Zipcode:</strong> {selectedRowData.address.zipcode}</p>

            <Map latitude={-33.8397011} longitude={151.2057175} />
          </div>
        )}
        <button onClick={() => setModalIsOpen(false)}>Fechar</button>
      </Modal>
    </div>
  );
}
