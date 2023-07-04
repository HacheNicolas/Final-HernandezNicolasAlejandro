import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import OrderItem from './item';
import Card from '../../card';
import { COLORS } from '../../../constants';

const OrderItems = ({ items, title, onSelectList, preview, onSelectItem }) => {
  const keyExtractor = (item) => item.id.toString();
  const renderItem = ({ item }) => (
    <OrderItem item={item} preview={preview} onSelectItem={onSelectItem} />
  );

  const Content = () =>
    preview ? (
      <Card cardStyle={styles.previewListContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={() => onSelectList()}>
            <Ionicons name="arrow-forward" size={30} color={COLORS.black} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          alwaysBounceVertical={false}
        />
      </Card>
    ) : (
      <Card cardStyle={styles.listContainer}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          alwaysBounceVertical={false}
        />
      </Card>
    );

  return <Content />;
};

export default OrderItems;
