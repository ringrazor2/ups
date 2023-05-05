import { Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'

const CustomersScreen = () => {
    const tw = useTailwind();
  return (
    //view is a div equivalent for react-native
    //SafeAreaView is a view that is safe for notches and other things
    <SafeAreaView> 
      <Text style = {tw(`text-red-500`)}>CustomersScreen</Text>
    </SafeAreaView>
  )
}
 
export default CustomersScreen