import useSWR from 'swr'
import React, { useState, useEffect } from 'react'
import map from 'lodash/map';
import styled from "styled-components";
import { breakpoints, colors, spacings } from "@/styled/tokens";
import { Rv, RV_TYPES } from "@/types/rvs";
import RvCardItem from './RvCardItem';
import Spinner from './Spinner';


const Container = styled.section`
  padding-left: ${spacings("2")};
  padding-right: ${spacings("2")};
`;

const LoadingMessage = styled.section`
  text-align: center;
`;

const Filter = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const FilterButton = styled.button`
  padding: ${spacings("BASE")} ${spacings("3")};
  background: ${colors("BRAND.PRIMARY.DARK")};
  display: inline-flex;
  margin-left: ${spacings("BASE")};
  color: white;
  border-radius: 1rem;
  cursor: pointer;
  border: none;
  text-transform: capitalize;
`;

const RvGrid = styled.section`
  padding-top: ${spacings("2")};
  padding-bottom: ${spacings("2")};
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

  const [fetchUrl, setFetchUrl] = React.useState('/api/rvs/');
  const { data, error } = useSWR(String(fetchUrl), fetcher);
  const [clickedButton, setClickedButton] = useState('');

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    setClickedButton(button.name);
    setFetchUrl('/api/' + button.name);
  };

  if (error) return <LoadingMessage>Sorry, something went wrong</LoadingMessage>
  if (!data) return <Spinner />
  if (data.length === 0) return <LoadingMessage>Sorry, no results found</LoadingMessage>

  return (
    <Container>


      <Filter>
        <div>Filter by type: </div>
        {map(RV_TYPES, (value, i) => (
          <FilterButton key={i} onClick={buttonHandler} name={value}>
            {value}
          </FilterButton>
        ))}
      </Filter>

      <RvGrid>
        {data.map((rv: Rv, i: any) => (
          <RvCardItem rv={rv} key={i} />
        ))}
      </RvGrid>


    </Container>
  );
}
export default RvViewer;