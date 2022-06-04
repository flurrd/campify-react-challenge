import React, { useState, useEffect } from 'react'
import { Page } from "@/components/Page";
import { Main } from "@/components/Main";
import Navbar from "@/components/Navbar";
import {Rv, RV_TYPES} from "@/types/rvs";
import useSWR from 'swr'
import map from 'lodash/map';

const fetcher = (url : any) => fetch(url).then((res) => res.json())


const RvViewer = () => {

  const { data, error } = useSWR('/api/rvs', fetcher);
  const [fetchUrl, setFetchUrl] = React.useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = React.useState('');

  const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = event.target.value;
    setSelectedTypeFilter(selectedType)
}

  if (error) return <div>Sorry, no results found</div>
  if (!data) return <div>Loading... No spinner component?</div>


  return (
    <Page>
      <Navbar />

      <Main>
        <h1>Rv Viewer</h1>
        <select name="vanType" id="vanType" onChange={onFilterChange}  /* onChange={} */>

          {map(RV_TYPES, (value, key) => (
            <option value={key} key={key}>{value}</option>
          ))}

        </select>
        {data.map((rv : Rv, i: any ) => (

          <article key={i}>
            <h3>{rv.attributes.name}</h3>
            <p>{rv.attributes.location}</p>
            <p>{rv.vanType}</p>
            <p>{rv.listing}</p>
            <img src={rv.attributes.coverImage}></img>
          </article>
            
          ))}
        <div>filter buttons...</div>
        <div>card grid...</div>
      </Main>
    </Page>
  );
};

export default RvViewer;
