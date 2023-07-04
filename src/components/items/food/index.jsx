import React from 'react';
import { View, FlatList, Text } from 'react-native';
import FoodItem from './item';
import { styles } from './styles';

const Items = ({ items, onSelectItem }) => {
  const renderItem = ({ item }) => <FoodItem item={item} onSelectItem={onSelectItem} />;

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.listContainer}>
      <View style={styles.container}>
        <View style={styles.name}>
          <Text style={styles.title}>nombre</Text>
        </View>
        <View style={styles.quantity}>
          <Text style={styles.title}>cantidad</Text>
        </View>
        <View style={styles.expiration}>
          <Text style={styles.title}>caducidad</Text>
        </View>
      </View>
      <FlatList
        renderItem={renderItem}
        data={items}
        keyExtractor={keyExtractor}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default Items;
