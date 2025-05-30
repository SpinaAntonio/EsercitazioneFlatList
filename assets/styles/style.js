import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // sfondo grigio per il contenuto
    paddingTop: 40, // spazio per la status bar
  },

  header: {
    backgroundColor: '#007aff',
    paddingVertical: 40, // più spazio sopra e sotto
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },

  headerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1,

  },


  card: {

    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    
  },

  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  coverImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
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
});

export default styles;
