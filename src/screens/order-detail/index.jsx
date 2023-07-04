import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrderState } from '../../store/orders.slice';

const OrderDetail = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { orderId } = route.params;
  const order = useSelector((state) => state.orders.data.find((order) => order.id === orderId));

  const onReject = () => {
    dispatch(
      updateOrderState({
        id: orderId,
        orderType: order.orderType,
        orderState: 'Rechazada',
        description: order.description,
        amount: order.amount,
      })
    ).unwrap();
    navigation.navigate('Orders', {});
  };
  const onAccept = () => {
    dispatch(
      updateOrderState({
        id: orderId,
        orderType: order.orderType,
        orderState: 'Aceptada',
        description: order.description,
        amount: order.amount,
      })
    ).unwrap();
    navigation.navigate('Orders', {});
  };

  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Gestión de Pedido</Text>
        <View style={styles.Detail}>
          <Text style={styles.selectedItem}>Tipo de pedido: {order.orderType}</Text>
          <Text style={styles.selectedItem}>Estado de pedido: {order.orderState}</Text>
          <Text style={styles.selectedItem}>Monto: ${order.amount}</Text>
          <Text style={styles.selectedItem}>descripcion: {order.description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Rechazar" color={COLORS.red} onPress={onReject} />
          <Button title="Aceptar" color={COLORS.primary} onPress={onAccept} />
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderDetail;
