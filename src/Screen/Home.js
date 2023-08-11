import { View, Text, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ItemCart from '../Component/ItemCart';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {

  var categories = [
    { id: 1, name: 'All', img: require('../Images/all.png'), task: 0 },
    { id: 2, name: 'Home', img: require('../Images/home.png'), task: 0 },
    { id: 3, name: 'Work', img: require('../Images/work.png'), task: 0 },
    { id: 4, name: 'Study', img: require('../Images/study.png'), task: 0 },
    { id: 5, name: 'Sport', img: require('../Images/sport.png'), task: 0 },
    { id: 6, name: 'Travel', img: require('../Images/travel.png'), task: 0 },
    { id: 7, name: 'Person', img: require('../Images/person.png'), task: 0 },
    { id: 8, name: 'Shopping', img: require('../Images/shopping.png'), task: 0 },
    { id: 9, name: 'Friend', img: require('../Images/friend.png'), task: 0 },
    { id: 10, name: 'Family' ,img: require('../Images/family.png'), task: 0 },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 20 }}>Danh sách công việc</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 70}}>
        <FlatList
          data={categories}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <ItemCart item={item}/>
            )
          }}
        />
      </View>
    </View>
  )
}

export default Home