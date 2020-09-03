import React from 'react'
import { Link } from 'gatsby'
import rightArrow from "../images/chevron-right.svg"

const nextButton = ({name, slug}) => {
    //console.table("next ="+next.name)
    return (
        <Link to={`/albums/${slug}`} className="bg-gray-100 opacity-50 shadow p-2 rounded-full m-2">
            <img src={rightArrow} alt={`to ${name}`}/>
        </Link>
    )
}

export default nextButton

