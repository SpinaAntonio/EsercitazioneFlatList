import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, ActivityIndicator, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './assets/styles/style';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://68394ff56561b8d882afd028.mockapi.io/EsFlatList');
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}> 
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) =>
            item?.id?.toString?.() || index.toString() // PREVIENE errore su undefined
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={{ uri: item.coverImage }}
                style={styles.coverImage}
              />
              <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>By {item.author}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.date}>
                  {new Date(item.date).toLocaleDateString()}
                </Text>
                <Text style={styles.price}>€ {item.price}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}
