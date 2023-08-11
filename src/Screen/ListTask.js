import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { useState } from 'react';
import DatePicker from 'react-native-date-picker'

const ListTask = ({ route }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const category = route.params.name;

    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: 60, flexDirection: 'row', padding: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 45, height: 45, borderWidth: 1, borderRadius: 100, borderBlockColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('../Images/back.png')}
                        style={{ width: 30, height: 30 }} />
                </TouchableOpacity>

                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{`${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`}</Text>
                <TouchableOpacity
                    onPress={() => {
                        setOpen(true);
                    }}
                    style={{
                        width: 45,
                        height: 45,
                        borderWidth: 1,
                        borderRadius: 100,
                        borderBlockColor: 'black',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Image
                        source={require('../Images/calendar.png')}
                        style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                <DatePicker
                    modal
                    mode='date'
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>
            <View style={{
                marginTop: 10,
                width: '50%',
                height: 50,
                borderRadius: 10,
                backgroundColor: 'black',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff' }}>{category}</Text>
            </View>

        </View>
    )
}

export default ListTask