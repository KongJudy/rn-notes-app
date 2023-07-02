import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('Journal')}
      >
        <Text style={styles.linkText}>Journal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('Notes')}
      >
        <Text style={styles.linkText}>Notes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('Reminders')}
      >
        <Text style={styles.linkText}>Reminders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('ShoppingList')}
      >
        <Text style={styles.linkText}>ShoppingList</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  link: {
    borderStyle: 'solid',
    borderWidth: 1.6,
    borderColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10
  },

  linkText: {
    fontWeight: 'bold',
    fontSize: 30
  }
});
