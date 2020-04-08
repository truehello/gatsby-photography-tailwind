import React from 'react'
import { Link } from 'gatsby'
import rightArrow from "../images/chevron-right.svg"

const nextButton = ({name, slug}) => {
    //console.table("next ="+next.name)
    return (
        <Link to={`/albums/${slug}`}>
            <img src={rightArrow} alt={`to ${name}`}/>
        </Link>
    )
}

export default nextButton

