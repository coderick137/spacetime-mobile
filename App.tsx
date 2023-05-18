import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styled } from 'nativewind';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';

import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'
import NLWLogo from './src/assets/nlw-spacetime-logo.svg'



const StyledStripes = styled(Stripes)

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
    <ImageBackground source={blurBg} className='bg-gray-900 flex-1 items-center justify-center px-8 py-10'
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className='absolute left-2' />

      <View className='flex-1 items-center justify-center gap-6'>
        <NLWLogo />
        <View className='space-y-2'>
          <Text className='text-center font-title text-2xl leading-tight text-gray-50'>Sua cápsula do tempo</Text>
          <Text className='text-center font-body text-base leading-relaxed text-gray-100'>
            Colessione momentos marcantes de sua jornada e compartilhe (se quiser)
            com o mundo
          </Text>
        </View>
        <TouchableOpacity
          className='rounded-full bg-green-500 px-5 py-3'
          activeOpacity={0.7}
        >
          <Text className='font-alt text-sm uppercase text-black'>Cadastar Lembrança</Text>
        </TouchableOpacity>
      </View>

      <Text className='text-center font-body text-sm leading-relaxed text-gray-100'>
        Feito com ♥ por <Text className='font-alt text-gray-50'>@code_rick</Text>
      </Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}

