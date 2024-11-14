import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function EatingGoalsScreen() {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

    const handleDone = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            {/* Back Arrow */}
            <TouchableOpacity 
                style={styles.backButton}
                onPress={handleBack}
            >
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* Question Text */}
            <Text style={styles.questionText}>what are your eating goals?</Text>

            {/* Placeholder Buttons/Options */}
            <View style={styles.optionContainer}>
                <View style={styles.optionBox} />
                <View style={styles.optionBox} />
                <View style={styles.optionBox} />
            </View>

            <TouchableOpacity 
                style={styles.doneButton}
                onPress={handleDone}
            >
                <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3', // light gray background color
        padding: 20,
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    questionText: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#000',
        alignSelf: 'left'
    },
    optionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%'
    },
    optionBox: {
        width: '90%',
        height: 80,
        borderRadius: 20,
        backgroundColor: '#fff', // white background for the options
        marginVertical: '4%'
    },
    doneButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: '20%',
        width: '35%',
        alignSelf: 'center',
    },
    doneButtonText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
});
