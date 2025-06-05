import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importa icona
import styles from '../styles/style';

const Card = ({ item, onDelete }) => {

  // Controlla se l'URL dell'immagine è vuoto o solo spazi
  const imageUrl = item.coverImage?.trim() ? { uri: item.coverImage } : { uri: 'https://picsum.photos/200' };

  // Controllo eliminazione
  const handleDelete = () => {
    Alert.alert(
      'Conferma eliminazione',
      `Sei sicuro di voler eliminare "${item.title}"?`,
      [
        { text: 'Annulla', style: 'cancel' },
        { text: 'Elimina', style: 'destructive', onPress: () => onDelete(item.id) },
      ]
    );
  };

  return (
    <View style={styles.card}>
      <Image source={imageUrl} style={styles.coverImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price} €</Text>
      </View>

      {/* Bottone cestino */}
      <TouchableOpacity onPress={handleDelete} style={styles.trashIcon}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>

    </View>
  );
};

export default Card;
