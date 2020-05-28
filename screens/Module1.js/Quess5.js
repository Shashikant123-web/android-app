import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, ScrollView, CheckBox} from 'react-native';
import { Card } from 'react-native-elements';

export default function Quess5({ navigation }) {
  const results = () => {
    alert('Congrats, Your score '+score+'/5')
  }
  const message = navigation.getParam('data');
  const [score, setsSore] = useState(message);

  const [state, setState] = useState(true);


  const [echeck, seteCheck] = useState(false);
  const [echeck2, seteCheck2] = useState(false);
  const [echeck3, seteCheck3] = useState(false);
  const [echeck4, seteCheck4] = useState(false);

  
  const ehandlecheck = () => {
    seteCheck(!echeck),seteCheck2(false),seteCheck3(false),seteCheck4(false),setState(false)
  }
  const ehandlecheck2 = () => {
    seteCheck(false),seteCheck2(!echeck2),seteCheck3(false),seteCheck4(false),setState(false)
  }
  const ehandlecheck3 = () => {
    seteCheck(false),seteCheck2(false),seteCheck3(!echeck3),seteCheck4(false),setState(false)
  }
  const ehandlecheck4 = () => {
    seteCheck(false),seteCheck2(false),seteCheck3(false),seteCheck4(!echeck4),
    setsSore(score+1),setState(false)
  }
  return (
    <View>
    <ScrollView>
   
    <Card>
    <Text style={styles.question}>5.India's first fast breeder neutron reactor was</Text>
   <View >
      <CheckBox style={styles.box} value={echeck} onChange={ehandlecheck}/>
      <Text style={styles.txt}>a.Zerlina</Text>
      <CheckBox style={styles.box} value={echeck2} onChange={ehandlecheck2}/>
      <Text style={styles.txt}>b.Apsara</Text>
      <CheckBox style={styles.box} value={echeck3} onChange={ehandlecheck3}/>
      <Text style={styles.txt}>c.Purnima-I</Text>
      <CheckBox style={styles.box} value={echeck4} onChange={ehandlecheck4}/>
      <Text style={styles.txt}>d.Kamini</Text>
      {state ? ( <View style={styles.btn}>
        <Text style={styles.text}  onPress={() => { alert('select any option')
        }}>NEXT</Text>
     </View>):( <View style={styles.btn}>
        <Text style={styles.text}  onPress={() => {
          navigation.navigate('result1', {
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
