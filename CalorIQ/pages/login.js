import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace('Home'); // Redirect to Home on success
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Text style={styles.label}>Email</Text>
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
      <TouchableOpacity style={styles.signUpButton} onPress={handleLogin}>
            <Text style={styles.signUpButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUpRedirectText}>Don't have an account? Sign up!</Text>
      </TouchableOpacity>
    </View>
  );
}

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
signUpButton: {
    backgroundColor: '#3F71A8',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15
},
signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
},
errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
},
signUpRedirectText: {
    color: '#000000',
    textAlign: 'center',
    marginTop: 15,
  },
});
