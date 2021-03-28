import React from 'react'
import { Dimensions, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import styled from 'styled-components'
import HomeNavigator from './navigators/homeNavigator'

const { width, height } = Dimensions.get('screen')

const Container = styled(SafeAreaView)`
  width: ${width};
  height: ${height};
`

const Tab = createBottomTabNavigator()

const App = () => {
    return (
        <Container>

            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
                </Tab.Navigator>
            </NavigationContainer>

        </Container>

    )
}
export default App


