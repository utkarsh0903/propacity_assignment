import React from 'react'
import  styles from './styleSheet/first.module.css'
import dashboard from "../assests/dashboard.png"

export default function first() {
  return (
    
      <div className={styles.container}>
       <img className={styles.img} src={dashboard} alt="Star wars" />
       <p className={styles.heading}>Welcome to Star Wars <br /> Dashboard</p>
       
       <p className={styles.para}>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>   
    </div>
   
  )
}
