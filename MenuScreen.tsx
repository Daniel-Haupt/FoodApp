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
    <View style={styles.rowContainer}>
      <View style={styles.columnSection}>
        <Text style={styles.sectionTitle}>Starters</Text>
        {starters.map((dish, i) => (
          <View key={i} style={styles.dishItem}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text>{dish.description}</Text>
            <Text>R{dish.price}</Text>
          </View>
        ))}
      </View>

      <View style={styles.columnSection}>
        <Text style={styles.sectionTitle}>Mains</Text>
        {mains.map((dish, i) => (
          <View key={i} style={styles.dishItem}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text>{dish.description}</Text>
            <Text>R{dish.price}</Text>
          </View>
        ))}
      </View>

      <View style={styles.columnSection}>
        <Text style={styles.sectionTitle}>Desserts</Text>
        {desserts.map((dish, i) => (
          <View key={i} style={styles.dishItem}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text>{dish.description}</Text>
            <Text>R{dish.price}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  columnSection: {
    flex: 1,
    backgroundColor: '#ffffffaa',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dishItem: {
    marginBottom: 10,
    alignItems: 'center',
  },
  dishName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
