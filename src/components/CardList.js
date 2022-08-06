import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, selectPosts } from './cardListSlice'

function CardList() {
   const dispatch = useDispatch()
   const posts = useSelector(selectPosts);
   
   useEffect(() => {
    dispatch(fetchPosts())
   },[dispatch])
   
  return (
    <div>{posts.map(post => {
     return <ul>
        <li key={post.id}>{post.title}</li>
      </ul>
    })}</div>
  )
}



export default CardList