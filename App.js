import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from "twrnc"
import HomeScreen from './screens/HomeScreen';
import { SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavigationContainer from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    <SafeAreaView>
          
      <HomeScreen/>
    
    </SafeAreaView>

  );
}


