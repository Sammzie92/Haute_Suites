import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { SafeAreaView } from 'react-native'
import { Image } from 'react-native'


const Acomodation = () => {
  return (
    <SafeAreaView style={tw`m-3`} >
       <View>
      {/*Image*/}
      <Image
      style={[{width:'100%',aspectRatio: 3 /2, resizeMode:'cover', borderRadius: 15 }, tw``]}
      source={{uri:'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'}}
      />      
      {/*Bed and Bedroom*/}
      <Text style={[{
        marginVertical:15,
        
        }, tw`text-lg text-gray-500`]} >1 bed 1 Bedroom</Text>
      {/*Type and description*/}
      <Text style={[{fontSize:18, lineHeight:26}]} numberOfLines={2} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      {/*Old and New Price*/}

      <Text style={[{fontSize:18, marginVertical:15}]}>
        <Text style={[{textDecorationLine:'line-through'},tw`text-gray-400`]} >KSH 3,500 </Text>
        <Text style={[{}, tw`font-bold`]} > KSH 2,500 </Text>
         / night
      </Text>
      {/*Total Price*/}
      <Text style={[{textDecorationLine:'underline'},tw`text-gray-500`]} >KSH 2,200</Text>
    </View>  
    </SafeAreaView>
   
  )
}

export default Acomodation