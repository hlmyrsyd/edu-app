import React from 'react'
import { View, Text, Button } from 'react-native'
import WelcomeHeader from '../Components/WelcomeHeader'
import SearchBar from '../Components/SearchBar'

export default function Home() {
    return (
        <View>
            <WelcomeHeader/>
            <SearchBar/>
        </View>
    )
}
