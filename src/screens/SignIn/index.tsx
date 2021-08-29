import React, { useState } from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';

export function SignIn() {
  const navigation = useNavigation() as any;
  //const [text, setText] = useState('');
  // function handleSignIn() {
  //   navigation.push('Home');
  // }

  const handleSignIn = () => navigation.navigate('Home');

  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}e organize suas {'\n'}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title={'Entrar com Discord'} onPress={handleSignIn} />
      </View>
    </View>
  );
}
