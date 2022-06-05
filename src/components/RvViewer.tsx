import useSWR from 'swr'
import React, { useState, useEffect } from 'react'
import map from 'lodash/map';

import styled from "styled-components";
import { breakpoints, colors, spacings } from "@/styled/tokens";
import { Rv, RV_TYPES } from "@/types/rvs";
import RvCardItem from './RvCardItem';

const Container = styled.section`
  padding: ${spacings("2")};
`;

const RvGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${spacings("2")};
  grid-row-gap: ${spacings("2")};
  @media (min-width:  ${breakpoints("SM")}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width:  ${breakpoints("MD")}) {
    grid-template-columns:  repeat(3, 1fr);
  }
  @media (min-width:  ${breakpoints("LG")}) {
    grid-template-columns:  repeat(4, 1fr);
  }
  @media (min-width:  ${breakpoints("XL")}) {
    grid-template-columns: repeat(5, 1fr);
  }
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
            <RvGrid>
                {data.map((rv: Rv, i: any) => (
                    <RvCardItem rv={rv} key={i} />
                ))}


            </RvGrid>


        </Container>
    );
}
export default RvViewer;