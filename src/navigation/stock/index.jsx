import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, FONTS } from '../../constants';
import { Stock } from '../../screens';

const Stack = createNativeStackNavigator();

const StockNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Stock"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.text,
        headerTitleStyle: { fontFamily: FONTS.bold },
      }}>
      <Stack.Screen
        name="Stock"
        component={Stock}
        options={{ title: 'STOCK', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
};

export default StockNavigator;
