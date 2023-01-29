import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default QuestItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.questContainer}>
                <Text style={styles.quest}>{props.quest}</Text>
                <TouchableOpacity onPress={() => props.deleteQuest()}>
                    <MaterialIcons style={styles.delete} name="delete" size={18} color='#F55050' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {

        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: '#F55050',
        fontSize: 20,
    },
    questContainer: {
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    quest: {
        color: '#F55050',
        width: '90%',
        fontSize: 24,
    },
    delete: {
        marginLeft: 10,
    },
});