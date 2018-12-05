import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import startMainTabs from '../screens/MainTabs/startMainTabs'

const LoginButton = (props) => {

  this.state = {
    active: props.data
  }

loginHandler = () => {
  startMainTabs()
}


  return (
    <View style={styles.container}
      onPress={this.buttonPress}>

      {
        this.state.active.pw === true && this.state.active.email === true ?
          <TouchableOpacity
            style={styles.buttonActive}
            onPress={this.loginHandler}>
            <Text style={{ fontFamily: 'Helvetica Neue', fontWeight: '300', fontSize: 15, letterSpacing: 4, color: "white" }}>
              LOGIN
            </Text>
          </TouchableOpacity>
        :
          <View />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0,
    width: '100%'
  },
  buttonActive: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29abe2',
    width: '100%',
    height: '50%',
  },
})

export default LoginButton;
