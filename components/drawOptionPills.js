import React from 'react';
import styles from '../styles/Home.module.css';
const DrawOptionPills = (props) =>{ 
    return( 
        <div className={styles.form_group}> 
            <input 
            className={styles.form_control} 
            type="radio" name={props.category} 
            value={props.name} id={props.id} 
            onChange={props.onFilter}
            aria-selected={props.isItemSelected}
            /> 
            <label className={styles.control_label} htmlFor={props.id}> {props.name} </label> 
        </div> 
        );
    }
export default DrawOptionPills;