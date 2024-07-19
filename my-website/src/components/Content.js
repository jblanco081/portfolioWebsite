import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Content = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/sample/')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <main>
      <h2>Welcome to My Simple Website</h2>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </main>
  );
}

export default Content;
