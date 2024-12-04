import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const SignUpPage = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signup = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
        
            // Create a document in Firestore for the new user
            const userDocRef = doc(db, "users", user.uid);
            await setDoc(userDocRef, {
              displayName: name,  // Set the display name when signing up
              email: user.email
            });
        
            console.log("User signed up and Firestore document created!");
            navigation.navigate("Experience")
        } catch (error) {
            console.error("Error signing up:", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an account</Text>

            <Text style={styles.label}>Name:</Text>
            <TextInput 
                style={styles.input} 
                keyboardType="default"
                value={name}
                onChangeText={setName}
            />
            
            <Text style={styles.label}>Email:</Text>
            <TextInput 
                style={styles.input} 
                keyboardType="default"
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

            <View style={styles.footer}>
                <TouchableOpacity style={styles.signUpButton} onPress={signup}>
                    <Text style={styles.signUpButtonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.signUpRedirectText}>Already have an account? Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // light gray background
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
        backgroundColor: '#FDEDB7',
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
    footer: {
        alignItems: 'center', // Center button and link horizontally
        paddingBottom: 20, // Add padding at the bottom
    },
    signUpButton: {
        backgroundColor: '#3F71A8',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    signUpButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signUpRedirectText: {
        color: '#000000',
        fontSize: 14,
        marginTop: 15,
    },
});

export default SignUpPage;