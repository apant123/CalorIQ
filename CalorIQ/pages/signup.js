import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpPage = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signup = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User registered:', user);
            navigation.navigate('Experience');

            // Add navigation to home screen or other logic here
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create An Account</Text>
            
            <Text style={styles.label}>Email or Phone Number:</Text>
            <TextInput 
                style={styles.input} 
                keyboardType="text"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.label}>Password:</Text>
            <TextInput 
                style={styles.input} 
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.signUpButton} onPress={signup}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3', // light gray background
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 20,
    },
    anonymousButton: {
        backgroundColor: '#A020F0',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignSelf: 'center',
        marginBottom: 20,
    },
    anonymousButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    signUpButton: {
        backgroundColor: '#A9A9A9',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    signUpButtonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default SignUpPage;