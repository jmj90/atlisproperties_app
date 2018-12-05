import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity} from 'react-native';
import LoginButton from '../../src/components/LoginButton'
import startMainTabs from './MainTabs/startMainTabs'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '200',
    fontSize: 35,
    letterSpacing: 5,
    textAlign: 'center',
    marginBottom: 30,
  },
  inputLabel: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    width: 300,
    fontSize: 15
  },
  rememberButton: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    alignItems: 'stretch',
    paddingLeft: 200,
    width: 300,
    fontSize: 15,
    marginTop: 10,
  },
  input: {
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    height: 40,
    width: 300,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    paddingLeft: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    width: "40%",
  }
});

export default class AuthScreen extends Component {

    constructor(){
      super()
      this.state = {
        email: '',
        pw: ''
      }
      this.focusNextField = this.focusNextField.bind(this);
      // to store our input refs
      this.inputs = {};
    }

    focusNextField(key) {
      this.inputs[key].focus();
    }

    emailInput = (evt) => {
      evt.length ?
      this.setState({
        email: true
      })
      :
      this.setState({
        email: false
      })
    }

    passInput = (evt) => {
      evt.length ?
      this.setState({
        pw: true
      })
      :
      this.setState({
        pw: false
      })
    }

    googleButton = () => {
      alert('google pressed')
    }


    render() {
      return (
        <ImageBackground
          source={require('../../assets/background.png')}
          style={{width: '100%', height: '100%'}}
        >
        <View style={styles.container}>

          <Image
          source={require('../../assets/atlislogo_1.png')}
          style={{width: 100, height: 100, marginTop: 200, resizeMode: 'contain'}}
          />
          <Text style={styles.welcome}>atlis properties</Text>

        {/* email */}
          <Text style={styles.inputLabel}> email </Text>
          <TextInput
          style={styles.input}
          ref={ input => {this.inputs['one'] = input }}
          onSubmitEditing={() => {this.focusNextField('two')}}
          autoCapitalize= {"none"}
          blurOnSubmit={false}
          returnKeyType={"next"}
          onChangeText={this.emailInput}
          />

        {/* password */}
          <Text style={styles.inputLabel}> password </Text>
          <TextInput
          style={styles.input}
          ref={ input => {
            this.inputs['two'] = input;
            }}
          onChangeText={this.passInput}
          returnKeyType={ "done" }
          secureTextEntry={true}
          />

        {/* remember me */}
          <Text style={styles.rememberButton}> remember me </Text>

        {/* forgot password, signup, or */}
          <Text style={{ marginTop: 20, marginBottom: 5, fontWeight: '300', fontFamily: 'Helvetica Neue' }}>  forgot password? </Text>
          <Text style={{ fontWeight: '300', fontFamily: 'Helvetica Neue' }}> sign up </Text>

        {/* or line */}
          <View
          style={{
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20
            }}
            >
            <View style={{
              width: 120,
              marginTop: 4,
              height: .5,
              backgroundColor: 'black'
              }} />
            <Text style={{ fontFamily: 'Helvetica Neue', fontWeight: '300', }}>   or   </Text>
            <View style={{
              width: 120,
              marginTop: 4,
              height: .5,
              backgroundColor: 'black'
              }} />
            </View>

          {/* google sign up/ sign in */}
          <TouchableOpacity onPress={this.googleButton} activeOpacity = { .8 }>
            <Image
            source={require('../../assets/google_signin.png')}
            style={{ height: 40, width: 185, resizeMode: 'cover'}}
            onPress={this.loginHandler}
            />
        </TouchableOpacity>

        <LoginButton data={this.state} onPress={this.loginHandler} />

        </View>
        </ImageBackground>
      );
    }
  }
