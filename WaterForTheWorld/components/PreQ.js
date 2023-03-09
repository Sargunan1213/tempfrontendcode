import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function PreQ({ navigation }){
    return(
        <View style={styles.background}>
            <Text style={styles.text}>pre questionnaire page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
      backgroundColor: '#1E1E1E',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    },
    text:{
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height/6,
        textAlign:'center',
        fontSize:30,
        fontWeight: 'bold',
      },
});