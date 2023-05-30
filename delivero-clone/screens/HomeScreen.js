import React, { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='bg-white pt-5'>
      <Text>
        <View className='flex-row pb-3 items-center mx-4 space-x-2 flex justify-between'>
          <Image
            source={{
              uri: 'https://www.looper.com/img/gallery/the-untold-truth-of-ratatouille/intro-1653681553.webp',
            }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />
          <View className='flex justify-evenly'>
            <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
            <Text className='fond-bold text-xl'>
              Current Location
              <ChevronDownIcon size={20} color='#00CCBB' />
            </Text>
          </View>

          <UserIcon size={35} color='#00CCBB' />
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen
