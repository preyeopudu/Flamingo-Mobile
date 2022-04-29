import React from 'react'
import {ActivityIndicator,View,StyleSheet} from 'react-native'

export const Loading=()=>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
          <ActivityIndicator color="black" size="large"/>
        </View>
    )
}