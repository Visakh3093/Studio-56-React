import React from 'react'
import { useParams } from 'react-router-dom'
import News from './News'
import Gallery from './Gallery'
import Articles from './Articles'
import Video from './Video'

const MediaFilter = () => {
    const {id} = useParams()

    
  return (
    <>{ id && id == "4" ? <News /> : id == "5" ? <Video /> : id == "6" ? <Gallery /> : <Articles /> }</>
  )
}

export default MediaFilter