import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/style'; // <-- correggi anche questo path

const Card = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.coverImage }} style={styles.coverImage} />
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
);

export default Card;
