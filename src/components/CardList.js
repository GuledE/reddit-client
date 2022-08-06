import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getPosts from '../api/api';
import { selectedPosts } from './cardListSlice'

function CardList() {
   const dispatch = useDispatch()
   const posts = useSelector(selectedPosts);
  return (
    <div>{posts}</div>
  )
}



export default CardList