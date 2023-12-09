import React from 'react'
import { View, Text, Button } from 'react-native'
import WelcomeHeader from '../Components/WelcomeHeader'
import SearchBar from '../Components/SearchBar'
import Slider from '../Components/Slider'
import VideoCourseList from '../Components/VideoCourseList'

const Home = () => {
    return (
        <View>
            <WelcomeHeader/>
            <SearchBar/>
            <Slider/>
            <VideoCourseList/>
        </View>
    )
}

export default Home
