import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>
  }


  return (
    <View className='bg-gray-900 flex-1 items-center justify-center'>
      <Text className='text-gray-50 text-3xl font-bold'>Lucas Moura</Text>
      <StatusBar style="light" translucent />
    </View>
  );
}

