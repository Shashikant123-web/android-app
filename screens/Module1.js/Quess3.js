import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, ScrollView, CheckBox, FlatList,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';

export default function Quess3({  route, navigation }) {
  
  const message = navigation.getParam('data');
  const [score, setsSore] = useState(message);

  const [state, setState] = useState(true);

  const [ccheck, setcCheck] = useState(false);
  const [ccheck2, setcCheck2] = useState(false);
  const [ccheck3, setcCheck3] = useState(false);
  const [ccheck4, setcCheck4] = useState(false);

  
  const chandlecheck = () => {
    setcCheck(!ccheck),setcCheck2(false),setcCheck3(false),setcCheck4(false),setState(false)
  }
  const chandlecheck2 = () => {
    setcCheck(false),setcCheck2(!ccheck2),setcCheck3(false),setcCheck4(false),setState(false)
  }
  const chandlecheck3 = () => {
    setcCheck(false),setcCheck2(false),setcCheck3(!ccheck3),setcCheck4(false),
    setsSore(score+1),setState(false)
  }
  const chandlecheck4 = () => {
    setcCheck(false),setcCheck2(false),setcCheck3(false),setcCheck4(!ccheck4),setState(false)
  }

  return (
    <View>
    <ScrollView>
    <Card>
    <Text style={styles.question}>3.India's first atomic reactor was</Text>
   <View >
      <CheckBox style={styles.box} value={ccheck} onChange={chandlecheck}/>
      <Text style={styles.txt}>a.Zerlina</Text>
      <CheckBox style={styles.box} value={ccheck2} onChange={chandlecheck2}/>
      <Text style={styles.txt}>b.Dhruva</Text>
      <CheckBox style={styles.box} value={ccheck3} onChange={chandlecheck3}/>
      <Text style={styles.txt}>c.Apsara</Text>
      <CheckBox style={styles.box} value={ccheck4} onChange={chandlecheck4}/>
      <Text style={styles.txt}>d.Kamini</Text>
      {state ? ( <View style={styles.btn}>
        <Text style={styles.text}  onPress={() => { alert('select any option')
        }}>NEXT</Text>
     </View>):( <View style={styles.btn}>
        <Text style={styles.text}  onPress={() => {
          navigation.navigate('Quess4', {
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
