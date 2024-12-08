import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-enterprise";
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import api from '../services/api';
import { User } from '../interfaces/interfaces';
import { Button, FloatButton, Modal, Tooltip } from 'antd';
import ModalContent from './ModalContent';
import { EyeOutlined } from '@ant-design/icons';

const CustomButtonComponent = () => {
  return (
      <Button className="action-button" type="text" shape="circle" icon={<EyeOutlined />} />
  );
};

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
    flex: 2,
    resizable: true,
    sortable: true,
    filter: true
  }

  const colDefs: any[] = [
    { headerName: "Actions", field: 'actions', cellRenderer: CustomButtonComponent, flex: 1, resizable: false, filter: false },
    { headerName: "Name", field: "name" },
    { headerName: "Username", field: "username" },
    { headerName: "Phone", field: "phone" },
    { headerName: "Email", field: "email" },
    { headerName: "Website", field: "website" },
  ];

  const handleResize = (gridApi: any) => {

    if (gridApi && gridApi.api) {
      const sizeScreen = window.innerWidth;
      const currentState = gridApi.api.getColumnState();
      let columnSuported = Math.ceil(sizeScreen / 250);

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
      if (type === "dataTypesInferred" || type === "gridSizeChanged" || type === "columnResized") {
        console.log(type);
        handleResize(e);
      }
    });
  }

  const onRowClicked = (event: any) => {
    setSelectedRowData(event.data);
    setModalIsOpen(true);
  };

  const onCancelModal = (event: any) => {
    event.stopPropagation();
    setModalIsOpen(false);
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

      <Modal title={"Contact"} open={modalIsOpen} footer={null} destroyOnClose={true} onCancel={onCancelModal} bodyStyle={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
        <ModalContent contentData={selectedRowData} />
      </Modal>

    </div>
  );
}