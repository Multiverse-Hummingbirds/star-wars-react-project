import React from 'react'
import {useParams} from 'react-router-dom'

function PersonDetails({person}) {
    const {id} = useParams();

    // fetch with id
    // use effect array with id
    // same data list 
    return (
        <div>
            Person Details page {id}
        </div>
        
    )
}

export default PersonDetails