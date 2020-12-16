import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Button} from 'react-native';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View
    style={{ width:200 , height:100, marginTop:80}}>
    <Button
    title="sound1"
    color="red"
    onPress={() => Alert.alert('Play Sound 1')} />
    </View>
    <View
    style={{ width:200 , height:100, marginTop:80}}>
    <Button
    title="sound2"
    color="green"
    onPress={() => Alert.alert('Play Sound 2')} />
    </View>
    <View
    style={{ width:200 , height:100, marginTop:80}}>
    <Button
    title="sound3"
    color="blue"
    onPress={() => Alert.alert('Play Sound 3')} />
    </View>
    <View
    style={{ width:200 , height:100, marginTop:80}}>
    <Button
    title="sound4"
    color="yellow"
    onPress={() => Alert.alert('Play Sound 4')} />
    <View
    style={{ width:200 , height:100, marginTop:80}}>
    <Button
    title="sound5"
    color="purple"
    onPress={() => Alert.alert('Play Sound 5')} />
    </View>
    </View>
});