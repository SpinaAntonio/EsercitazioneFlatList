import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // sfondo grigio per il contenuto
    paddingTop: 40, // spazio per la status bar
  },

  header: {
    backgroundColor: '#113ec2',
    paddingVertical: 20, // più spazio sopra e sotto
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },

  footer: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 22, // più spazio sopra e sotto
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },

  headerTitle: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 7,

  },


  card: {
    position: 'relative',
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

  // Nuova card
  adder: {
    position: 'absolute',
    right: 20,
    bottom: 55,
    backgroundColor: '#113ec2',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  adderText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },

  button: {
    flex: 1,
    backgroundColor: '#113ec2',
    padding: 12,
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Icona cestino
  trashIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 5,
  },

});

export default styles;
