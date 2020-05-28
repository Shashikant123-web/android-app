import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, ScrollView, CheckBox, FlatList,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';

export default function Quess1({ navigation }) {

  const [score, setsSore] = useState(0);
  const [state, setState] = useState(true);
  // const next = () => {
  //   // navigation.goBack();
  //   navigation.navigate('Quess2',score);
 // }

  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  const handlecheck = () => {
    setCheck(!check),setCheck2(false),setCheck3(false),setCheck4(false),
    setsSore(score+1),setState(false)
  }
  const handlecheck2 = () => {
    setCheck(false),setCheck2(!check2),setCheck3(false),setCheck4(false),setState(false)
  }
  const handlecheck3 = () => {
    setCheck(false),setCheck2(false),setCheck3(!check3),setCheck4(false),setState(false)
    
  }
  const handlecheck4 = () => {
    setCheck(false),setCheck2(false),setCheck3(false),setCheck4(!check4),setState(false)
  }
  return (
    <View>
    <ScrollView>
    <Card>
    <Text style={styles.question}>1.
    In which year of First World War Germany declared war on Russia and France?</Text>
   <View >
      <CheckBox style={styles.box} value={check} onChange={handlecheck}/>
      <Text onPress={this.handlecheck} style={styles.txt}>a.1914</Text>
      <CheckBox style={styles.box} value={check2} onChange={handlecheck2}/>
      <Text onPress={this.handlecheck} style={styles.txt}>b.1915</Text>
      <CheckBox style={styles.box} value={check3} onChange={handlecheck3}/>
      <Text onPress={this.handlecheck} style={styles.txt}>c.1916</Text>
      <CheckBox style={styles.box} value={check4} onChange={handlecheck4}/>
      <Text onPress={this.handlecheck} style={styles.txt}>d.1917</Text>
   </View>
   {state ? ( <View style={styles.btn}>
    <Text style={styles.text}  onPress={() => { alert('select any option')
    }}>NEXT</Text>
 </View>):( <View style={styles.btn}>
    <Text style={styles.text}  onPress={() => {
      navigation.navigate('Quess2', {
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


// <FlatList 
//    data={score}
//    renderItem={({ item }) => (
//      <TouchableOpacity onPress={() => navigation.navigate('Quess2',item)}>
//             <Text >{item.tittle}</Text>
//             <Text >SSSSSSSSSs</Text>
//      </TouchableOpacity>
//    )}
//     />
   