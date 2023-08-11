import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ItemCart = ({ item }) => {

    const navigation = useNavigation();

    let color;
    if (item.id === 1) {
        color = '#6699FF';
    } else if (item.id === 2) {
        color = '#DD0000';
    } else if (item.id === 3) {
        color = '#EE7621';
    } else if (item.id === 4) {
        color = '#990099';
    } else if (item.id === 5) {
        color = '#00CC00';
    } else if (item.id === 6) {
        color = '#8B4513';
    } else if (item.id === 7) {
        color = '#4876FF';
    } else if (item.id === 8) {
        color = '#00FFFF';
    } else if (item.id === 9) {
        color = '#FFD700';
    } else if (item.id === 10) {
        color = '#FF00FF';
    }

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('ListTask', item);
            }}
            style={{
                width: (windowWidth / 2.5),
                height: 170,
                margin: 10,
                justifyContent: 'space-between',
                elevation: 5,
                backgroundColor: '#fff',
                padding: 30
            }}>
            <Image
                style={{ width: '40%', height: '40%', tintColor: color }}
                source={item.img} />
            <View style={{ marginLeft: 5 }}>
                <Text style={{ fontWeight: 'bold', color: '#363636' }}>{item.name}</Text>
                <Text>{item.task} Tasks</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemCart