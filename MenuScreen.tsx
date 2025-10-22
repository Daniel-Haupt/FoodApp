import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Dish = {
  name: string;
  description: string;
  price: string;
};

type MenuProps = {
  starters: Dish[];
  mains: Dish[];
  desserts: Dish[];
};

export default function Menu({ starters, mains, desserts }: MenuProps) {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Starters</Text>
        {starters.map((dish, i) => (
          <View key={i} style={styles.dish}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text>{dish.description}</Text>
            <Text>R{dish.price}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Mains</Text>
        {mains.map((dish, i) => (
          <View key={i} style={styles.dish}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text>{dish.description}</Text>
            <Text>R{dish.price}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Desserts</Text>
        {desserts.map((dish, i) => (
          <View key={i} style={styles.dish}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text>{dish.description}</Text>
            <Text>R{dish.price}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  section: {
    backgroundColor: '#ffffffaa',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dish: {
    marginBottom: 10,
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
