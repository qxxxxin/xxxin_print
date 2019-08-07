/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules
} from 'react-native';

import HoneyPrint from'react-native-authxxxxin-print';


type Props = {};
export default class App extends Component<Props> {

  constructor() {
		super();

		this.state = {
			userText1: 'testing',
			userText2: 'hello',
			userText3: 'word',
			userPrintCount: 1
		};

  }

  async connectBlue(){
    HoneyPrint.connectBlue('84:25:3F:4D:95:CF');
  }

  async printText(){
    // row :高 col 宽
    //(String text,String fontID,Int row,Int col)
    HoneyPrint.printText('aaa','50',20,50);
    HoneyPrint.printText('bbb','50',40,50);
    HoneyPrint.printText('梨花风起正清明，游子寻春半出城。','50',80,50);

    HoneyPrint.printLabelOne();
    HoneyPrint.clearDPL();
    console.log('打印text')
  }


  async qrCode(){
    // HoneyPrint.qrCode('这是一首简单的小情歌','00',100,100);
    HoneyPrint.qrCode('aaabbbbccc','00',100,100);
    
    HoneyPrint.printLabelOne(); 
    HoneyPrint.clearDPL();
    console.log('打印qrCode')
  }

  async printLine(){
    HoneyPrint.printLine(40,80,40,100);

    HoneyPrint.printLabelOne(); 
    HoneyPrint.clearDPL();
    console.log('打印printLine')
  }

  printImage(){
    HoneyPrint.printImage('http://127.0.0.1:8989/icon.png',20,20);
    HoneyPrint.printLabelOne(); 
  }

  //
  closeBlue(){
    HoneyPrint.closeBlue();
  }

  //
  clearDPL(){
    HoneyPrint.clearDPL();
  }

  render() {
    return (
      <View style={styles.container}>

        <View>
          <TouchableOpacity
          style={{borderWidth:1, borderColor:'grey', padding:3, width:100, backgroundColor:'white'}}
          onPress={ this.connectBlue}>
            <Text>honey连接蓝牙!</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
          style={{borderWidth:1, borderColor:'grey', padding:3, width:100, backgroundColor:'white'}}
          onPress={ this.printText}>
            <Text>honey打印text!</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
          style={{borderWidth:1, borderColor:'grey', padding:3, width:100, backgroundColor:'white'}}
          onPress={ this.qrCode}>
            <Text>honey打印qrCode!</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
          style={{borderWidth:1, borderColor:'grey', padding:3, width:100, backgroundColor:'white'}}
          onPress={ this.printLine}>
            <Text>honey打印printLine!</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
          style={{borderWidth:1, borderColor:'grey', padding:3, width:100, backgroundColor:'white'}}
          onPress={ this.closeBlue}>
            <Text>honey打印关闭蓝牙连接!</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
