import { useCallback, useState } from 'react';
import { Button, SafeAreaView, TextInput, View } from 'react-native';
import { styles } from './styles';
import { Items, CustomModal } from '../../components/index';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStockItem, getStock, saveStockItem } from '../../store/stock.slice';
import { COLORS } from '../../constants';
import { useFocusEffect } from '@react-navigation/native';

const Stock = ({}) => {
  /* const stock = useSelector((state) => state.stock.data);
  const [text, setText] = useState('');
  const [items, setItems] = useState(stock);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onAddItem = () => {
    if (text.length === 0) return;
    setItems([
      ...items,
      {
        id: Math.random().toString(),
        name: text,
        quantity: quantity,
        expiration: expiration,
      },
    ]);
    setText('');
  };

  const onHandlerItem = (id) => {
    setModalVisible(!modalVisible);
    const selectedItem = items.find((item) => item.id === id);
    setSelectedItem(selectedItem);
  };

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedItem(null);
  };

  const onHandlerDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setModalVisible(!modalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          buttonColor="#1F8378"
          buttonTitle="Agregar"
          onChangeText={(text) => setText(text)}
          onHandlerButton={onAddItem}
          placeholder="Ingrese un alimento"
          name={text}
        />
        <Input
          buttonColor="#1F8378"
          buttonTitle="Agregar"
          onChangeText={(text) => setText(text)}
          onHandlerButton={onAddItem}
          placeholder="Ingrese un alimento"
          name={text}
        />
        <Input
          buttonColor="#1F8378"
          buttonTitle="Agregar"
          onChangeText={(text) => setText(text)}
          onHandlerButton={onAddItem}
          placeholder="Ingrese un alimento"
          name={text}
        />
      </View>
      <View style={styles.listContainer}>
        <Items items={items} onSelectItem={onHandlerItem} />
      </View>
      <CustomModal
        isVisible={modalVisible}
        animationType="slide"
        onCancel={onHandlerCancelModal}
        onDelete={onHandlerDeleteItem}
        selectedItem={selectedItem}
      />
    </SafeAreaView>
  ); */

  const dispatch = useDispatch();
  const stock = useSelector((state) => state.stock.data);
  const [text, setText] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiration, setExpiration] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const enableButton = text && quantity && expiration;

  const onHandlerChangeText = (text) => {
    setText(text);
  };

  const onHandlerChangeQuantity = (quantity) => {
    setQuantity(quantity);
  };

  const onHandlerChangeExpiration = (expiration) => {
    setExpiration(expiration);
  };

  const onHandlerSubmit = () => {
    dispatch(saveStockItem({ name: text, quantity, expiration })).unwrap();
    setText('');
    setQuantity('');
    setExpiration('');
    dispatch(getStock());
  };

  const onHandlerClearInput = () => {
    setText('');
    setQuantity('');
    setExpiration('');
  };

  const onHandlerItem = (id) => {
    setModalVisible(!modalVisible);
    const selectedItem = stock.find((item) => item.id === id);
    setSelectedItem(selectedItem);
  };

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedItem(null);
  };

  const onHandlerDeleteItem = (id) => {
    dispatch(deleteStockItem(id));
    setModalVisible(!modalVisible);
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getStock());
    }, [dispatch])
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.addContainer}>
        <View style={styles.inputContainerWide}>
          <TextInput
            style={styles.inputWide}
            placeholder="Nombre del alimento..."
            onChangeText={onHandlerChangeText}
            value={text}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Cantidad..."
              onChangeText={onHandlerChangeQuantity}
              value={quantity}
            />
            <TextInput
              style={styles.input}
              placeholder="Fecha caducidad..."
              onChangeText={onHandlerChangeExpiration}
              value={expiration}
            />
          </View>
        </View>
        <View>
          <View style={styles.buttonContainer}>
            <Button
              disabled={!enableButton}
              title="Agregar"
              color={COLORS.primary}
              onPress={onHandlerSubmit}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Limpiar" color={COLORS.red} onPress={onHandlerClearInput} />
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <Items items={stock} onSelectItem={onHandlerItem} />
      </View>
      <CustomModal
        isVisible={modalVisible}
        animationType="slide"
        onCancel={onHandlerCancelModal}
        onDelete={onHandlerDeleteItem}
        selectedItem={selectedItem}
      />
    </SafeAreaView>
  );
};

export default Stock;
