import styled from "styled-components";
import { breakpoints, colors, spacings } from "@/styled/tokens";

const RvCardWrap = styled.a`
  display: flex;
    flex-direction: column;
    box-shadow: 0.2px 0.2px 4px rgb(30 52 64 / 15%);
    text-decoration: none;
    color: ${colors("TEXT")};
  `;
const RvImg = styled.img`
  width: 100%;
  display: block;
`;

const RvContent = styled.div`
  padding: ${spacings("BASE")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-transform: capitalize;
`;

const RvName = styled.h3`
  color: ${colors("BRAND.PRIMARY.DARK")};
  font-weight: 800;
  font-size: 1.5rem;
  margin-top:0;
`;

const RvLocation = styled.div`
  font-weight: 800;
`;
const RvType = styled.div`
  font-weight: 800;
`;



const RvCardItem = (props: any) => {

    return (

        <RvCardWrap key={props.key} href="#">
            <RvImg src={props.rv.attributes.coverImage}></RvImg>
            <RvContent>
                <RvName>{props.rv.attributes.name}</RvName>
                <RvLocation>{props.rv.attributes.location}</RvLocation>
                <div>{props.rv.vanType}</div>
                <div>{props.rv.listing}</div>
            </RvContent>
        </RvCardWrap>
    )

}

export default RvCardItem;