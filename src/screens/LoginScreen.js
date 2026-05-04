import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.inner}>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5246/5246295.png' }} 
          style={styles.logo} 
        />
        
        <Text style={styles.welcome}>Bem-vindo ao</Text>
        <Text style={styles.brand}>
          Reminder<Text style={styles.brandHighlight}>App</Text>
        </Text>

        <View style={styles.inputContainer}>
          <AntDesign name="mail" size={20} color="#94A3B8" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Seu e-mail"
            placeholderTextColor="#64748B"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="lock" size={20} color="#94A3B8" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Sua senha"
            placeholderTextColor="#64748B"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Home')}>
          <Text style={styles.buttonText}>Acessar lembretes</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  inner: { flex: 1, justifyContent: 'center', padding: 30, alignItems: 'center' },
  logo: { width: 100, height: 100, marginBottom: 20 },
  welcome: { color: '#94A3B8', fontSize: 18, fontWeight: '500' },
  brand: { color: '#FFF', fontSize: 36, fontWeight: 'bold', marginBottom: 40 },
  brandHighlight: { color: '#38BDF8' }, // Cor azul adicionada no "App"
  inputContainer: { 
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E293B', 
    borderRadius: 15, marginBottom: 15, paddingHorizontal: 15, width: '100%',
    borderWidth: 1, borderColor: '#334155'
  },
  inputIcon: { marginRight: 10 },
  input: { flex: 1, paddingVertical: 15, color: '#FFF', fontSize: 16 },
  button: { 
    backgroundColor: '#38BDF8', flexDirection: 'row', width: '100%', 
    padding: 18, borderRadius: 15, justifyContent: 'center', alignItems: 'center',
    marginTop: 10, gap: 10
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});