import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View>
            <TextInput style={styles.input} placeholder="Jump to..." />
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>Unreads</Text>

          </View>
          <View style={styles.channelBoxWrapper} >
              <View style={styles.channelBox}>
                  
              <Text style={styles.channelText}>#</Text>
              <Text style={[styles.channelText,styles.marginText]}>announcement</Text>
              </View>
              <View style={styles.bullet}>
                    <Text style={{color:'#ffffff'}}>2</Text>
              </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    borderColor: "#000000",
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: "solid",

    padding: 10,
    borderRadius: 5,
    fontWeight: "500",
  },
  box: {
      marginVertical:10
  },
  title: {
      fontSize:16,
      fontWeight: "600",
      color:"#1c1c1c"
  },
  channelBoxWrapper: {
    flexDirection:'row', justifyContent:'space-between', alignItems:'center'
  },
  channelBox: {
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
  },
  channelText: {
    fontWeight:'bold',fontSize:18
  },
  marginText: {
    marginHorizontal:20
  }
,bullet: {
    backgroundColor:"#CE365C", paddingHorizontal:10,paddingVertical:5,borderRadius:20
}
});
export default HomeScreen;
