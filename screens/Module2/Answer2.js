import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, ScrollView, CheckBox} from 'react-native';
import { Card } from 'react-native-elements';

export default function Answer2({ navigation }) {
  
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(true);

  const [bcheck, setbCheck] = useState(false);
  const [bcheck2, setbCheck2] = useState(false);
  const [bcheck3, setbCheck3] = useState(true);
  const [bcheck4, setbCheck4] = useState(false);

  
  const [ccheck, setcCheck] = useState(false);
  const [ccheck2, setcCheck2] = useState(false);
  const [ccheck3, setcCheck3] = useState(false);
  const [ccheck4, setcCheck4] = useState(true);

  
  const [dcheck, setdCheck] = useState(false);
  const [dcheck2, setdCheck2] = useState(true);
  const [dcheck3, setdCheck3] = useState(false);
  const [dcheck4, setdCheck4] = useState(false);

  
  const [echeck, seteCheck] = useState(false);
  const [echeck2, seteCheck2] = useState(false);
  const [echeck3, seteCheck3] = useState(false);
  const [echeck4, seteCheck4] = useState(true);

  
  return (
    <View>
    <ScrollView>
    <Card>
    <Text style={styles.question}>1.The Olympic Flame, was, for the first time, ceremonially lighted and burnt in a giant torch at the entrance of the stadium at</Text>
   <View >
      <CheckBox style={styles.box} value={check} />
      <Text onPress={this.handlecheck} style={styles.txt}>a.Athens Games (1896)</Text>
      <CheckBox style={styles.box} value={check2} />
      <Text onPress={this.handlecheck} style={styles.txt}>b.London Games (1908)</Text>
      <CheckBox style={styles.box} value={check3} />
      <Text onPress={this.handlecheck} style={styles.txt}>c.Paris Games (1924)</Text>
      <CheckBox style={styles.box} value={check4} />
      <Text onPress={this.handlecheck} style={styles.txt}>d.Amsterdam Games (1928)</Text>
   </View>
   </Card>
  
    <Card>
    <Text style={styles.question}>2.	
    The reaction which converts sugar solution into alcohol is an example of</Text>
   <View >
      <CheckBox style={styles.box} value={bcheck} />
      <Text style={styles.txt}>a.saponification</Text>
      <CheckBox style={styles.box} value={bcheck2} />
      <Text style={styles.txt}>b.hydrogenation</Text>
      <CheckBox style={styles.box} value={bcheck3} />
      <Text style={styles.txt}>c.fermentation</Text>
      <CheckBox style={styles.box} value={bcheck4} />
      <Text style={styles.txt}>d.hydrolysis</Text>
   </View>
   </Card>
  
    <Card>
    <Text style={styles.question}>3.The purpose of United Nations Fund for Population Activities (UNFPA) is</Text>
   <View >
      <CheckBox style={styles.box} value={ccheck} />
      <Text style={styles.txt}>a.studying population dynamics</Text>
      <CheckBox style={styles.box} value={ccheck2} />
      <Text style={styles.txt}>b.collecting population data</Text>
      <CheckBox style={styles.box} value={ccheck3} />
      <Text style={styles.txt}>c.evolving population policies, family planning and related programmes</Text>
      <CheckBox style={styles.box} value={ccheck4} />
      <Text style={styles.txt}>d.All of the above</Text>
   </View>
   </Card>
  
    <Card>
    <Text style={styles.question}>4.The range of missile Agni is approximately</Text>
   <View >
      <CheckBox style={styles.box} value={dcheck}/ >
      <Text style={styles.txt}>a.150 km</Text>
      <CheckBox style={styles.box} value={dcheck2} />
      <Text style={styles.txt}>b.1200-2000 km</Text>
      <CheckBox style={styles.box} value={dcheck3} />
      <Text style={styles.txt}>c.500 m to 9 km</Text>
      <CheckBox style={styles.box} value={dcheck4} />
      <Text style={styles.txt}>d.8 km</Text>
   </View>
   </Card>

    <Card>
    <Text style={styles.question}>5.The red blood cells are in the</Text>
   <View >
      <CheckBox style={styles.box} value={echeck} />
      <Text style={styles.txt}>a.heart</Text>
      <CheckBox style={styles.box} value={echeck2} />
      <Text style={styles.txt}>b.liver</Text>
      <CheckBox style={styles.box} value={echeck3} />
      <Text style={styles.txt}>c.lymph nodes</Text>
      <CheckBox style={styles.box} value={echeck4} />
      <Text style={styles.txt}>d.bone marrow</Text>
    
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
