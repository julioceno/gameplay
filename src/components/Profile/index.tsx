import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import { Avatar } from "../Avatar";

import { styles } from "./styles";

export function Profile() {
  return (
    <View style={styles.container}>

        <Avatar urlImage="https://github.com/julioceno.png" />

        <View>
            <View style={styles.user}>
                <Text style={styles.greeting}>
                    Olá,
                </Text>

                <Text style={styles.username}>
                    Júlio,
                </Text>
            </View>

            <Text style={styles.message}>
                Hojé é dia de vitória
            </Text>
        </View>
    </View>
  );
};
