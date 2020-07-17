import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {
  // acá va tu código
return(<div className ={styles.div}>
  <div className={styles.botonizq}>
  <button className={styles.cruz} onClick = {props.onClose}> X </button>
  </div>
  <h4>{props.name}</h4>
    <div className={styles.carta}>
    <p className={styles.text}>Min <p>{props.min}°</p></p>
    <p className={styles.text}>Max <p>{props.max}°</p></p>  
    <img src={"https://openweathermap.org/img/wn/"+props.img+"@2x.png"} alt="Not found" height= "70px"/>
    </div>
  </div>
)

};

