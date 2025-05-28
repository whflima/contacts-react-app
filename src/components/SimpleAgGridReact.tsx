import React, { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import api from '../services/api';
import { User } from '../interfaces/interfaces';
import { Button, Modal } from 'antd';
import ModalContent from './ModalContent';
import { EyeOutlined } from '@ant-design/icons';
import { colorSchemeLightWarm, themeQuartz } from '@ag-grid-community/theming';
import { useThemeProvider } from '../providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import useIsMobile from '../utils/useIsMobile';

const bodyStyleDefault: CSSProperties = {
  overflowY: 'auto',
  maxHeight: 'calc(100vh - 200px)',
};
const bodyStyleMobile: CSSProperties = { overflowY: 'auto' };
const themeLightWarm = themeQuartz.withPart(colorSchemeLightWarm);

const myTheme = themeQuartz.withParams({
  accentColor: '#A5A5A5',
  backgroundColor: '#141414',
  browserColorScheme: 'dark',
  chromeBackgroundColor: {
    ref: 'foregroundColor',
    mix: 0.07,
    onto: 'backgroundColor',
  },
  foregroundColor: '#FFFFFF',
  headerFontSize: 14,
});

const CustomButtonComponent = () => {
  return (
    <Button
      className="action-button"
      type="text"
      shape="circle"
      icon={<EyeOutlined />}
    />
  );
};

export default function SimpleGrid() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const { isThemeDark } = useThemeProvider();
  const [gridApi, setGridApi] = useState<any>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState<User>();
  const [users, setUsers] = useState<User[]>([]);
  const bodyStyle = isMobile ? bodyStyleMobile : bodyStyleDefault;
  const theme = isThemeDark ? myTheme : themeLightWarm;

  useEffect(() => {
    api
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  const defaultColDef = {
    flex: 2,
    resizable: true,
    sortable: true,
    filter: true,
  };

  const colDefs: any[] = [
    {
      headerName: t('simple-grid.collumn-actions'),
      field: 'actions',
      cellRenderer: CustomButtonComponent,
      flex: 1,
      resizable: false,
      filter: false,
    },
    { headerName: t('simple-grid.collumn-name'), field: 'name' },
    { headerName: t('simple-grid.collumn-username'), field: 'username' },
    { headerName: t('simple-grid.collumn-phone'), field: 'phone' },
    { headerName: t('simple-grid.collumn-email'), field: 'email' },
    { headerName: t('simple-grid.collumn-website'), field: 'website' },
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
      if (
        type === 'dataTypesInferred' ||
        type === 'gridSizeChanged' ||
        type === 'columnResized'
      ) {
        handleResize(e);
      }
    });
  };

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
          theme={theme}
          rowData={users}
          columnDefs={colDefs}
          onGridReady={onGridReady}
          defaultColDef={defaultColDef}
          onRowClicked={onRowClicked}
        />
      </div>

      <Modal
        title={t('modal.content-title')}
        open={modalIsOpen}
        footer={null}
        destroyOnClose={true}
        onCancel={onCancelModal}
        styles={{ body: bodyStyle }}
      >
        <ModalContent contentData={selectedRowData} />
      </Modal>
    </div>
  );
}
