import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, ScrollView, CheckBox} from 'react-native';
import { Card } from 'react-native-elements';

export default function Ques3({ navigation }) {
  const results = () => {
    alert('Congrats, Your score '+score+'/5')
  }
  const [score, setsSore] = useState(0);

  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  const handlecheck = () => {
    setCheck(!check),setCheck2(false),setCheck3(false),setCheck4(false)
  }
  const handlecheck2 = () => {
    setCheck(false),setCheck2(!check2),setCheck3(false),setCheck4(false),
    setsSore(score+1)
  }
  const handlecheck3 = () => {
    setCheck(false),setCheck2(false),setCheck3(!check3),setCheck4(false)
    
  }
  const handlecheck4 = () => {
    setCheck(false),setCheck2(false),setCheck3(false),setCheck4(!check4)
  }

  const [bcheck, setbCheck] = useState(false);
  const [bcheck2, setbCheck2] = useState(false);
  const [bcheck3, setbCheck3] = useState(false);
  const [bcheck4, setbCheck4] = useState(false);

  
  const bhandlecheck = () => {
    setbCheck(!bcheck),setbCheck2(false),setbCheck3(false),setbCheck4(false)
  }
  const bhandlecheck2 = () => {
    setbCheck(false),setbCheck2(!bcheck2),setbCheck3(false),setbCheck4(false),
    setsSore(score+1)
  }
  const bhandlecheck3 = () => {
    setbCheck(false),setbCheck2(false),setbCheck3(!bcheck3),setbCheck4(false)
  }
  const bhandlecheck4 = () => {
    setbCheck(false),setbCheck2(false),setbCheck3(false),setbCheck4(!bcheck4)
  }
  const [ccheck, setcCheck] = useState(false);
  const [ccheck2, setcCheck2] = useState(false);
  const [ccheck3, setcCheck3] = useState(false);
  const [ccheck4, setcCheck4] = useState(false);

  
  const chandlecheck = () => {
    setcCheck(!bcheck),setcCheck2(false),setcCheck3(false),setcCheck4(false),
    setsSore(score+1)
  }
  const chandlecheck2 = () => {
    setcCheck(false),setcCheck2(!bcheck2),setcCheck3(false),setcCheck4(false)
  }
  const chandlecheck3 = () => {
    setcCheck(false),setcCheck2(false),setcCheck3(!bcheck3),setcCheck4(false)
  }
  const chandlecheck4 = () => {
    setcCheck(false),setcCheck2(false),setcCheck3(false),setcCheck4(!bcheck4)
  }

  const [dcheck, setdCheck] = useState(false);
  const [dcheck2, setdCheck2] = useState(false);
  const [dcheck3, setdCheck3] = useState(false);
  const [dcheck4, setdCheck4] = useState(false);

  
  const dhandlecheck = () => {
    setdCheck(!dcheck),setdCheck2(false),setdCheck3(false),setdCheck4(false),
    setsSore(score+1)
  }
  const dhandlecheck2 = () => {
    setdCheck(false),setdCheck2(!dcheck2),setdCheck3(false),setdCheck4(false)
  }
  const dhandlecheck3 = () => {
    setdCheck(false),setdCheck2(false),setdCheck3(!dcheck3),setdCheck4(false)
  }
  const dhandlecheck4 = () => {
    setdCheck(false),setdCheck2(false),setdCheck3(false),setdCheck4(!dcheck4)
  }

  const [echeck, seteCheck] = useState(false);
  const [echeck2, seteCheck2] = useState(false);
  const [echeck3, seteCheck3] = useState(false);
  const [echeck4, seteCheck4] = useState(false);

  
  const ehandlecheck = () => {
    seteCheck(!echeck),seteCheck2(false),seteCheck3(false),seteCheck4(false),
    setsSore(score+1)
  }
  const ehandlecheck2 = () => {
    seteCheck(false),seteCheck2(!echeck2),seteCheck3(false),seteCheck4(false)
  }
  const ehandlecheck3 = () => {
    seteCheck(false),seteCheck2(false),seteCheck3(!echeck3),seteCheck4(false)
  }
  const ehandlecheck4 = () => {
    seteCheck(false),seteCheck2(false),seteCheck3(false),seteCheck4(!echeck4)
  }
  return (
    <View>
    <ScrollView>
    <Card>
    <Text style={styles.question}>1.Which one of these lists contains only Java programming language keywords?</Text>
   <View >
      <CheckBox style={styles.box} value={check} onChange={handlecheck}/>
      <Text onPress={this.handlecheck} style={styles.txt}>a.class, if, void, long, Int, continue</Text>
      <CheckBox style={styles.box} value={check2} onChange={handlecheck2}/>
      <Text onPress={this.handlecheck} style={styles.txt}>b.goto, instanceof, native, finally, default, throws</Text>
      <CheckBox style={styles.box} value={check3} onChange={handlecheck3}/>
      <Text onPress={this.handlecheck} style={styles.txt}>c.try, virtual, throw, final, volatile, transient</Text>
      <CheckBox style={styles.box} value={check4} onChange={handlecheck4}/>
      <Text onPress={this.handlecheck} style={styles.txt}>d.byte, break, assert, switch, include</Text>
      <Text>{check}</Text>
   </View>
   </Card>
  
    <Card>
    <Text style={styles.question}>2.Which is a reserved word in the Java programming language?</Text>
   <View >
      <CheckBox style={styles.box} value={bcheck} onChange={bhandlecheck}/>
      <Text style={styles.txt}>a.method</Text>
      <CheckBox style={styles.box} value={bcheck2} onChange={bhandlecheck2}/>
      <Text style={styles.txt}>b.native</Text>
      <CheckBox style={styles.box} value={bcheck3} onChange={bhandlecheck3}/>
      <Text style={styles.txt}>c.subclass</Text>
      <CheckBox style={styles.box} value={bcheck4} onChange={bhandlecheck4}/>
      <Text style={styles.txt}>d.array</Text>
      <Text>{check}</Text>
   </View>
   </Card>
  
    <Card>
    <Text style={styles.question}>3.Which is a valid keyword in java?</Text>
   <View >
      <CheckBox style={styles.box} value={ccheck} onChange={chandlecheck}/>
      <Text style={styles.txt}>a.interface</Text>
      <CheckBox style={styles.box} value={ccheck2} onChange={chandlecheck2}/>
      <Text style={styles.txt}>b.string</Text>
      <CheckBox style={styles.box} value={ccheck3} onChange={chandlecheck3}/>
      <Text style={styles.txt}>c.float</Text>
      <CheckBox style={styles.box} value={ccheck4} onChange={chandlecheck4}/>
      <Text style={styles.txt}>d.unsigned</Text>
      <Text>{check}</Text>
   </View>
   </Card>
  
    <Card>
    <Text style={styles.question}>4.Which is the valid declarations within an interface definition?</Text>
   <View >
      <CheckBox style={styles.box} value={dcheck} onChange={dhandlecheck}/>
      <Text style={styles.txt}>a.public double methoda();</Text>
      <CheckBox style={styles.box} value={dcheck2} onChange={dhandlecheck2}/>
      <Text style={styles.txt}>b.public final double methoda();</Text>
      <CheckBox style={styles.box} value={dcheck3} onChange={dhandlecheck3}/>
      <Text style={styles.txt}>c.static void methoda(double d1);</Text>
      <CheckBox style={styles.box} value={dcheck4} onChange={dhandlecheck4}/>
      <Text style={styles.txt}>d.protected void methoda(double d1);</Text>
      <Text>{check}</Text>
   </View>
   </Card>

    <Card>
    <Text style={styles.question}>5.Which is a valid declarations of a String?</Text>
   <View >
      <CheckBox style={styles.box} value={echeck} onChange={ehandlecheck}/>
      <Text style={styles.txt}>a.String s1 = null;</Text>
      <CheckBox style={styles.box} value={echeck2} onChange={ehandlecheck2}/>
      <Text style={styles.txt}>b.String s2 = 'null';</Text>
      <CheckBox style={styles.box} value={echeck3} onChange={ehandlecheck3}/>
      <Text style={styles.txt}>c.String s3 = (String) 'abc';</Text>
      <CheckBox style={styles.box} value={echeck4} onChange={ehandlecheck4}/>
      <Text style={styles.txt}>d.String s4 = (String) '\ufeed';</Text>
      <Text>{check}</Text>
   </View>
   </Card>
  
   <View style={styles.btn}>
      <Text style={styles.text} onPress={results}>SUBMIT</Text>
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
