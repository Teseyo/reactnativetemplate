import React from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView } from 'react-native'
import styled from 'styled-components'
import { StatusBar } from 'expo-status-bar'
import Card from '../components/card'
const Container1 = styled(Text)`
    flex:1;
    width: 100%;
    background-color: red;
    color: white;
`

const data = [{
  title:'Ykt-Lensk',
  description:'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  time:'123',
  cost:'123',
},
{
  title:'Ykt-Lensk',
  description:'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  time:'123',
  cost:'123',
},
{
  title:'Ykt-Lensk',
  description:'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  time:'123',
  cost:'123',
},
{
  title:'Ykt-Lensk',
  description:'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  time:'123',
  cost:'123',
},
{
  title:'Ykt-Lensk',
  description:'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  time:'123',
  cost:'123',
}
]

export default (props) => {
    const { title, description, cost, time } = props
    return (
            <View style={styles.container}>
                <ScrollView>
                    {data.map((item) => {
                        return (
                            <Card
                                title={item.title}
                                description={item.description}
                                time={item.time}
                                cost={item.cost}
                            ></Card>
                        )
                    })}
                    <StatusBar style="auto" />
                </ScrollView>
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
