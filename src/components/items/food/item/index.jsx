import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const FoodItem = ({ item, onSelectItem }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelectItem(item.id)}>
      <View style={styles.name}>
        <Text numberOfLines={1} style={styles.item}>
          {item.name}
        </Text>
      </View>
      <View style={styles.quantity}>
        <Text numberOfLines={1} style={styles.item}>
          {item.quantity}
        </Text>
      </View>
      <View style={styles.expiration}>
        <Text numberOfLines={1} style={styles.item}>
          {item.expiration}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodItem;
