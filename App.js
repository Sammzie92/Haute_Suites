import tw from "twrnc"
import HomeScreen from './screens/HomeScreen';
import { SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavigationContainer from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acomodation from "./components/Acomodation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
        <SafeAreaView style={tw`mt-7`}>
         
            <Acomodation/>
         

          

        </SafeAreaView>


  );
}


