import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { BlurView } from "expo-blur";
import { Link, router } from 'expo-router';

import background from '../assets/backGround.jpg';
import logoLogin from '../assets/logo.png';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {

  };

  return (
    <View style={styles.container}>
      <Image source={background} style={[styles.image, StyleSheet.absoluteFill]} />
      <View style={styles.overlay} />

      <View style={styles.logoContainer}>
        <Image source={logoLogin} style={styles.logo} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <BlurView intensity={80} style={styles.blurContainer}>
          <View style={styles.register}>
            <Text style={styles.title}>Create Your Account</Text>

            <View>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Your username"
                placeholderTextColor="#ccc"
                onChangeText={setUsername}
                value={username}
              />
            </View>
            <View>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="example@gmail.com"
                placeholderTextColor="#ccc"
                onChangeText={setEmail}
                value={email}
              />
            </View>
            <View>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#ccc"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <Link href="/login" style={styles.link}>
              Already have an account? Sign In
            </Link>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for contrast
  },
  logoContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 250,
    resizeMode: 'contain',
  },
  scrollContainer: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  blurContainer: {
    width: 350,
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
  },
  register: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    backgroundColor: '#00CFE9',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  link: {
    fontSize: 16,
    color: '#00CFE9',
    marginTop: 10,
  },
});

export default Register;
