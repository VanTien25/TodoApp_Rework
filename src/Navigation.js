import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Screen/Splash';
import Home from './Screen/Home';
import Note from './Screen/Note';
import ListTask from './Screen/ListTask';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}  />
                <Stack.Screen name="Note" component={Note} options={{ headerShown: false}}  />
                <Stack.Screen name="ListTask" component={ListTask} options={{ headerShown: false}}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation