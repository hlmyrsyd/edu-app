import { View, Text, Image } from 'react-native'
import React from 'react'

export default function WelcomeHeader() {
    return (
        <View style={{display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:30}
        }>
            <View>
            <Text style={{fontSize:15}}>Hello</Text>
            <Text style={{fontWeight:900, fontSize:25}}>Username</Text>
            </View>
            <Image source={require('./../Assets/Profile-pic.png')} style={{ width:50,height:50,borderRadius:100,}}/>
        </View>
    )   
}