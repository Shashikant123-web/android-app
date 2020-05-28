import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, ScrollView, CheckBox} from 'react-native';
import { Card } from 'react-native-elements';

export default function Answer({ navigation }) {
  const results = () => {
    alert('Congrats, Your score '+score+'/5')
  }
  const [score, setsSore] = useState(0);

  const [check, setCheck] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  const [bcheck, setbCheck] = useState(false);
  const [bcheck2, setbCheck2] = useState(true);
  const [bcheck3, setbCheck3] = useState(false);
  const [bcheck4, setbCheck4] = useState(false);

  const [ccheck, setcCheck] = useState(false);
  const [ccheck2, setcCheck2] = useState(false);
  const [ccheck3, setcCheck3] = useState(true);
  const [ccheck4, setcCheck4] = useState(false);

  const [dcheck, setdCheck] = useState(false);
  const [dcheck2, setdCheck2] = useState(false);
  const [dcheck3, setdCheck3] = useState(true);
  const [dcheck4, setdCheck4] = useState(false);

  const [echeck, seteCheck] = useState(false);
  const [echeck2, seteCheck2] = useState(false);
  const [echeck3, seteCheck3] = useState(false);
  const [echeck4, seteCheck4] = useState(true);

  return (
    <View>
    <ScrollView>
    <Card>
    <Text style={styles.question}>1. 	
    In which year of First World War Germany declared war on Russia and France?</Text>
   <View >
      <CheckBox style={styles.box} value={check} />
      <Text onPress={this.handlecheck} style={styles.txt}>a.1914</Text>
      <CheckBox style={styles.box} value={check2} />
      <Text onPress={this.handlecheck} style={styles.txt}>b.1915</Text>
      <CheckBox style={styles.box} value={check3} />
      <Text onPress={this.handlecheck} style={styles.txt}>c.1916</Text>
      <CheckBox style={styles.box} value={check4} />
      <Text onPress={this.handlecheck} style={styles.txt}>d.1917</Text>
   </View>
   </Card>
  
    <Card>
    <Text style={styles.question}>2.India's first satellite is named after</Text>
   <View >
      <CheckBox style={styles.box} value={bcheck} />
      <Text style={styles.txt}>a.Bhaskara II</Text>
      <CheckBox style={styles.box} value={bcheck2} />
      <Text style={styles.txt}>b.Aryabhatta</Text>
      <CheckBox style={styles.box} value={bcheck3} />
      <Text style={styles.txt}>c.Bhaskara I</Text>
      <CheckBox style={styles.box} value={bcheck4} />
      <Text style={styles.txt}>d.Albert Einstein</Text>
   </View>
   </Card>
  
    <Card>
    <Text style={styles.question}>3.India's first atomic reactor was</Text>
   <View >
      <CheckBox style={styles.box} value={ccheck} />
      <Text style={styles.txt}>a.Zerlina</Text>
      <CheckBox style={styles.box} value={ccheck2} />
      <Text style={styles.txt}>b.Dhruva</Text>
      <CheckBox style={styles.box} value={ccheck3} />
      <Text style={styles.txt}>c.Apsara</Text>
      <CheckBox style={styles.box} value={ccheck4} />
      <Text style={styles.txt}>d.Kamini</Text>
   </View>
   </Card>
  
    <Card>
    <Text style={styles.question}>4.If speed of rotation of the earth increases, weight of the body</Text>
   <View >
      <CheckBox style={styles.box} value={dcheck} />
      <Text style={styles.txt}>a.increases</Text>
      <CheckBox style={styles.box} value={dcheck2} />
      <Text style={styles.txt}>b.remains unchanged</Text>
      <CheckBox style={styles.box} value={dcheck3} />
      <Text style={styles.txt}>c.decreases</Text>
      <CheckBox style={styles.box} value={dcheck4} />
      <Text style={styles.txt}>d.may decrease or increase</Text>
   </View>
   </Card>

    <Card>
    <Text style={styles.question}>5.India's first fast breeder neutron reactor was</Text>
   <View >
      <CheckBox style={styles.box} value={echeck} />
      <Text style={styles.txt}>a.Zerlina</Text>
      <CheckBox style={styles.box} value={echeck2} />
      <Text style={styles.txt}>b.Apsara</Text>
      <CheckBox style={styles.box} value={echeck3} />
      <Text style={styles.txt}>c.Purnima-I</Text>
      <CheckBox style={styles.box} value={echeck4} />
      <Text style={styles.txt}>d.Kamini</Text>
   </View>
   </Card>
  
   <View style={styles.btn}>
      <Text style={styles.text}  onPress={() => {
        navigation.navigate('Modules')
      }}>PLAY AGAIN</Text>
   </View>
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
    backgroundColor:'#483d8b',
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
