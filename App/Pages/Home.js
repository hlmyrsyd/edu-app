import React from 'react'
import { View, Text, Button } from 'react-native'
import WelcomeHeader from '../Components/WelcomeHeader'
import SearchBar from '../Components/SearchBar'
import Slider from '../Components/Slider'

const Home = () => {
    return (
        <View>
            <WelcomeHeader/>
            <SearchBar/>
            <Slider/>
        </View>
    )
}

export default Home
