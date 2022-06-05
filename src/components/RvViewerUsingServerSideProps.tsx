import useSWR from 'swr'
import React, { useState, useEffect } from 'react'
import map from 'lodash/map';
import Link from 'next/link'

import styled from "styled-components";
import { breakpoints, colors, spacings } from "@/styled/tokens";
import { Rv, RV_TYPES } from "@/types/rvs";
import RvCardItem from './RvCardItem';



const Container = styled.section`
  padding-left: ${spacings("2")};
  padding-right: ${spacings("2")};
`;

const Button = styled.a`
  padding: ${spacings("BASE")} ${spacings("3")};
  background: ${colors("BRAND.PRIMARY.DARK")};
  display: inline-flex;
  margin-right: ${spacings("BASE")};
  color: white;
  border-radius: 4px;
  cursor: pointer;
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


const RvViewer = (posts: any) => {

  return (
    <Container>
      {map(RV_TYPES, (value, key) => (
        <Link
          key={key}
          href={{
            pathname: '/',
            query: { type: value },
          }}
        >
          <Button>{value}</Button>
        </Link>
      ))}

      <RvGrid>
        {posts.props.map((rv: Rv, i: any) => (
          <RvCardItem rv={rv} key={i} />
        ))}
      </RvGrid>


    </Container>
  );
}
export default RvViewer;