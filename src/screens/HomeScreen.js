import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, LogBox } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons'; 
import { db } from '../database/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

// Esconde os avisos amarelos chatos na tela
LogBox.ignoreAllLogs();

export default function HomeScreen({ navigation }) {
  const [lembretes, setLembretes] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'lembretes'), orderBy('dataCriacao', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLembretes(lista);
    });
    return () => unsubscribe();
  }, []);

  // O que aparece quando a lista está vazia
  const TelaVazia = () => (
    <View style={styles.emptyContainer}>
      <AntDesign name="inbox" size={60} color="#334155" />
      <Text style={styles.emptyText}>Nenhum lembrete por aqui!</Text>
      <Text style={styles.emptySubText}>Clique no + para criar um novo.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Cabeçalho Bonitão */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Minhas Tarefas</Text>
        </View>
        <TouchableOpacity style={styles.configIcon} onPress={() => navigation.navigate('Config')}>
          <AntDesign name="setting" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Lista de Lembretes */}
      <FlatList
        data={lembretes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={TelaVazia} // Chama a telinha fofa se não tiver nada
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Details', { item })}
          >
            <View style={styles.cardLeft}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="event-note" size={24} color="#38BDF8" />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.titulo}</Text>
                <Text style={styles.cardText} numberOfLines={1}>
                  {item.prazo ? `⏰ ${item.prazo}` : 'Sem prazo definido'}
                </Text>
              </View>
            </View>
            <AntDesign name="right" size={18} color="#64748B" />
          </TouchableOpacity>
        )}
      />

      {/* Botão Flutuante (Floating Action Button) */}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('Add')}>
        <AntDesign name="plus" size={28} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#0F172A', // Fundo azul marinho bem escuro e chique
    paddingHorizontal: 20, 
    paddingTop: 60 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 30 
  },
  greeting: { 
    fontSize: 16, 
    color: '#94A3B8', 
    fontWeight: '500' 
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#F8FAFC' 
  },
  configIcon: {
    backgroundColor: '#1E293B',
    padding: 12,
    borderRadius: 15,
  },
  card: { 
    backgroundColor: '#1E293B', 
    padding: 16, 
    borderRadius: 20, 
    marginBottom: 16, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    // Sombrinha para dar profundidade
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    backgroundColor: '#0F172A',
    padding: 12,
    borderRadius: 16,
    marginRight: 15,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: { 
    fontWeight: 'bold', 
    fontSize: 18, 
    color: '#F8FAFC',
    marginBottom: 4,
  },
  cardText: { 
    color: '#94A3B8', 
    fontSize: 14 
  },
  fab: { 
    backgroundColor: '#38BDF8', // Botão flutuante azul claro para destacar
    width: 65,
    height: 65,
    borderRadius: 35, 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute', 
    bottom: 30, 
    right: 20,
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  emptyText: {
    color: '#94A3B8',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  emptySubText: {
    color: '#64748B',
    fontSize: 14,
    marginTop: 5,
  }
});