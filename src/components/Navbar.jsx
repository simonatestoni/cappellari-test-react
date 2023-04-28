import React from 'react';
 import styles from '../styles/navbar.module.css';


  const Navbar = () => {

   const links = ["Home", "Chi Siamo", "Dove Siamo", "Contatti"];

    return (
      <div className={styles.container}>
          <div className="Logo">Logo</div>
  
          <div className={styles.links}>
            {links.map((item, index) => {
              return <div key={index + 1}>{item}</div>;
              
            })}

          </div>
      </div>
    );
  };
  
    
  
   


export default Navbar