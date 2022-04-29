import React from 'react';
import { StyleSheet, Text, View,Image,Platform,TouchableOpacity,StatusBar } from 'react-native';

export  const SplashScreen=({navigation})=>{
  return (
    <View style={styles.container}>
     <Text style={{fontSize:35,color:'black'}}>Flamingo Express</Text>

      <View style={styles.buttonContainer}>

      <View style={{width:"50%"}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('SignInScreen')}}>
            <View style={[styles.button,{borderTopLeftRadius:10,borderBottomLeftRadius:10}]}>
            <Text style={styles.buttonText}>Login</Text>
            </View>
         </TouchableOpacity>
      </View>
        
      

      <View style={{width:"50%"}}>
      <TouchableOpacity onPress={()=>{navigation.navigate('SignUpScreen')}}>
        <View style={[styles.button,{borderBottomRightRadius:10,borderTopRightRadius:10}]}>
          <Text style={styles.buttonText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
        
      


    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
    marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  buttonContainer:{
    flexDirection:'row',
    width:'75%',
    justifyContent:'center',
    marginTop:30
  },
  button:{
    
    backgroundColor:"white",
    elevation:20,
    alignItems:'center',
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.26,
    color:'black'
  },
  buttonText:{
    fontSize:25,
    color:'black',
    padding:10
  }
});
