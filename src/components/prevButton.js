import React from 'react'
import { Link } from 'gatsby'
import leftArrow from "../images/chevron-left.svg"

const prevButton = ({name, slug}) => {
    //console.table("next ="+next.name)
    return (
        <Link to={`/albums/${slug}`}>
            <img src={leftArrow} alt={`to ${name}`}/>
        </Link>
    )
}

export default prevButton