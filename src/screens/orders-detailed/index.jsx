import { SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { OrderItems } from '../../components';

const OrdersDetailed = ({ navigation, route }) => {
  const { orderTypes, orders } = route.params;
  const ordersDetailedItems = orders.filter((order) => order.orderType == orderTypes);

  const onSelectItem = (id) => {
    navigation.navigate('OrderDetail', { orderId: id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <OrderItems items={ordersDetailedItems} preview={false} onSelectItem={onSelectItem} />
      </View>
    </SafeAreaView>
  );
};

export default OrdersDetailed;
