import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from "react-native";
import QuestItem from './QuestItem';
import QuestInputField from './QuestInputField';


export default function QuestItems() {
    const [quests, setQuests] = useState([]);

    const addQuest = (quest) => {
        if (quest == null) return;
        setQuests([...quests, quest]);
        Keyboard.dismiss();
    }

    const deleteQuest = (deleteIndex) => {
        setQuests(quests.filter((value, index) => index != deleteIndex));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>QUESTS</Text>
            <ScrollView style={styles.scrollView}>
                {
                    quests.map((quest, index) => {
                        return (
                            <View key={index} style={styles.questContainer}>
                                <QuestItem index={index + 1} quest={quest} deleteQuest={() => deleteQuest(index)} />
                            </View>
                        );
                    })
                }
            </ScrollView>
            {/* <QuestInputField addQuest={addQuest} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    heading: {
        color: '#F55050',
        fontFamily: 'AcademyEngravedLetPlain',
        fontSize: 60,
        fontWeight: '600',
        marginTop: 50,
        marginBottom: 10,
        marginLeft: 20,
    },
    scrollView: {
        marginBottom: 70,
    },
    questContainer: {
        marginTop: 20,
    }
});