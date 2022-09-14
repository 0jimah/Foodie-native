import { View, Text } from 'react-native';
import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';
import { useState } from 'react';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);

  const dispatch = useDispatch();

  useMemo(() => {
    const groupItems = items.reduce((results, item) => {
      (results[items.id] = results[items.id] || []).push(item);
      return results;
    }, {});
    setGroupItemsInBasket(groupItems);
  }, [items]);

  console.log(groupItemsInBasket);

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  );
};

export default BasketScreen;
