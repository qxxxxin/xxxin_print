
# react-native-authxxxxin-print
This package works with Honeywell devices that use the Intermec RP4D printer used DPL. It may also work on other Intermec printers, but this is not guaranteed.
Only works on Android.

## Installation

```
yarn add react-native-authxxxxin-print
```

To install the native dependencies:

```
react-native link react-native-honeywell-printer
```


#方法
.connectBlue() //连接蓝牙
.printText('梨花风起正清明，游子寻春半出城。','50',80,50); //打印字体
.qrCode('aaabbbbccc','00',100,100); //打印二维码
.printLine(40,80,40,100); //打印直线
.closeBlue(); //关闭蓝牙连接
.clearDPL(); //清理 #每次打印前或者打印后，做个清空

## TODO

fix bug
There is no indication whether printing succeeded or failed


We probably won't have time to build this since we'll only have a Intermec printer for a limited time.