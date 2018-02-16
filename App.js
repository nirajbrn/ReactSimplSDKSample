/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SimplSdk from 'react-native-android-library-simpl-sdk'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const onApprovalButtonPress = () => {
  SimplSdk.isApproved('d46b58216517e08c70c38cf21e200c47', '9538651315', 'niraj@getsimpl.com', true,
                      (result) => console.log("User approved: "+result),
                      (approvalError) => console.log("User approval error: "+approvalError));
};


const onAuthButtonPress = () => {
  SimplSdk.authorizeTransaction(10000, "12345", (transactionToken) => console.log("Transaction Token: "+transactionToken),
                                        (authError) => console.log("Authentication error: "+authError));
};

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.welcome} title='isApproved' onPress={onApprovalButtonPress}/>
        <Button style={styles.instructions} title='authorize' onPress={onAuthButtonPress}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
