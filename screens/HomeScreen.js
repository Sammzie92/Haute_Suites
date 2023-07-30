import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import tw from "twrnc"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import { Dimensions } from 'react-native'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'

const colors = {
    primary:"#f15454",
    icons: "#efb25c",
    bgColor:"#5a5a5a"
}

const HomeScreen = () => {
  return (
    
 <SafeAreaView style={{backgroundColor:colors.bgColor}} >
 
    <View>
        {/*search_bar*/}
        <Pressable
          style={[{
            borderRadius:30, 
            justifyContent:'center', 
            position:'absolute',
            zIndex:999,
            top:40,
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

        style={[{width:'100%', justifyContent:'center'}, tw`h-150`]}
        
        source={require("../assets/hotel.png")}
        >
            <Text 
            style={[{fontSize:80, width:'70%'}, tw`text-white font-bold ml-5`]} 
            >HAUTE SUITES</Text>
          <Pressable
          style={[{borderRadius:10, justifyContent:'center', alignContent:'center'},
            tw`bg-gray-100 mt-6 w-50 ml-6 h-14`]}
          onPress={() => console.warn('Explore btn clicked')}
          >
            <Text style={[{}, tw`ml-5 text-lg font-bold`]} >Explore Nearby</Text>
          </Pressable>
        </ImageBackground>
        <View style={[{
            
            marginTop:20,
            alignItems:'center',
            justifyContent:'center',
            right:10, 
            top: -40,           
            width:160,
            marginLeft:25,
            borderRadius:25,
            height: 150 ,
            zIndex:9999}, tw`bg-red-200`]} >                      
        <Text style={tw`text-black text-2xl`}>1.2M+</Text>
        <Text style={tw`text-black text-base`}>Reviews</Text>
            <View style={tw`flex-row mt-4 `} >
             <Image
                style={[{
                resizeMode:'contain',
                width:50,
                height:50,                 
                borderColor:'white',
                borderWidth:2                   
                }, tw`rounded-full ml-1`]}
                source={require("../assets/girl.png")} 
                    />
        <Image
            style={[{
                resizeMode:'contain',
                width:50,
                height:50, 
                borderColor:'white',
                borderWidth:2                    
                }, tw`rounded-full -ml-4`]}
                source={require("../assets/prince.png")} 
                />
        <Image
            style={[{
                resizeMode:'contain',
                width:50,
                height:50,
                borderColor:'white',
                borderWidth:2                     
                }, tw`rounded-full -ml-4`]}
                source={require("../assets/raul.png")} 
                />
        <Image
            style={[{
                resizeMode:'contain',
                width:50,
                height:50, 
                borderColor:'white',
                borderWidth:2                    
                }, tw`rounded-full -ml-4`]}
                source={require("../assets/blonde.png")} 
                />
            </View>
        </View>

        

        <View style={[{
            backgroundColor:colors.icons,
            borderRadius:30,
            alignItems:'center',
            width:'40%',
            zIndex:9999,            
            top: -280,
            left:210,
            height: '23%'            
            }, tw`ml-3`]} >

           
        <Text style={
            [{},tw`text-white text-3xl mt-6 font-bold`]} 
            >1.2K+</Text>
        <Text style={[{width:95},tw`mt-6 text-white font-semibold text-lg`]}>
            Daily users from the Community</Text>
        </View>  
        <Pressable
          style={[{
            borderRadius:30, 
            justifyContent:'center', 
            position:'absolute',            
            top:"74%",            
            height: 40,            
            zIndex:9999,
            width: Dimensions.get('screen').width /3
        },
            tw`bg-gray-100 ml-60  flex-row`]}
          onPress={() => console.warn('Explore btn clicked')}
          >
            <Text style={[{}, tw`ml-4 mt-3 text-sm font-bold`]} >Get Started </Text>
            <Entypo 
            name='arrow-with-circle-right'
            size={20}
            color={colors.primary}
            style={tw`mt-3`}
            />
            
          </Pressable>
        
 
    </View>   
    

 </SafeAreaView>
 
  )
}

export default HomeScreen

