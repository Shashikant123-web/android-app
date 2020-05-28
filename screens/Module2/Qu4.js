import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, ScrollView, CheckBox, FlatList,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';

export default function Qu4({  route, navigation }) {
  
  const message = navigation.getParam('data');
  const [score, setsSore] = useState(message);

  const [state, setState] = useState(true);


  const [dcheck, setdCheck] = useState(false);
  const [dcheck2, setdCheck2] = useState(false);
  const [dcheck3, setdCheck3] = useState(false);
  const [dcheck4, setdCheck4] = useState(false);

  
  const dhandlecheck = () => {
    setdCheck(!dcheck),setdCheck2(false),setdCheck3(false),setdCheck4(false),setState(false)
  }
  const dhandlecheck2 = () => {
    setdCheck(false),setdCheck2(!dcheck2),setdCheck3(false),setdCheck4(false),
    setsSore(score+1),setState(false)
  }
  const dhandlecheck3 = () => {
    setdCheck(false),setdCheck2(false),setdCheck3(!dcheck3),setdCheck4(false),setState(false)
  }
  const dhandlecheck4 = () => {
    setdCheck(false),setdCheck2(false),setdCheck3(false),setdCheck4(!dcheck4),setState(false)
  }
  return (
    <View>
    <ScrollView>
    <Card>
    <Text style={styles.question}>4.The range of missile Agni is approximately</Text>
   <View >
      <CheckBox style={styles.box} value={dcheck} onChange={dhandlecheck}/>
      <Text style={styles.txt}>a.150 km</Text>
      <CheckBox style={styles.box} value={dcheck2} onChange={dhandlecheck2}/>
      <Text style={styles.txt}>b.1200-2000 km</Text>
      <CheckBox style={styles.box} value={dcheck3} onChange={dhandlecheck3}/>
      <Text style={styles.txt}>c.500 m to 9 km</Text>
      <CheckBox style={styles.box} value={dcheck4} onChange={dhandlecheck4}/>
      <Text style={styles.txt}>d.8 km</Text>
      </View>
      {state ? ( <View style={styles.btn}>
       <Text style={styles.text}  onPress={() => { alert('select any option')
       }}>NEXT</Text>
    </View>):( <View style={styles.btn}>
       <Text style={styles.text}  onPress={() => {
         navigation.navigate('Qu5', {
           data: score
         });
       }}>NEXT</Text>
    </View>)}
     
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
