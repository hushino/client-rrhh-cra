/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/').then(result => setData(result.data));
  }, []);

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.nombre}: {item.apellido}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App

/* useEffect(() => {
   const fetchData = async () => {
     const result = await axios(
       'http://localhost:8080/api/',
     );
     setData(result.data);
   };
   fetchData();
 }, []); */
