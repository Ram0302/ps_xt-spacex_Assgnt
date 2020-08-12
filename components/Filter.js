import React from 'react';
import DrawOptionPills from './drawOptionPills';
import styles from '../styles/Home.module.css';
 const Filter = (props)=> { 
    let startYear = 2006; 
    return (
        <div className={styles.filters_content}> 
            <h2>Filters</h2> 
            <form id = "formFilter" noValidate> 
                <p>Launch Year</p>
                <section>
                    { 
                        [...Array(15)].map((x, i) => <DrawOptionPills 
                        key={i} 
                        id={"txt"+i} 
                        category="year" 
                        name={startYear+i}
                        onFilter = {props.onFilter}
                        isItemSelected = {props.appliedFilter['year']===(startYear+i).toString()}
                        /> ) 
                    }
                </section> 
                <p>Successful Launch</p>
                <section>
                    <DrawOptionPills id="txt16" 
                    name="True" 
                    category="launch" 
                    onFilter = {props.onFilter}
                    isItemSelected = {props.appliedFilter['launch']==='True'}
                    /> 
                    <DrawOptionPills 
                    id="txt17" 
                    name="False" 
                    category="launch" 
                    onFilter = {props.onFilter}
                    isItemSelected = {props.appliedFilter['launch']==='False'}
                    /> 
                </section> 
                <p>Successful Landing</p> 
                <section> 
                    <DrawOptionPills 
                    id="txt18" name="True" 
                    category="land" 
                    onFilter = {props.onFilter}
                    isItemSelected = {props.appliedFilter['land']==='True'}
                    /> 
                    <DrawOptionPills 
                    id="txt19" 
                    name="False" 
                    category="land" 
                    onFilter = {props.onFilter}
                    isItemSelected = {props.appliedFilter['land']==='False'}
                    /> 
                </section> 
            </form> 
        </div> 
    ) 
}
export default Filter