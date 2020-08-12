import React from 'react';
import LazyLoad from 'react-lazyload';
import styles from '../styles/Home.module.css';
const Card = ({data,filters})=>{
const missions = data.mission_id.map((id) =>
    <li key={id.toString()}>
    {id}
    </li>
);
return(
    <div className={styles.card}>
        <div className={styles.card_logo}>
        {   
            data.mission_patch?
            <LazyLoad scrollContainer={'.scroll-container'} height={200} width={200}>
            <img src={data.mission_patch} alt={data.mission_name}/>
            </LazyLoad>:
            <span className={styles.fallback_text}>Mission Patch Not Available</span>
        }
        </div>
        <div className={styles.card_body}>
            <p className={styles.card_title}>{data.mission_name}</p>
            <label className={styles.card_label}>Mission Ids:</label>
            <ul>{missions.length?missions:<li>N.A</li>}</ul>
            <label className={styles.card_label}>Launch Year: 
            {<span>{data.launch_year}</span>}
            </label>
            <label className={styles.card_label}>Successful Launch: 
                <span>{data.launch_success?' True':' False'}</span>
            </label>
            <label className={styles.card_label}>Successful Landing: 
                {<span>{data.land_success?' True':' False'}</span>}
            </label>
        </div>
    </div>
)
}
export default Card;