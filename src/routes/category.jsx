import React from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {
  const {id} = useParams()
  console.log(id)
  return (
    <div>
      category
    </div>
  )
}

export default Category
