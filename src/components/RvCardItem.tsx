import styled from "styled-components";
import { breakpoints, colors, spacings } from "@/styled/tokens";

const RvArticle = styled.a`
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
  padding: ${spacings("BASE")}
    `;

const RvName = styled.h3`
  color: ${colors("BRAND.PRIMARY.DARK")};
  font-weight: 800;
  font-size: 1.5rem;
    `;
const RvCardItem = (props: any) => {

    return (

        <RvArticle key={props.key} href="#">
            <RvImg src={props.rv.attributes.coverImage}></RvImg>
            <RvContent>
                <RvName>{props.rv.attributes.name}</RvName>
                <p>{props.rv.attributes.location}</p>
                <p>{props.rv.vanType}</p>
                <p>{props.rv.listing}</p>
            </RvContent>
        </RvArticle>
    )

}

export default RvCardItem;