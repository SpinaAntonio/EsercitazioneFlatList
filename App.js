import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, ActivityIndicator, RefreshControl, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './assets/styles/style';
import Card from './assets/components/card.js';
export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Funzione per prendere i dati dall'API
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

  // Effetti per caricare i dati all'avvio e per il refresh
  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Ibei</Text>
    </View>
    <StatusBar style="auto" />
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
  </View>
);

}
