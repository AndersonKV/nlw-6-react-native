import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage={'https://github.com/AndersonKV.png'} />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>olá</Text>
          <Text style={styles.username}>rodirgo</Text>
        </View>
        <Text style={styles.message}>hoje é dia de vitoria</Text>
      </View>
    </View>
  );
}
