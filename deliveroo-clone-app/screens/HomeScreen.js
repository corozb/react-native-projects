import React, { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='bg-white pt-5'>
      <Text className=''>
        <View className='flex-row pb-3 items-center mx-4 space-x-2 px-4 flex justify-between'>
          <Image
            source={{
              uri: 'https://www.looper.com/img/gallery/the-untold-truth-of-ratatouille/intro-1653681553.webp',
            }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />
          <View className='flex-1'>
            <Text className='font-bold text-xs text-gray-400'>Deliver Now!</Text>
            <Text className='fond-bold text-xl'>
              Current Location
              <ChevronDownIcon size={20} color='#00CCBB' />
            </Text>
          </View>

          <UserIcon size={35} color='#00CCBB' />
        </View>

        {/* Search */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4 px-4 w-[94vw]'>
          <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
            <MagnifyingGlassIcon color='gray' size={20} />
            <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
          </View>
          <AdjustmentsVerticalIcon color='#00CCBB' />
        </View>
        {/* Body */}
        <ScrollView
          className='bg-gray-100'
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          <Categories />
          <FeaturedRow id='1234' title='Featured' description='Paid placements from our partners' />
          <FeaturedRow id='1235' title='Tasty Discount' description="Everyone's been enjoying these juicy discounts!" />
          <FeaturedRow id='1236' title='Offers near you' description='Why not support your local restaurant tonight!' />
        </ScrollView>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen
