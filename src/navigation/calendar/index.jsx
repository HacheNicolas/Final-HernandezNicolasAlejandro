import Ionicons from '@expo/vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, FONTS } from '../../constants';
import { Calendar, EventDetail, Maps, NewEvent } from '../../screens';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const CalendarNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Calendar"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.text,
        headerTitleStyle: { fontFamily: FONTS.bold },
      }}>
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={({ navigation }) => ({
          title: 'CALENDARIO',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('NewEvent')}>
              <Ionicons name="add-circle-outline" size={30} color={COLORS.white} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={({}) => ({
          title: 'Evento',
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="NewEvent"
        component={NewEvent}
        options={{ title: 'NUEVO EVENTO', headerTitleAlign: 'center' }}
      />
      <Stack.Screen name="Maps" component={Maps} options={{ title: 'Mapa' }} />
    </Stack.Navigator>
  );
};

export default CalendarNavigator;
