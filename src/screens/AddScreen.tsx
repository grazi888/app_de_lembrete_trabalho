import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';

// Corrigindo o erro de comportamento da notificação
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    // Propriedades extras que o TS está pedindo:
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

// Tipando o navigation como 'any' para simplificar
export default function AddScreen({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = async () => {
    if (!title) {
      Alert.alert("Erro", "O título é obrigatório!");
      return;
    }

    try {
      navigation.goBack();
    } catch (error: any) {
      Alert.alert("Erro ao salvar", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>O que você quer lembrar?</Text>
      <TextInput
        style={styles.input}
        placeholder="Título do lembrete"
        placeholderTextColor="#70648b"
        value={title}
        onChangeText={setTitle}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 25 },
  label: { color: '#94a3b8', marginBottom: 8, fontSize: 16 },
  input: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 15,
    color: 'white',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#334155'
  },
  button: { backgroundColor: '#563c77', padding: 18, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});