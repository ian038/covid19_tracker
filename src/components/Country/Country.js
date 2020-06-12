import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api/index';

import styles from './Country.module.css';

const Country = ({ handleCountryChange }) => {
    const[ countries, setCountries ] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setCountries(await fetchCountries())
        }
        fetchApi();
    }, [countries]);

    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue='' onChange={e => handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {countries.map((country, index) => <option value={country} key={index}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Country