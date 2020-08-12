import React from 'react';
import Card from './Card';
import styles from "../styles/Home.module.css";
const DetailsList = (props)=>{
  const classesString = styles.details_list_wrapper
    return(
        <div className={classesString}>
        {
            props.data.map((item,i)=><Card key={i} data={item} filters={props.filters}/>)
        }
        </div>
    )
}
export default DetailsList;