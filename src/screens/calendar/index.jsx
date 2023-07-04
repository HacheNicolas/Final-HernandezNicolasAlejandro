import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import EventItems from '../../components/items/event';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../store/events.slice';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const Calendar = ({ navigation }) => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.data);

  const onSelectItem = (id) => {
    navigation.navigate('EventDetail', { eventId: id });
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getEvents());
    }, [dispatch])
  );

  return (
    <SafeAreaView style={styles.container}>
      <EventItems items={events} onSelectItem={onSelectItem} />
    </SafeAreaView>
  );
};

export default Calendar;
