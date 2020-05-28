import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Card } from 'react-native-elements';

export default function Modules({ navigation }) {

  const pressHandler = () => {
    // navigation.goBack();
    navigation.push('Quess1');
  }
  const pressHandler2 = () => {
    // navigation.goBack();
    navigation.push('Qu1');
  }
  const pressHandler3 = () => {
    // navigation.goBack();
    navigation.push('Quess1');
  }
  const pressHandler4 = () => {
    // navigation.goBack();
    navigation.push('Qu1');
  }
  const pressHandler5 = () => {
    // navigation.goBack();
    navigation.push('Quess1');
  }

  return (
    <Card>
    <View style={styles.btn}>
      <Text style={styles.text} onPress={pressHandler}>MODULE 1</Text>
    </View>
    <View style={styles.btn}>
      <Text style={styles.text} onPress={pressHandler2}>MODULE 2</Text>
    </View>
    <View style={styles.btn}>
      <Text style={styles.text} onPress={pressHandler3}>MODULE 3</Text>
    </View>
    <View style={styles.btn}>
      <Text style={styles.text} onPress={pressHandler4}>MODULE 4</Text>
    </View>
    <View style={styles.btn}>
      <Text style={styles.text} onPress={pressHandler5}>MODULE 5</Text>
    </View>
    </Card>
  );
}
const styles = StyleSheet.create({
  btn:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#ff6347',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  text:{
    color:'#fff',
    textAlign:'center',
    fontSize: 18,
  }
});
