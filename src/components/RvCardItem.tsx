import styled from "styled-components";
import { breakpoints, colors, spacings } from "@/styled/tokens";
import { Rv, RV_TYPES } from "@/types/rvs";



const RvCardItem = (rv: Rv) => {

    return (

        <article>
            <h3>{rv.attributes.name}</h3>
            <p>{rv.attributes.location}</p>
            <p>{rv.vanType}</p>
            <p>{rv.listing}</p>
            <img src={rv.attributes.coverImage}></img>
        </article>
    )

}



export default RvCardItem;