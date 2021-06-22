import React from 'react';
import { ScrollView} from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { categories } from "../../utils/category"

import { theme } from '../../global/styles/theme';
import { styles } from "./styles";

import { Category } from "../../components/Category"


type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
}

export function CategorySelect({categorySelected, setCategory}: Props) {
  return (
    <ScrollView 
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight: 40}}
        
    >
        {
            categories.map(category => (
              <Category 
                key={category.id}
                title={category.title}
                icon={category.icon}
                checked={category.id === categorySelected}
                onPress={() => setCategory(category.id)} // Eu recebo a função no componente 
              />
            ))
        }

        
    </ScrollView>
  )
};
 