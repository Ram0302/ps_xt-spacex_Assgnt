import React from 'react';
import Card from './Card';
import styles from "../styles/Home.module.css";
const DetailsList = (props)=>{
    return(
        <div className={styles.details_list_wrapper}>
        {
            props.data.map((item,i)=><Card key={i} data={item} filters={props.filters}/>)
        }
        </div>
    )
}
export default DetailsList;