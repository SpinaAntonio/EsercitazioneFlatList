import React, { useEffect, useState, useCallback } from 'react';
import {
  View, FlatList, ActivityIndicator, RefreshControl,
  Text, Modal, TextInput, TouchableOpacity
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './assets/styles/style';
import Card from './assets/components/card';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [newCard, setNewCard] = useState({
    title: '',
    author: '',
    description: '',
    coverImage: '',
    price: ''
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://68394ff56561b8d882afd028.mockapi.io/EsFlatList');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Errore nel fetch:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  const addCard = async () => {
    // Controlla se tutti i campi sono compilati tranne URL
    if (!newCard.title.trim() || !newCard.author.trim() || !newCard.price.trim()) { // Evita che vengono inseriti solo spazi
      alert('Inserisci titolo, autore e prezzo');
      setError(true);
      return;
    }

    // Controlla se c'è un errore
    while (setError(true)) {
        // Se c'è un errore, non procedere con l'inserimento
        if (newCard.title.trim() && newCard.author.trim() && newCard.price.trim())
          setError(false);
        return;

      }

    const lastCard = {
      ...newCard, // Copia i dati dalla nuova card
      date: new Date().toISOString() // Aggiungi la data corrente
    };

    // Effettua il POST al server per salvare la nuova card
    try {
      const response = await fetch('https://68394ff56561b8d882afd028.mockapi.io/EsFlatList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Specifica il tipo di contenuto come JSON
        },
        body: JSON.stringify(lastCard)
      });

      const savedCard = await response.json(); // Ricevi la risposta dal server con ID
      setData([savedCard, ...data]); // Aggiungi la nuova card all'inizio della lista
      setNewCard({ title: '', author: '', description: '', coverImage: '', price: '' }); // Resetta i campi
      setModalVisible(false);
      setError(false);
    } catch (error) {
      console.error('Errore durante il salvataggio:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Permette di eseguire il fetch dei dati una sola volta

  // Effettua il fetch dei dati iniziali
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>IBEI</Text>
      </View>
      <StatusBar style="auto" />

      {/* Lista dei libri */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          style={{ width: '100%' }}
          data={data}
          keyExtractor={(item, index) => item?.id?.toString?.() || index.toString()}
          renderItem={({ item }) => <Card item={item} />}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      )}

      {/* Bottone Adder */}
      <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      {/* Finestra Nuova Card */}
      <Modal visible={modalVisible} animationType="slide" transparent>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>NUOVO PRODOTTO</Text>

      {/* Prende gli altri valori e cambia solo il titolo */}
      <TextInput
        placeholder="Titolo"
        style={styles.input}
        value={newCard.title?.toString() || ''}
        onChangeText={text => setNewCard({ ...newCard, title: text })}
      />

      <TextInput
        placeholder="Autore"
        style={styles.input}
        value={newCard.author?.toString() || ''}
        onChangeText={text => setNewCard({ ...newCard, author: text })}
      />

      <TextInput
        placeholder="Descrizione"
        style={styles.input}
        value={newCard.description?.toString() || ''}
        onChangeText={text => setNewCard({ ...newCard, description: text })}
      />

      <TextInput
        placeholder="Immagine URL"
        style={styles.input}
        value={newCard.coverImage?.toString() || ''}
        onChangeText={text => setNewCard({ ...newCard, coverImage: text })}
      />

      <TextInput
        placeholder="Prezzo"
        style={styles.input}
        keyboardType="numeric"
        value={newCard.price?.toString() || ''}
        onChangeText={text => setNewCard({ ...newCard, price: text })}
      />

      {/* Pulsanti di azione */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#aaa' }]}
          onPress={() => setModalVisible(false)}
        >
          <Text style={styles.buttonText}>Annulla</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={addCard}>
          <Text style={styles.buttonText}>Aggiungi</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>


      <View style={styles.footer}></View>
    </View>
  );
}
