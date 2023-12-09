import { View, StyleSheet, FlatList, Image, Dimensions, Text } from 'react-native'
import React from 'react'

const data = [
    { id: '1', image: require('../Assets/colors1.png') },
    { id: '2', image: require('../Assets/colors2.png') },
    { id: '3', image: require('../Assets/colors3.png') }
]

const VideoCourseList = () => {
    const renderItem = ({ item }) => (
        <View style={{marginTop:10}}>
            <Image source={item.image}
            style={{width:150, height:90, margin:10, borderRadius:10}} />
            <Text>Colors Course</Text>
        </View>
    );

    return (
        <View>
            <Text style={{
                fontSize:20,
                fontWeight:'900',
                marginBottom:3
            }}>
                Colors Lessons
            </Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default VideoCourseList