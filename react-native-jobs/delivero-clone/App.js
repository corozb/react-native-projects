import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { NativeWindStyleSheet } from 'nativewind'

NativeWindStyleSheet.setOutput({
  default: 'native',
})

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-black text-white'>
      <Text className='text-white'>Open up App.js to start working on your app crist!</Text>
      <StatusBar style='auto' />
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })