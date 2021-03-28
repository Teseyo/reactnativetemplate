import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components'

const Main = styled(View)`
    background-color: red;
    width: 250;
    height: 100;
    justify-content: flex-end;
`
const Body = styled(View)`
    background-color: blue;
    width: 250;
    height: 100;
    flex-direction: column;
`

const Row = styled(View)`
    background-color: pink;
    flex-direction: row;
    justify-content: space-around;
`

export default (props) => {
    const { title, description, cost, time } = props
    return (
        <View style={{ padding: 10 }}>
            <Main>
                <Text>{title}</Text>
            </Main>
            <Body>
                <Text>{description}</Text>
                <Row>
                    <Text>{time}</Text>
                    <Text>{cost}</Text>
                </Row>
            </Body>
        </View>
    )
}
