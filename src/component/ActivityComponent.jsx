import React from 'react'
import { useParams } from 'react-router-dom'

const ActivityComponent = () => {
    const {nid} = useParams()
    console.log("nid Value : ",nid);
  return (
    <div>

    </div>
  )
}

export default ActivityComponent