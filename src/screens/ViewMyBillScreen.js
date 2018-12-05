import React, {Component} from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default class ViewMyBillScreen extends Component {
  render () {
    return(
      <ImageBackground
        source={require('../../assets/background.png')}
        style={{width: '100%', height: '100%'}}
      >
        <Text> View My Bill </Text>
      </ImageBackground>
    );
  }
}
