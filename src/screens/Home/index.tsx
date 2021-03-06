import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import { Profile } from "../../components/Profile";
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

import { styles } from "./styles"

export function Home() {
  const [category, setCategory ] = useState("")

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
    },

    {
      id: "2",
      guild: {
        id: "1",
        name: "lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
    },
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category? setCategory("") : setCategory(categoryId)
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>
          
        <CategorySelect 
          categorySelected={category} // Categoria que está selecionada
          setCategory={handleCategorySelect} // Função pra selecionar a nova categoria
        />

        <View style={styles.content}>
          <ListHeader 
            title="Partidas agendadas"
            subtitle="total 6"
          />

          <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} />
            )}
            ItemSeparatorComponent={ () => <ListDivider />}
            style={styles.matches}
            showsVerticalScrollIndicator
          />
        </View>

        </View>
  );
}