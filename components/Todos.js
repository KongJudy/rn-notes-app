import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Todos = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  );
};
export default Todos;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '96%'
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    //wraps to the next line if it gets too long
    flexWrap: 'wrap'
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: '#43b2b6',
    opacity: 0.4,
    borderRadius: 4,
    marginRight: 12,
    borderColor: 'black',
    borderWidth: 1
  },
  text: {
    maxWidth: '80%'
  }
});
