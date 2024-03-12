import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

function Header() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:9090/')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <header className={styles.header}>
            <h1>Header</h1>
            {data && <div>{JSON.stringify(data)}</div>}
        </header>
    );
}

export default Header;