import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
 
  

  return <div className={styles.div}>
    <input className={styles.input} type='text' placeholder= "Busca una ciudad" />
    <button className={styles.button} onClick ={(e) =>props.onSearch("Buscando...")}> Agregar </button>
  </div>
};