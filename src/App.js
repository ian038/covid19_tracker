import React, { useEffect, useState } from 'react';
import styles from './App.module.css'

import Content from './components/Content/Content'
import Chart from './components/Chart/Chart'
import Country from './components/Country/Country'
import { fetchData } from './api/index'

import covid19Image from './images/image.png'

function App() {
  const [ data, setData ] = useState({});
  const [ country, setCountry ] = useState('');

 useEffect(() => {
   const fetchApi = async () => {
      setData(await fetchData());
   }
   fetchApi();
 }, []);

const handleCountryChange = async (country) => {
  const data = await fetchData(country);
  setData(data);
  setCountry(country);
} 

  return (
    <div className={styles.container}>
      <img className={styles.image} src={covid19Image} alt='COVID-19'/>
      <Content data={data} />
      <Country handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
