import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import CategoriesCard from './CategoriesCard'
import sanityClient from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == 'category']
      `
      )
      .then((data) => setCategories(data))
  }, [])

  console.log(categories[0])
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      className='w-[94vw]'
    >
      {categories.map((category) => (
        <CategoriesCard key={category._id} imgUrl={category.image} title={category.name} />
      ))}
    </ScrollView>
  )
}

export default Categories
