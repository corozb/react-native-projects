import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'

const RestaurantCards = ({ id, title, rating, genre, address, imgUrl, short_description, dishes, long, lat }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      className='bg-white mr-3 shadow'
      onPress={() => {
        navigation.navigate('Restaurant', {
          id,
          title,
          rating,
          genre,
          address,
          imgUrl,
          short_description,
          dishes,
          long,
          lat,
        })
      }}
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className='h-36 rounded-sm'
      />

      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1 pb-1'>
          <StarIcon color='green' opacity={0.5} size={22} />
          <Text className='flex-xs text-gray-500'>
            <Text className='text-green-500 pr-2'>{rating}</Text>
            {genre}
          </Text>
        </View>

        <View className='flex-row items-center space-x-1'>
          <MapPinIcon color='gray' opacity={0.4} size={22} />
          <Text className='text-xs text-gray-500'>Nearby {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCards
