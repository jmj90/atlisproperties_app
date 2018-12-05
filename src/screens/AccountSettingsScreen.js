import React, {Component} from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default class AccountSettingsScreen extends Component {
  render () {
    return(
      <View>
        <ImageBackground
          source={require('../../assets/background.png')}
          style={{width: '100%', height: '100%'}}
        >
        <Text> Acounnt Settings </Text>
        </ImageBackground>
      </View>
    );
  }
}
