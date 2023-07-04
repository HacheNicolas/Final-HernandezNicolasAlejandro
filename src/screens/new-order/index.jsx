import { SafeAreaView, ScrollView, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { COLORS } from '../../constants';
import { Button } from 'react-native';
import { saveOrder } from '../../store/orders.slice';

const NewOrder = ({ navigation }) => {
  const dispatch = useDispatch();
  const [orderType, setOrderType] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(null);

  const enableButton = orderType && description && amount;

  const onHandlerChangeOrderType = (type) => {
    setOrderType(type);
  };

  const onHandlerChangeDescription = (description) => {
    setDescription(description);
  };

  const onHandlerChangeAmount = (amount) => {
    setAmount(amount);
  };

  const onHandlerSubmit = () => {
    dispatch(saveOrder({ orderType, description, amount })).unwrap();
    navigation.navigate('Orders');
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>Tipo de Pedido</Text>
        <TextInput
          style={styles.input}
          placeholder="Donacion o Solicitud..."
          onChangeText={onHandlerChangeOrderType}
          value={orderType}
        />
        <Text style={styles.title}>Descripción</Text>
        <TextInput
          style={styles.input}
          placeholder="Detalle del pedido..."
          onChangeText={onHandlerChangeDescription}
          value={description}
        />
        <Text style={styles.title}>Monto</Text>
        <TextInput
          style={styles.input}
          placeholder="Monto en pesos..."
          onChangeText={onHandlerChangeAmount}
          value={amount}
        />
        <Button
          disabled={!enableButton}
          title="Crear pedido"
          color={COLORS.primary}
          onPress={onHandlerSubmit}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default NewOrder;
