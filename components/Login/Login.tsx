import { Try } from 'expo-router/build/views/Try';
import React, { useEffect, useState } from 'react'
import { View,Text, TextInput, StyleSheet, Button, Alert } from 'react-native'

type User={
    name:string;
    email:string;
}

function Login() {

  const [selectUser,setselectUser]=useState<User>({
    name:"",
    email:""
  });

  // const [user,setUser] = useState<User>({} as User);

  const handleInputChange=(field : string , data : string)=>{
    setselectUser((prev)=>{
        return{
            ...prev,
            [field]:data
        }
    })
  }

  const clickLogin = () => {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify(selectUser),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      Alert.alert("The proccess is successful")

    } catch (error) {
      Alert.alert("The proccess failed");
    }
    finally{
      console.log("The proccess ended");
    }
  };

  return (
    <View style={styles.mainView}>
        <Text style={styles.header}>Sign Up</Text>
        <View>
            <TextInput value={selectUser.name} onChangeText={(text)=>{handleInputChange("name",text)}} style={styles.input} placeholder='Enter your name'  placeholderTextColor={"#bcbcc2"}></TextInput>
            <TextInput value={selectUser.email} onChangeText={(text)=>{handleInputChange("email",text)}} style={styles.input} placeholder='Enter your email' placeholderTextColor={"#bcbcc2"}></TextInput>
            <View style={styles.loginButton}>
               <Button onPress={clickLogin} title="Sign up"></Button>
            </View>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    mainView:{
        marginVertical:130
    },
    header:{
        fontSize:30,
        margin:"auto",
        marginBottom:30
    },
    input:{
        borderRadius:4,
        borderColor:"#bcbcc2",
        borderWidth:2,
        width:400,
        fontSize:20,
        textAlign:"left",
        paddingLeft:20,
        height:40,
        margin:"auto",
        marginBottom:10
    },
    loginButton:{
        width:400,
        height:40,
        borderRadius:4,
        borderWidth:2,
        borderColor:"#72a7f6",
        backgroundColor:"#2196f3",
        margin:"auto"
    }
})

export default Login