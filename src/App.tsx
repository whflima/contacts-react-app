import './App.css';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import SimpleGrid from './components/simpleGrid';

export default function App() {
  return (
    <div className="App">
      <div style={{width: '100%', height: '100%'}}>
        <SimpleGrid />
      </div>
    </div>
  );
}
