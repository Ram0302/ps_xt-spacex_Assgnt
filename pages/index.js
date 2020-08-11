import React, { useState, useEffect} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import {RefactorData, generateQueryString} from '../utilities/utility';
import Fetchdata from './api/fetchData';
import styles from '../styles/Home.module.css';
import Filter from '../components/Filter';
import DetailsList from '../components/missionDetails';
export default function Home({initialData}) {
  const router = useRouter();
  const [state, setState] = useState({
    data:initialData,
    filters:{
      year:'',
      launch:'',
      land:''
    },
    isFiltered:false
  });
  const handleFilter =(e)=>{
    let prevSelectedElm = document.querySelector(`input[name=${e.target.name}][aria-selected="true"]`);
    prevSelectedElm && prevSelectedElm.setAttribute('aria-selected','false');
    e.target.setAttribute('aria-selected','true')
    const updatedFilters = {...state.filters,[e.target.name]:e.target.value}
    const url = "https://api.spacexdata.com/v3/launches?limit=100";
     Fetchdata(e,url,updatedFilters).then((res) => {
       setState({data:RefactorData(res),filters:updatedFilters,isFiltered:true})
      })
     .catch(err => console.log(err))
  }
  useEffect(() => {
    history.pushState(null, null, `/spacexdata/v3/launches?limit=100${generateQueryString(state.filters)}`);
  }, [state])
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>SpaceX Launch Programs</header>
      <div className={styles.content}>
        <Filter onFilter={handleFilter} appliedFilter = {state.filters}/>
        <DetailsList data={state.data} filters={state.filters}/>
      </div>
      <footer><b>Developed By: </b>Ram Charan Duddupudi</footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://api.spacexdata.com/v3/launches?limit=100');
  let initialData = RefactorData(await res.json());
  return {
      props: {
        initialData,
      },
  }
}

