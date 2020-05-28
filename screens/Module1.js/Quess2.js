import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, ScrollView, CheckBox, FlatList,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';

export default function Quess2({  route, navigation }) {
  
  const message = navigation.getParam('data');
  const [score, setsSore] = useState(message);

  const [state, setState] = useState(true);

  const [bcheck, setbCheck] = useState(false);
  const [bcheck2, setbCheck2] = useState(false);
  const [bcheck3, setbCheck3] = useState(false);
  const [bcheck4, setbCheck4] = useState(false);

  
  const bhandlecheck = () => {
    setbCheck(!bcheck),setbCheck2(false),setbCheck3(false),setbCheck4(false),setState(false)
  }
  const bhandlecheck2 = () => {
    setbCheck(false),setbCheck2(!bcheck2),setbCheck3(false),setbCheck4(false),
    setsSore(score+1),setState(false)
  }
  const bhandlecheck3 = () => {
    setbCheck(false),setbCheck2(false),setbCheck3(!bcheck3),setbCheck4(false),setState(false)
  }
  const bhandlecheck4 = () => {
    setbCheck(false),setbCheck2(false),setbCheck3(false),setbCheck4(!bcheck4),setState(false)
  }
  return (
    <View>
    <ScrollView>
    <Card>
    <Text style={styles.question}>2.India's first satellite is named after</Text>
   <View >
      <CheckBox style={styles.box} value={bcheck} onChange={bhandlecheck}/>
      <Text style={styles.txt}>a.Bhaskara II</Text>
      <CheckBox style={styles.box} value={bcheck2} onChange={bhandlecheck2}/>
      <Text style={styles.txt}>b.Aryabhatta</Text>
      <CheckBox style={styles.box} value={bcheck3} onChange={bhandlecheck3}/>
      <Text style={styles.txt}>c.Bhaskara I</Text>
      <CheckBox style={styles.box} value={bcheck4} onChange={bhandlecheck4}/>
      <Text style={styles.txt}>d.Albert Einstein</Text>
      {state ? ( <View style={styles.btn}>
        <Text style={styles.text}  onPress={() => { alert('select any option')
        }}>NEXT</Text>
     </View>):( <View style={styles.btn}>
        <Text style={styles.text}  onPress={() => {
          navigation.navigate('Quess3', {
            data: score
          });
        }}>NEXT</Text>
     </View>)}
   </View>
   </Card>
   
</ScrollView>
</View>
);
}
const styles = StyleSheet.create({
box: {
   marginTop:20,
   color: 'grey',
   fontWeight: 'bold',
   fontSize: 20,
},
txt:{
 fontSize:16,
 marginLeft:40,
 marginTop:-27,
 fontWeight: 'bold',
 color:'grey'
},
question:{
 fontWeight: 'bold',
 fontSize:16,
 color:'#696969'
},
btn:{
 marginRight:40,
 marginLeft:40,
 marginTop:25,
 paddingTop:20,
 paddingBottom:20,
 backgroundColor:'#ff8c00',
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
