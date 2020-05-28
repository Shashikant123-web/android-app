import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, ScrollView, CheckBox, FlatList,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';



export default function Module1Result({  route, navigation }) {
  
    const message = navigation.getParam('data');
    const [score, setsSore] = useState(message);
  
    return (
      <View>
      <ScrollView>
      <Card>
      <Text style={styles.question}>Congrts your score {score}/5</Text>
     </Card> 
     <View style={styles.btn}>
      <Text style={styles.text}  onPress={() => {
        navigation.navigate('Modules')
      }}>PLAY AGAIN</Text>
   </View>
     <View style={styles.btn1}>
      <Text style={styles.text}  onPress={() => {
        navigation.navigate('Answer')
      }}>VIEW ANSWER</Text>
   </View>
  </ScrollView>
  </View>
  );
  }
  const styles = StyleSheet.create({
    question: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 28,
      marginTop: 30,
      color: '#3cb371',
      marginBottom:40
      
    },
    btn:{
     marginRight:40,
     marginLeft:40,
     marginTop:25,
     paddingTop:20,
     paddingBottom:20,
     backgroundColor:'#483d8b',
     borderRadius:10,
     borderWidth: 1,
     borderColor: '#fff',
     marginBottom:30
    },
    btn1:{
     marginRight:40,
     marginLeft:40,
     marginTop:7,
     paddingTop:20,
     paddingBottom:20,
     backgroundColor:'#ff6347',
     borderRadius:10,
     borderWidth: 1,
     borderColor: '#fff',
     marginBottom:30
    },
    text:{
     color:'#fff',
     textAlign:'center',
     fontSize: 18,
    }
  });
  