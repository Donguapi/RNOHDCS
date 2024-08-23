import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Button, Alert } from 'react-native';
import { Calendar, CalendarList, Agenda, ExpandableCalendar, CalendarProvider, AgendaList } from 'react-native-calendars';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import isEmpty from 'lodash/isEmpty';

const agendaItems = [
    {
        title: '2023-5-9',
        data: [{ hour: '12am', duration: '1h', title: 'First Yoga' }]
    },

    {
        title: '2024-8-15',
        data: [
            { hour: '1pm', duration: '1h', title: 'Ashtanga Yoga' },
            { hour: '2pm', duration: '1h', title: 'Deep Stretches' },
            { hour: '3pm', duration: '1h', title: 'Private Yoga' }
        ]
    }
];




export function AgendaListExample4() {

    const renderItem = useCallback(({ item }: any) => {

        const buttonPressed = useCallback(() => {
            Alert.alert('Show me more');
        }, []);

        const itemPressed = useCallback(() => {
            Alert.alert(item.title);
        }, []);

        if (isEmpty(item)) {
            return (
                <View style={styles.emptyItem}>
                    <Text style={styles.emptyItemText}>No Events Planned Today</Text>
                </View>
            );
        }

        return <TouchableOpacity onPress={itemPressed} style={styles.item} testID={'jjjhhjj65465656'}>
            <View>
                <Text style={styles.itemHourText}>{item.hour}</Text>
                <Text style={styles.itemDurationText}>{item.duration}</Text>
            </View>
            <Text style={styles.itemTitleText}>{item.title}</Text>
            <View style={styles.itemButtonContainer}>
                <Button color={'grey'} title={'Info'} onPress={buttonPressed} />
            </View>
        </TouchableOpacity>;
    }, []);

    return <ScrollView style={styles.container}>
        <Tester>
           
            <TestSuite name='sectionStyle'>
                <TestCase itShould="测试sectionStyle">
                    <CalendarProvider date={'2023-5-8'}>
                        <ExpandableCalendar />
                        <AgendaList
                            sections={agendaItems}
                            renderItem={renderItem}
                            sectionStyle={{ backgroundColor: 'lightgray' }} // 自定义部分视图的样式    
                        >
                        </AgendaList>
                    </CalendarProvider>
                </TestCase>
            </TestSuite>

        </Tester>
    </ScrollView>
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    itemText: {
        color: 'blue',
        fontSize: 12,
    },
    section: {
        backgroundColor: 'yellow',
        color: 'grey',
        textTransform: 'capitalize'
    },
    item: {
        padding: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        flexDirection: 'row'
    },
    itemHourText: {
        color: 'black'
    },
    itemDurationText: {
        color: 'grey',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4
    },
    itemTitleText: {
        color: 'black',
        marginLeft: 16,
        fontWeight: 'bold',
        fontSize: 16
    },
    itemButtonContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    emptyItem: {
        paddingLeft: 20,
        height: 52,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    emptyItemText: {
        color: 'lightgrey',
        fontSize: 14
    }
})