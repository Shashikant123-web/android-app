import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, ScrollView, CheckBox, FlatList,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';

export default function Qu1({  route, navigation }) {
  
  const [score, setsSore] = useState(0);
  const [state, setState] = useState(true);

  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  const handlecheck = () => {
    setCheck(!check),setCheck2(false),setCheck3(false),setCheck4(false),setState(false)
  }
  const handlecheck2 = () => {
    setCheck(false),setCheck2(!check2),setCheck3(false),setCheck4(false),setState(false)
  }
  const handlecheck3 = () => {
    setCheck(false),setCheck2(false),setCheck3(!check3),setCheck4(false),setState(false)
    
  }
  const handlecheck4 = () => {
    setCheck(false),setCheck2(false),setCheck3(false),setCheck4(!check4),
    setsSore(score+1),setState(false)
  }


  return (
    <View>
    <ScrollView>
    <Card>
    <Text style={styles.question}>1.The Olympic Flame, was, for the first time, ceremonially lighted and burnt in a giant torch at the entrance of the stadium at</Text>
   <View >
      <CheckBox style={styles.box} value={check} onChange={handlecheck}/>
      <Text onPress={this.handlecheck} style={styles.txt}>a.Athens Games (1896)</Text>
      <CheckBox style={styles.box} value={check2} onChange={handlecheck2}/>
      <Text onPress={this.handlecheck} style={styles.txt}>b.London Games (1908)</Text>
      <CheckBox style={styles.box} value={check3} onChange={handlecheck3}/>
      <Text onPress={this.handlecheck} style={styles.txt}>c.Paris Games (1924)</Text>
      <CheckBox style={styles.box} value={check4} onChange={handlecheck4}/>
      <Text onPress={this.handlecheck} style={styles.txt}>d.Amsterdam Games (1928)</Text>
      </View>
      {state ? ( <View style={styles.btn}>
       <Text style={styles.text}  onPress={() => { alert('select any option')
       }}>NEXT</Text>
    </View>):( <View style={styles.btn}>
       <Text style={styles.text}  onPress={() => {
         navigation.navigate('Qu2', {
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
