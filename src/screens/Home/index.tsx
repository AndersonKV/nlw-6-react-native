import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import IllustrationImg from '../../assets/illustration.png';
import { Appointments } from '../../components/Appointments';
import { ButtonAdd } from '../../components/ButtonAdd';
import { ButtonIcon } from '../../components/ButtonIcon';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'é hoje que vamos chegar ao challenge sem perde uma partida',
    },
    {
      id: '21',
      guild: {
        id: '1',
        name: 'lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'é hoje que vamos chegar ao challenge sem perde uma partida',
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'é hoje que vamos chegar ao challenge sem perde uma partida',
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect categorySelected={category} setCategory={setCategory} />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Appointments data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </View>
  );
}
