import React from 'react'
import { ScrollView } from 'react-native'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
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
      <CategoriesCard imgUrl='https://links.papareact.com/wru' title='Testing 1' />
      <CategoriesCard imgUrl='https://links.papareact.com/wru' title='Testing 2' />
      <CategoriesCard imgUrl='https://links.papareact.com/wru' title='Testing 3' />
      <CategoriesCard imgUrl='https://links.papareact.com/wru' title='Testing 3' />
      <CategoriesCard imgUrl='https://links.papareact.com/wru' title='Testing 3' />
      <CategoriesCard imgUrl='https://links.papareact.com/wru' title='Testing 3' />
      <CategoriesCard imgUrl='https://links.papareact.com/wru' title='Testing 3' />
      <CategoriesCard imgUrl='https://links.papareact.com/wru' title='Testing 3' />
      <CategoriesCard imgUrl='https://links.papareact.com/wru' title='Testing 3' />
      <CategoriesCard imgUrl='https://links.papareact.com/wru' title='Testing 3' />
    </ScrollView>
  )
}

export default Categories
