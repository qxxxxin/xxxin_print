
# react-native-authxxxxin-print

#方法
.connectBlue() //连接蓝牙
.printText('梨花风起正清明，游子寻春半出城。','50',80,50); //打印字体
.qrCode('aaabbbbccc','00',100,100); //打印二维码
.printLine(40,80,40,100); //打印直线
.closeBlue(); //关闭蓝牙连接
.clearDPL(); //清理 #每次打印前或者打印后，做个清空