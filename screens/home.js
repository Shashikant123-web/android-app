import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Home({ navigation }) {

  const pressHandler = () => {
    //navigation.navigate('ReviewDetails');
    navigation.push('Modules');
  }

  return (
    <View>
      <Text style={styles.question}>Welcome to Quizz</Text>
      <View style={styles.btn}>
      <Text style={styles.text} onPress={pressHandler}>LETS START</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  question: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 30,
    color: 'grey',
    marginBottom:40
    
  },
  btn:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#4682b4',
    borderRadius:10,
  },
   text:{
    color:'#fff',
    textAlign:'center',
    fontSize: 18,
  }
});
