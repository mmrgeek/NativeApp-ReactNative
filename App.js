/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

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
    }

    handleOnTextChange(data){
        this.setState({
            value: data
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    defaultValue={this.state.defaultValue} 
                    onChangeText={this.handleOnTextChange}/>
                <Text>
                    {this.state.value}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
