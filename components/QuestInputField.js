import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, Keyboard } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export default QuestInputField = (props) => {
    const [quest, setQuest] = useState();

    const handleAddQuest = (value) => {
        props.addQuest(value);
        setQuest(null);
        Keyboard.dismiss();

    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TextInput style={styles.inputField} value={quest} onChangeText={text => setQuest(text)} placeholder={'Write your Quest!'} placeholderTextColor={'#FFF'} onSubmitEditing={() => handleAddQuest(quest)} />
            <TouchableOpacity onPress={() => handleAddQuest(quest)}>
                <View style={styles.button}>
                    <Icon name="arrow-up" size={24} color="#F55050" />
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );



}

const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#F55050',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },

    inputField: {
        color: '#fff',
        height: 50,
        flex: 1,
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
