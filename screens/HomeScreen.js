import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import tw from "twrnc"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { Dimensions } from 'react-native'

const colors = {
    primary:"#f15454"
}

const HomeScreen = () => {
  return (
 <SafeAreaView style={tw`flex-1`}>
    <View>
        {/*search_bar*/}
        <Pressable
          style={[{
            borderRadius:30, 
            justifyContent:'center', 
            position:'absolute',
            zIndex:999,
            top:20,
            height: 60,
            marginHorizontal: 10,
            width: Dimensions.get('screen').width -20
        },
            tw`bg-gray-100 flex-row`]}
          onPress={() => console.warn('Explore btn clicked')}
          >
            <FontAwesome 
            name='search'
            size={25}
            color={colors.primary}
            style={tw`mt-3`}
            />
            <Text style={[{}, tw`ml-4 mt-3 text-lg font-bold`]} >Where are you going?</Text>
          </Pressable>

        <ImageBackground

        style={[{width:'100%', height:500, justifyContent:'center'}]}
        
        source={require("../assets/img.png")}
        >
            <Text 
            style={[{fontSize:80, width:'70%'}, tw`text-white font-bold ml-5`]} 
            >GO NEAR</Text>
          <Pressable
          style={[{borderRadius:10, justifyContent:'center', alignContent:'center'},
            tw`bg-gray-100 mt-6 w-50 ml-6 h-14`]}
          onPress={() => console.warn('Explore btn clicked')}
          >
            <Text style={[{}, tw`ml-5 text-lg font-bold`]} >Explore Nearby</Text>
          </Pressable>
        </ImageBackground>

    </View>
 </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})