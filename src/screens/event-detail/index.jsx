import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { MapPreview } from '../../components';
import { deleteEvent } from '../../store/events.slice';

const EventDetail = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { eventId } = route.params;
  const event = useSelector((state) => state.events.data.find((event) => event.id === eventId));

  const parseCoords = JSON.parse(event.coords);

  const onCancel = () => {
    navigation.navigate('Calendar', {});
  };

  const onDelete = () => {
    dispatch(deleteEvent(eventId));
    navigation.navigate('Calendar', {});
  };

  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>¿Desea eliminar este evento?</Text>
        <View style={styles.location}>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>{event.location}</Text>
          </View>
          <MapPreview style={styles.map} location={{ lat: parseCoords.lat, lng: parseCoords.lng }}>
            <Text>Ubicacion no disponible</Text>
          </MapPreview>
          <Text style={styles.selectedItem}>titulo: {event.name}</Text>
          <Text style={styles.selectedItem}>fecha: {event.date}</Text>
          <Text style={styles.selectedItem}>descripcion: {event.description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Cancelar" color={COLORS.primary} onPress={onCancel} />
          <Button title="Eliminar" color={COLORS.red} onPress={onDelete} />
        </View>
      </View>
    </ScrollView>
  );
};

export default EventDetail;
