import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from "twrnc"
import HomeScreen from './screens/HomeScreen';
import { SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
          
      <HomeScreen/>
    
    </SafeAreaView>

  );
}


