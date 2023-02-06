import './styling/style.css';
import { useEffect, useState } from 'react';
import { FetchAPI } from './api/api';

// Component imports
import Percentages from './components/Percentages';

function App() {

  const [data, setData] = useState([]); // Store the raw data from the API

  useEffect(() => { // Fetch API data and store it in state
    FetchAPI(`http://substantiveresearch.pythonanywhere.com/`)
    .then((data) => data.json())
    .then(setData);
  }, []); // useEffect called when data state changes

  return data.length < 1 
        ? 
        <p>No data</p> 
        : 
        (
          <Percentages data={data} />
        )
  
}

export default App;
