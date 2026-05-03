import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ConfigScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      
      <TouchableOpacity style={styles.option}>
        <MaterialCommunityIcons name="account" size={24} color="#48227a" />
        <Text style={styles.optionText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, { marginTop: 40 }]}>
        <MaterialCommunityIcons name="logout" size={24} color="#ef4444" />
        <Text style={[styles.optionText, { color: '#ef4444' }]}>Sair da Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 25 },
  title: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 30 },
  option: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 15, 
    backgroundColor: '#1e293b', 
    borderRadius: 12, 
    marginBottom: 10 
  },
  optionText: { color: 'white', marginLeft: 15, fontSize: 16 }
});