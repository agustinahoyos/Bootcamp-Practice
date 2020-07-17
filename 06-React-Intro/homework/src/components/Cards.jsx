import React from 'react';
import Card from './Card.jsx'
import styles from './Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map

  return (
  <div className={styles.clasecards}>
    {props.cities.map(elemento => 
      <Card
      
      max={elemento.main.temp_max}
      min={elemento.main.temp_min}
      name={elemento.name}
      img={elemento.weather[0].icon}
      onClose={() => alert(elemento.name)}
      
    
    />
    )}
       


  </div>
  )

};