import { StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native';   

const styles = StyleSheet.create({
card: {
  flexDirection: 'row',
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
  backgroundColor: '#fff',
},

coverImage: {
  width: 80,
  height: 80,
  borderRadius: 8,
  marginRight: 10,
},

cardContent: {
  flex: 1,
  justifyContent: 'center',
},

title: {
  fontSize: 16,
  fontWeight: 'bold',
},

author: {
  fontSize: 14,
  color: '#666',
},

description: {
  fontSize: 14,
  color: '#333',
},

date: {
  fontSize: 12,
  color: '#999',
  marginTop: 4,
},

price: {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#007aff',
  marginTop: 4,
},
container: {
  flex: 1,
  padding: 20,
  backgroundColor: '#f5f5f5',
},
});