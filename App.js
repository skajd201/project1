import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';

export default function App() {

  const [a, setA] = useState();
  const [b, setB] = useState();

  const [result, setResult] = useState();

  function Count() {
    if(Number(a) || Number(b))
    {
      if(a % b == 0) {
      setResult("Число a делится на b без остатка");
    } else {
      setResult(a % b);
    }
    }else {
      setResult("");
    }
    
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.containerInputs}>
        <Text>a:</Text>
        <TextInput style={{borderWidth: 1}}
          onChangeText={setA}/>
        <Text>    b:</Text>
        <TextInput style={{borderWidth: 1}}
          onChangeText={setB}
        />
      </View>
      <Button onPress={Count} title="Расчитать"/>
      <Text>Остаток от деления: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  containerInputs: {
     flexDirection: "row",
  },
});
