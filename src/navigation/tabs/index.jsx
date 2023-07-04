import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrdersNavigator from '../orders';
import CalendarNavigator from '../calendar';
import StockNavigator from '../stock';
import { COLORS, FONTS } from '../../constants';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="OrdersTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: FONTS.regular,
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: COLORS.primary,
        },
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.lighterGrey,
        tabBarIconStyle: {
          fontSize: 22,
        },
      }}>
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'mail' : 'mail-outline'} size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="CalendarTab"
        component={CalendarNavigator}
        options={{
          tabBarLabel: 'Calendario',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'calendar' : 'calendar-outline'} size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="StockTab"
        component={StockNavigator}
        options={{
          tabBarLabel: 'Stock',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'file-tray-stacked' : 'file-tray-stacked-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
