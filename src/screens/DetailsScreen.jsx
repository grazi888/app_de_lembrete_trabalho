import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { db } from '../database/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

export default function DetailsScreen({ route, navigation }) {
  const { item } = route.params || {};

  const excluir = () => {
    Alert.alert('Excluir', 'Deseja apagar este lembrete?', [
      { text: 'Não' },
      { text: 'Sim, Apagar', onPress: async () => {
          await deleteDoc(doc(db, 'lembretes', item.id));
          navigation.goBack();
      }}
    ]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <AntDesign name="left" size={24} color="#94A3B8" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.titulo}</Text>
          <View style={styles.badge}>
            <MaterialIcons name="access-time" size={16} color="#5b2380" />
            <Text style={styles.badgeText}>{item.prazo || 'Sem prazo'}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.descTitle}>DESCRIÇÃO</Text>
          <Text style={styles.description}>{item.descricao || 'Nenhum detalhe adicional.'}</Text>
        </View>

        <TouchableOpacity style={styles.deleteBtn} onPress={excluir}>
          <AntDesign name="delete" size={20} color="#FF4444" />
          <Text style={styles.deleteText}>Excluir Lembrete</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A', paddingTop: 60 },
  back: { paddingHorizontal: 25 },
  content: { padding: 25 },
  header: { marginBottom: 30 },
  title: { fontSize: 36, fontWeight: 'bold', color: '#FFF', marginBottom: 10 },
  badge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E293B', alignSelf: 'flex-start', padding: 8, borderRadius: 10, gap: 5 },
  badgeText: { color: '#38BDF8', fontWeight: 'bold' },
  card: { backgroundColor: '#1E293B', padding: 20, borderRadius: 20, minHeight: 200 },
  descTitle: { color: '#64748B', fontSize: 12, fontWeight: 'bold', marginBottom: 15 },
  description: { color: '#CBD5E1', fontSize: 18, lineHeight: 28 },
  deleteBtn: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40, padding: 15 },
  deleteText: { color: '#FF4444', fontWeight: 'bold', marginLeft: 10, fontSize: 16 }
});