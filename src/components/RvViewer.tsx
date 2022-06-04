import useSWR from 'swr'
import React, { useState, useEffect } from 'react'
import map from 'lodash/map';

import styled from "styled-components";
import { breakpoints, colors, spacings } from "@/styled/tokens";
import { Rv, RV_TYPES } from "@/types/rvs";
import RvCardItem from './RvCardItem';

const Container = styled.div`
  padding: ${spacings("2")};
`;

const fetcher = (url: any) => fetch(url).then((res) => res.json())

const RvViewer = () => {

    const { data, error } = useSWR('/api/rvs/', fetcher);
    const [fetchUrl, setFetchUrl] = React.useState('/api/rvs/');

    const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedType = event.target.value;
        setFetchUrl('/api/rvs/' + selectedType)
    }

    if (error) return <div>Sorry, error loading content</div>
    if (!data) return <div>Loading</div>

    if (data.length === 0) return <div>Sorry, no results found</div>

    return (
        <Container>
            <select name="vanType" id="vanType" onChange={onFilterChange}  /* onChange={} */>
                {map(RV_TYPES, (value, key) => (
                    <option value={key} key={key}>{value}</option>
                ))}
            </select>


            {data.map((rv: Rv, i: any) => (
                <article key={i}>
                    <h3>{rv.attributes.name}</h3>
                    <p>{rv.attributes.location}</p>
                    <p>{rv.vanType}</p>
                    <p>{rv.listing}</p>
                    <img src={rv.attributes.coverImage}></img>
                </article>
            ))}

            {/*             
            {data.map((rv: Rv, i: any) => (
                <RvCardItem data={rv} />
            ))} */}


        </Container>
    );
}
export default RvViewer;