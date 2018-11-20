/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};
export default class App extends Component {
    
    constructor(){
        super();
        this.state = {
            value: ""
        };
        this.handleOnTextChange = this.handleOnTextChange.bind(this);
        this.handleOnTextChangePassword = this.handleOnTextChangePassword.bind(this);
    }

    handleOnTextChange(data){
        this.setState({
            value: data
        });
    }

    handleOnTextChangePassword(data){
        this.setState({
            value: data
        });
    }

    pressLogin(){

    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{flex:1 ,justifyContent:'center',flexDirection:'row'}}>
                    <Text 
                        style={{color :"#37474f", fontSize: 100,alignContent:'center',marginTop:50}}>
                        Login
                    </Text>
                </View>
                <View style={{flex:2,marginTop:100}}>
                    <Text style={styles.Tstyle}>Username</Text>
                    <TextInput
                        placeholder=""
                        style={styles.te_EmlStyle}
                        underlineColorAndroid="#62727b"
                        onChangeText={this.handleOnTextChange}/>

                    <Text style={styles.Tstyle}>Password</Text> 

                    <TextInput 
                        placeholder=""
                        style={styles.te_PassStyle}
                        underlineColorAndroid="#62727b"
                        onChange={this.handleOnTextChangePassword}/>

                    <Button 
                            style={{
                                marginTop:10
                            
                                ,marginRight:10
                                ,marginLeft:10
                                ,marginBottom:10
                                ,width:200 
                                ,height:100   }}
                            color="#0d47a1" 
                            title= "Login" 
                            onPress={this.pressLogin}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
    te_PassStyle: {
        marginRight: 15,
        marginLeft: 15 ,
        fontSize:18,
    },
    te_EmlStyle:{
        marginRight: 15,
        marginLeft: 15,
        fontSize:18,
    },
    Tstyle: {
        fontSize: 18,
        color:'#37474f',
        marginLeft: 15,
        marginRight:15,
        marginBottom: 15,
        
    },
});
