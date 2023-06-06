import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import { urlFor } from '../sanity'

const CategoriesCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className='relative mr-2'>
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className='h-20 w-20 rounded'
      />
      <Text className='absolute bottom-1 left-1  font-bold text-white'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard
