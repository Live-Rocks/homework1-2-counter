import { StatusBar } from 'expo-status-bar';                                 //模組套件
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';     //宣告才能用

export default function App() {                                              //變數
  const [count, setCount] = useState(0)

  const printOpacity = () => {                                               //log記錄檔
    console.log('clicked TouchableOpacity!')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>計數器</Text>
      <Text style={styles.maintext}>{count}</Text>

      <TouchableOpacity
        onPress={() => printOpacity()}
        onPress={() => setCount(count + 1)}
        style={{ width: 100, height: 50, backgroundColor: 'lemonchiffon', justifyContent: 'center' }}>
        <Text style={styles.maintext1} >
          +
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => printOpacity()}
        onPress={() => setCount(count - count)}
        style={{ width: 100, height: 50, backgroundColor: 'lightskyblue', justifyContent: 'center' }}>
        <Text style={styles.maintext} >
          return  zero
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => printOpacity()}
        onPress={() => setCount(count - 1)}
        style={{ width: 100, height: 50, backgroundColor: 'lemonchiffon', justifyContent: 'center' }}>
        <Text style={styles.maintext1} >
          -
        </Text>
      </TouchableOpacity>


    </View >

  );
}

const styles = StyleSheet.create({                                 //樣式表
  container: {                                                     //預設背景 
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {                                                      //標題格式
    textAlign: 'center',
    fontSize: 20,
    color: 'black'
  },
  maintext1: {                                                     //+-按鈕格式
    textAlign: 'center',
    fontSize: 30,
    color: 'black'
  }
});
