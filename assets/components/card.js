import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/style';

const Card = ({ item }) => {
  // Inserisce URL immagine di default se non è inserita
  const imageUrl = item.coverImage?.trim() ? { uri: item.coverImage } : { uri: 'https://picsum.photos/200' }; // immagine di default online
  
  return (
    <View style={styles.card}>
      <Image source={imageUrl} style={styles.coverImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price} €</Text>
      </View>
    </View>
  );
};

export default Card;
