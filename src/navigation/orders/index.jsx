import Ionicons from '@expo/vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, FONTS } from '../../constants';
import { NewOrder, OrderDetail, Orders, OrdersDetailed } from '../../screens';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.text,
        headerTitleStyle: { fontFamily: FONTS.bold },
      }}>
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={({ navigation }) => ({
          title: 'PEDIDOS',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('NewOrder')}>
              <Ionicons name="add-circle-outline" size={30} color={COLORS.white} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="OrdersDetailed"
        component={OrdersDetailed}
        options={({ route }) => ({
          title: route.params.name,
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={({}) => ({
          title: 'Pedido',
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="NewOrder"
        component={NewOrder}
        options={{ title: 'NUEVO PEDIDO', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
