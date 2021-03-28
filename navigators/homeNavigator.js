import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'

const Stack = createStackNavigator()
const HomeNavigator = (props) => {
    const { name } = props
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} options={{title:"Home"}} component={Home} />
        </Stack.Navigator>
    )
}
export default HomeNavigator
