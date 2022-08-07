import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from './Card'
import { fetchPosts, selectPosts } from './cardListSlice'

function CardList() {
   const dispatch = useDispatch()
   const posts = useSelector(selectPosts);
   
   useEffect(() => {
    dispatch(fetchPosts())
   },[dispatch])

  return (
    <div>{posts.map(post => {
     return <Cards post={post} key={post.id}/>
    })}</div>
  )
}



export default CardList